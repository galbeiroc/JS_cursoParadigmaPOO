((c, d)=>{
    c('*****Objetos Literales');
    const Perro = {
        nombre: 'Pilin',
        edad: 6,
        raza: 'Chanda',
        genero: 'Macho',
        esterilizado: true,
        ladrar () {
            c('Guauu, Guauu');
        },
        comer (comida = 'Croketa') {
            c(`${this.nombre} come ${comida}`);
        },
        aparecer (imagen) {
            d.write(`<img src="${imagen}";`);
        }
    };
    c(Perro,
        Perro.nombre,
        Perro.raza,
        Perro.esterilizado);
    Perro.ladrar ();
    Perro.comer('Tacos');
    Perro.aparecer('https://s3-eu-west-1.amazonaws.com/barkibu-blog/blog+images/mi-perro-tiene-hipo-muy-seguido-que-le-pasa/perros-hipo-2.jpg?');


    c('*****Objetos Prototipos');
        const Perro2 = new Object ()
        Perro2.nombre = 'Fiturio';
        Perro2.edad = 8;
        Perro2.eat = (comida = 'Bollo') => c(`${Perro2.nombre} come ${comida}`);
    
    c(Perro2,
        Perro2.nombre);
        Perro2.eat();

    c('*****Objetos Funciones Constructoras');

    function Perro3 (nombre, raza, esterilizado) {
        this.nombre = nombre;
        this.raza = raza;
        this.esterilizado = esterilizado;

        this.ladrar = () => c('Guauu Guauu');
        this.comer = (comida = 'Purnia') => c(`${this.nombre} come ${comida}`);
    }

    const perrito = new Perro3('Chocolate', 'Dalamta', true);
    c(perrito);

    c('*****Objetos Funciones Constructoras');

    class Dog {
        constructor (nombre, raza, esterilizado) {
            this.nombre = nombre;
            this.raza = raza;
            this.esterilizado = esterilizado;
        }

        ladrar () {
            c('Guauu Guauu');
        }

        comer (comida = 'carne') {
            c(`${this.nombre} como ${comida}`);
        }
    }

    const perro4 = new Dog('Cloice', 'Puff', true);
    c(perro4, perro4.raza);
    perro4.comer('sopa');
})(console.log, document);


/* const Dog = new Object ()
    Dog.nombre = 'Fiturio';
    Dog.edad = 8;
    Dog.eat = (comida = 'Bollo') => console.log(`${Dog.nombre} come ${comida}`);
    
    console.log(Dog, Dog.nombre);
    Dog.eat('Purina DOg');
 */

/* function Perro3 (nombre, raza, esterilizado) {
    this.nombre = nombre;
    this.raza = raza;
    this.esterilizado = esterilizado;

    this.ladrar = () => console.log('Guauu Guauu');
    this.comer = (comida = 'Purnia') => console.log(`${this.nombre} come ${comida}`);
}

const perrito = new Perro3('Chocolate', 'Dalamta', true);
console.log(perrito.nombre, perrito);
perrito.comer('pollo'); */
