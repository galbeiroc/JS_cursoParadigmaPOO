((c, d, xhr, j)=>{
    const movies = d.querySelector('#movies');

    /* let obj = { name: "John", age: 30, city: "New York" };
    let objJson = j.stringify(obj);
    c(objJson);
    c(j.parse(objJson)); */
    
    xhr.open('GET', './assets/movie.json', true);
    xhr.addEventListener('load', () =>{
        let moviesInfo,
        moviesTemplate= '';
        if (xhr.status >= 200 && xhr.status<=400) {
           moviesInfo = j.parse(xhr.responseText);
           c(moviesInfo); 
           moviesInfo['movies'].forEach(movie => {
                moviesTemplate += `
                    <articule>
                    <h2>${movie.title}</h2>                    
                    <img src="${movie.poster}">
                    <p>${movie.genres}</p>
                    <p>${movie.year}</p>
                    </articule>`;
            });
        }else {
            movies.innerHTML = `<b>El servidor No responde. Error No. ${xhr.status}: <mark>${xhr.statusText}</mark></b>`;
        }     
        
        movies.innerHTML = moviesTemplate;
    });
    xhr.send();

    
})(console.log, document, new XMLHttpRequest(), JSON);