((c) => {
c('***THIS IMPLICITO***');
    let yo = {
        nombre: 'Albeiro',
        apellido: 'Crespo',
        edad: 29,
        //caso 1
        saludar: function () {
            c(`Hola mi nombre es ${this.apellido}`);
        }
    };
     //caso 2
    let preparandoSaludo= function (obj) {
        obj.saludar = function () {
            c(`Hola mi apellido es ${this.lastName}`);
        };
    };
    yo.saludar();
    const Leo = {
        name: 'Leonardo',
        lastName: 'Gutierrez',
        edad: 28,
        sexo: 'Masculino'
    };
    preparandoSaludo(Leo);
    Leo.saludar();

    //Caso 3
    let Humano = function (nombre, edad, perro) {
        return {
            nombre: nombre,
            edad: edad,
            saludar: function () {
                c(`Hola mi nombre  es ${this.nombre}`);
            },
            perro: {
                nombre: perro,
                saludar: function () {
                    c(`${this.nombre} guauu guauu`);
                }
            }
        };
    };

    const acg = Humano('Albeiro', 29, 'Pilin');
    acg.saludar();
    acg.perro.saludar();
    
})(console.log);

((c) => {
    c('***THIS EXPLICITO***');
    const nombrar = function (f1, f2, f3) {
        c(`${this.nombre} es el lenguaje FrontEnd de la web tiene librerias
        y frameworks poderosos como ${f1}, ${f2}, ${f3}.`);
    };

    let lenguaje = {
        nombre: 'JavaScript',
        version: 6
    };
    let frameworks = ['Angular', 'React', 'Vue'];

    nombrar.call(lenguaje, frameworks[0], frameworks[1], frameworks[2]);
    nombrar.apply(lenguaje, frameworks);
    const frameworksJS = nombrar.bind(lenguaje, frameworks[0], frameworks[1], frameworks[2]);
    frameworksJS();
})(console.log);

((c) => {
    c('***THIS ASIGNACIÓN NEW***');
    let framework = function (nombre, url, lenguaje) {
        this.nombre = nombre;
        this.url = url;
        this.lenguaje = lenguaje;
    };

    const react = new framework('ReactJS,', 'https://reactjs.org/', 'JavaScript'),
    vue = Object.create(framework);
    vue.nombre = 'Vue.js';
    Angular = Object.create(framework);
    Angular.nombre = 'Angular';
    Angular.url = 'https://angular.io';
    c(react, vue, Angular);
})(console.log);

((c) => {
    c('***THIS ASIGNACIÓN GLOBAL***');
    let dimeunFramework = function () {
        console.log(this.nombre);
    };

    dimeunFramework();
    window.nombre = 'Angular';
    dimeunFramework();
})(console.log);

((c) =>{
    c('***THIS ASIGNACIÓN ARROW***');
    let lenguaje = {
        name: 'JavaScript',
        version: 6,
        framework: [
            {nombre: 'React', url: 'https://reactjs.org/' },
            {nombre: 'Angular', url: 'https://angular.io' },
            {nombre: 'Vue', url: 'https://vuejs.org/'}
        ],

        nombrar: function () {
            this.framework.forEach( fw => c(`${fw.nombre} es un lenguaje de ${this.name}`));
        }
    };
    lenguaje.nombrar();
    //7592776

})(console.log);