;
((c, d, xhr, j)=>{
    const starwars = d.querySelector('#starwars'),
        pagination = d.querySelector('#pagination')
        
        function loadPeople (startList) {
            let starwarsInfo,
            starwarsTemplate = ''

            if ( xhr.status >= 200 && xhr.status < 400 ) {
                starwarsInfo = j.parse(xhr.responseText)
                c(starwarsInfo)
                starwarsTemplate += `
                    <h3>Personajes encontrados ${starwarsInfo.count}</h3>
                    <ol start=${startList}>`

                starwarsInfo.results.forEach(people => { starwarsTemplate += `<li>${people.name}</li><p>${people.gender}</p>`})
                starwarsTemplate+=`</ol>
                    <nav id="pagination">
                        <a href="${starwarsInfo.previous}" id="previous">Atras</a>
                        <a href="${starwarsInfo.next}" id="next">Siguiente</a>
                    </nav>`
            } else {
                starwars.innerHTML=`Servidor No Responde. Error No. ${xhr.status}: ${xhr.statusText}`
            }            
            starwars.innerHTML = starwarsTemplate
        }

        d.addEventListener('DOMContentLoaded', e => { //DOMContentLoaded es igual a (document).ready, en version vanilaJS
            xhr.open('GET', 'https://swapi.co/api/people/', true)
            xhr.addEventListener('load', loadPeople)
            xhr.send()            
        })

        d.addEventListener('click', e => {
            e.preventDefault()
            c(e)
            if ( e.target.localName == 'a' && e.target.href.indexOf('null') === -1 ) {
                let startList = (e.target.search.slice(-1) -1)*10 + 1
                xhr.open('GET', e.target.href || 'https://swapi.co/api/people/', true)
                xhr.addEventListener('load', () => loadPeople(startList))
                xhr.send()
            } 
        })
})(console.log, document, new XMLHttpRequest(), JSON);