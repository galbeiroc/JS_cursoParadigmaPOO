;
((c,d)=>{

    c('*****Formulario Reactivo con VanillaJS*****')
    const form = d.forms[0],  //0 por que solo se tiene el formulario
    inputs = d.querySelectorAll('[required]')

    form.addEventListener('submit', e =>{
        e.preventDefault()
        alert('Se ha enviado un formulario')
    })

    inputs.forEach(input =>{
        let span = d.createElement('span') //Se crea un elemento HTML
        span.id = input.name
        input.insertAdjacentElement('afterend', span)//Esta func Recibe dos parametros, la posición donde quiere que se inserte, y el elemento
    
        input.addEventListener('keyup', e => {
            if (input.pattern) {
                let reExp = new RegExp(input.pattern) //clase expresion regular
                return (!reExp.exec(input.value))
                    ? d.querySelector(`#${input.name}`).textContent =`Formulario no valido ingresa ${input.title}`
                    : d.querySelector(`#${input.name}`).textContent = null
            }else {
                return (!input.value)
                    ? d.querySelector(`#${input.name}`).textContent =`${input.title} es Requerido`
                    : d.querySelector(`#${input.name}`).textContent = null
            }
        })
    })

})(console.log, document); 


