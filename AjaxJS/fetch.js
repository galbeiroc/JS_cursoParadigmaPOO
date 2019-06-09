;
((c, d)=>{
    const respuestaFetch = d.querySelector('#fetch')
     let temp = '';

    fetch('http://jsonplaceholder.typicode.com/albums/1/photos')
        .then(response => response.json()) //Tranforma la respuesta a un JSON
        .then(albums => {
            c(albums)
            albums.forEach(element => {
                temp +=`<a href="${element.url}"><img src="${element.thumbnailUrl}"></a>`;
            });
            respuestaFetch.innerHTML = temp;
        })
        .catch(err => c(err.message))

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => res.map(user => user.username))
            .then(userNames => c(userNames))
            //.then(userNames => respuestaFetch.innerHTML = userNames); 

        //Cargar una Imagen Asincronamente
        const img = d.querySelector('#fetch-img')
        
        fetch('./assets/img/js-logo.png')
        .then(res => res.blob())
        .then( blob => {
            c(blob)
            let objectImg = URL.createObjectURL(blob) //Se crea el objeto para injectarlo al DOM
            img.src = objectImg
            img.style.maxWidth = '300px'
        })
})(console.log, document);