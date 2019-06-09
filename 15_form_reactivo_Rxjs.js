;
((c,d)=>{
    c('*****Formulario Reactivo con RxJS*****')
    const form = d.forms[0],  //0 por que solo se tiene el formulario
    inputs = d.querySelectorAll('[required]'),
    formSubmit =Rx.Observable.fromEvent(form, 'submit'), //Func => fromEvent es un manejador de evntos
    inputsKeyup = Rx.Observable.fromEvent(d, 'keyup')

    formSubmit
        .subscribe( e => {
            e.preventDefault()
            alert('Se ha enviado un formulario')
        })

    

    inputs.forEach(input =>{
        let span = d.createElement('span') //Se crea un elemento HTML
        span.id = input.name
        input.insertAdjacentElement('afterend', span)//Esta func Recibe dos parametros, la posición donde quiere que se inserte, y el elemento
        
        input = inputsKeyup
        .filter( e => e.target.required ) //Filtra todos los elementos requeridos
        .map( e =>  e.target ) //Tranforma solo los target que tengan required
        .subscribe( el => {
            if (el.pattern) {
                let reExp = new RegExp(el.pattern) //clase expresion regular
                return (!reExp.exec(el.value))
                    ? d.querySelector(`#${el.name}`).textContent =`Formulario no valido ingresa ${el.title}`
                    : d.querySelector(`#${el.name}`).textContent = null
            }else {
                return (!el.value)
                    ? d.querySelector(`#${el.name}`).textContent =`${el.title} es Requerido`
                    : d.querySelector(`#${el.name}`).textContent = null
            }
        })
    })

})(console.log, document);