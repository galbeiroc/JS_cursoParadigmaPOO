((c) => {
    class Carrito {
        constructor (articulo) {
            this._articulo = articulo,
            this._carrito = {}
        }

        agregar(articulo, cantidad) {
            this._carrito[articulo] = cantidad;
        }
        eliminar(articulo) {
            delete this._carrito[articulo];
        }
        _iterable(){
            let mensaje = 'Carrito: \n';
            for (let key in this._carrito) {
                mensaje += `${this._carrito[key]} ${key}`;
            }
            return mensaje;
        }
        ver(articulo = 'todos'){
            return (articulo === 'todos') ?
                this._iterable()
            : (this._carrito.hasOwnProperty(articulo)) ?
                `${this._carrito[articulo]} ${articulo}`
            : `El Articulo ${articulo} No Exite`;
        }
    }
    const comics = new Carrito('Comics'),
    music = new Carrito('Music'),
    books = new Carrito('Books');

    c(comics, '\n',
        music, '\n',
        books
    );
})(console.log);
((c)=> {
    c('Herencia, Polimorfismo, Método Constructor, Setter y Getters, Modificadores de Acceso (Private, Protected, Public), Super Constructores, Super LLamadas y Mixins ');

    let privado = new WeakMap();
    class Telefono {
        constructor(marca, modelo, numero) {
            this.marca = marca;
            this.modelo = modelo;
            //this._numero = numero;
            privado.set(this, {_numero: numero});
            this.puedoLlamar = true;
        }

        llamar (){
            c('rinng rinng');
        }
        static queEs(){
            c('El teléfono es un dispositivo de telecomunicación diseñado para transmitir señales acústicas a distancia por medio de señales eléctricas');
        }

        set numero (numero) {
            privado.get(this)._numero=numero;
        }
        get numero () {
            return c(privado.get(this)._numero);
        }
        verInfo() {
            return c(`${this.constructor.name}: \n`, 
                    `\tMarca: ${this.marca} \n`,
                    `\tModelo: ${this.modelo}\n`,
                    `\tPuedo Llamar: ${this.puedoLlamar}`);
        }
    }
    Telefono.queEs();
    let tel = new Telefono('Nokia', 'x78', '456439' );
    tel.llamar();
    c(tel._numero);
    c(tel.marca);
    tel.numero;
    tel.numero = '365289';
    tel.numero;
    tel.verInfo();

    const operadora = Superclass => class extends Superclass {
        asignarOperadora( operadora ) {
            c(`La Operadora asignada es: ${operadora}`);
        }
    };
    const red = Superclass => class extends Superclass {
        asignarRed( red ) {
            c(`La Operadora asignada es: ${red}`);
        }
    };


    class Celular extends red(operadora(Telefono)) {
        
        constructor (marca, modelo, numero){
            super(marca, modelo, numero);
            this.tengoCable = false;
        }

        vibrar() {
            c('Vbrrr Vbrrr');
        }

        verInfo() {
            //return super.verInfo();
            return c(`${this.constructor.name}: \n`, 
                    `\tMarca: ${this.marca} \n`,
                    `\tModelo: ${this.modelo}\n`,
                    `\tPuedo Llamar: ${this.puedoLlamar}\n`,
                    `\tTengo Cable: ${this.tengoCable}`);
        }
    }
    let cel = new Celular('Huawei', 'Y6', '3241');
    cel.verInfo();
    cel.vibrar();
    cel.asignarRed('4G');
    cel.asignarOperadora('Tigo');

    class Smartphone extends Celular {
        constructor (marca, modelo, numero) {
            super(marca, modelo, numero);
        }
        conectar() {
            c('Conectado a Internet');
        }
    }
    let sm = new Smartphone('Apple', 'Xs', '36524');
    sm.conectar();
    
})(console.log);