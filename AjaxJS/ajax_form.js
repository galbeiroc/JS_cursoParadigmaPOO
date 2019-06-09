;
((c, d, xhr)=>{
    //c('Hola Mundo');
    const READY_STATE_COMPLETE = 4,
    OK = 200,
    NOT_FOUND= 404,
    form = d.forms[0],
    preload = form.querySelector('.preload'),
    message = form.querySelector('.message');

    form.addEventListener('submit', e => {
        let formsElements = d.querySelectorAll('[required]'), //Trae todos los elementos qur tienen el atributo required
        formData = '';

        e.preventDefault();
        //c(e);
        xhr.open('POST', './assets/send_mail.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //Esto significa que se tiene que enviar serializada la información
        xhr.addEventListener('load', e => {
            preload.classList.remove('hidden')

            if (xhr.readyState === READY_STATE_COMPLETE) {
                preload.classList.add('hidden')  
                message.classList.remove('hidden')
                
                if (xhr.status === OK) {
                    message.innerHTML = xhr.response;
                    form.reset();
                } else if (xhr.status === NOT_FOUND) {
                    message.innerHTML = `No responde el Servidor. Error No. ${xhr.status}: ${xhr.statusText}`;
                }
            }
        });
        formsElements.forEach( inputs => formData += `${inputs.name}=${inputs.value}&`)
        c(formData)
        xhr.send(encodeURI(formData));
    }) 
})(console.log, document, new XMLHttpRequest());
//alert('Hi');