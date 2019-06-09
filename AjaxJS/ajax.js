((c, d, xhr)=>{
    const READY_STATE_COMPLETE = 4, //Estado de petición AJAX
        OK = 200, //Codigo de servidor
        statusSe = "OK",
        NOT_FOUND = 404,  //Codigo de servidor
        preload = d.querySelector('#preload'),
        country = d.querySelector('#country'),
        menu = d.querySelector('.menu');

        function infoCountry() {
            
            preload.innerHTML= '<i class="fa fa-refresh fa-spin fa-5x"></i>';

            if (xhr.readyState === READY_STATE_COMPLETE && xhr.status === OK && xhr.statusText === statusSe) {
                c(xhr);
                preload.innerHTML='';
                country.innerHTML = xhr.response;
            } else if (xhr.status === NOT_FOUND) {
                preload.innerHTML='';
                country.innerHTML = `<b>El servidor No responde. Error No. ${xhr.status}: <mark>${xhr.statusText}</mark></b>`;
            }

        }

        function ajaxRequest(e) {
            e.preventDefault(); //Previene la acción 
            c(e);
            if (e.target.localName == 'a') { 
                xhr.open('GET', e.target.href, true); //Método GET ó POST, Se obtiene la URL del Objeto que origino el evento, true para que sea asíncrona
                xhr.addEventListener('readystatechange', infoCountry); //Método Ajax: readystatechange => Detección de cambios.
                xhr.setRequestHeader('content-type', 'text/html');
                xhr.send();
            }
            
        }

        menu.addEventListener('click', ajaxRequest);

})(console.log, document,new XMLHttpRequest());