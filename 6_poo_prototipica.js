((c) => {
    c('****Anidación de Objetos****')
    const curso = {
        titulo: 'Curso Avanzado de JS, Paradigmas de POO',
        docente: {
            nombre: 'Jose Palacios',
            edad: 48,
            contacto: {
                email: 'jpalacios@gmail.com',
                twitter: '@jpalacios',
                web: 'http://jpalaciosweb.co'
            }
        },
        costo: 40,
        url: 'https://ed.team',
        plataforma: {
            nombre: 'EDteam',
            oficinas: ['Lima', 'Bogota', 'Mexico']
        }
    };
    c( curso.docente.contacto.email);
    c( curso['plataforma']['oficinas'][0]);
    c( curso['docente'].edad);
})(console.log);

((c) => {
c('**********POO con Clousures**********');
    const Carrito = function (articulo) {
        let _articulo = articulo,
            _carrito ={};

        function agregar (articulo, cantidad) {
            _carrito[articulo] = cantidad;
        }

        function eliminar (articulo) {
                delete _carrito[articulo];
        }

        function _iterable() {
            let mensaje = 'Carrito: \n';
                for (let key in _carrito) {
                    mensaje += `\t${_carrito[key]} ${key}\n`;
                }
            return mensaje;
        }

        function ver(articulo = 'todos') {
            return ( articulo === 'todos' ) ?
             _iterable()
            : (_carrito.hasOwnProperty(articulo)) ?
            `${_carrito[articulo]} ${articulo}`
            :`El Articulo ${articulo} No Existe`;            
        }

        return {
            add: agregar,
            delete: eliminar,
            view: ver
        };
    };
    const comics = Carrito('Comics');
    c(comics);
    comics.add('Flash Paradox Point', 4);
    comics.add('Civil War', 3);
    comics.add('Spider Man', 1);
   // c(comics);
   c(comics.view());
   comics.delete('Spider Man');
   c(comics.view('Spider Man'));
   c(comics.view());
   comics.delete('Spider');
   c(comics.view());

})(console.log);

((c) => {
    c('**********POO con FUNCIONES CONSTRUCTORAS*****');
        function Carrito (articulo) {
            this._articulo = articulo;
            this._carrito = {};
    
            this.agregar = (articulo, cantidad) => this._carrito[articulo] = cantidad;
    
            this.eliminar = articulo => delete this._carrito[articulo];
    
            this._iterable = () => {
                 let mensaje = 'Carrito: \n';
                    for (let key in this._carrito) {
                        mensaje += `\t${this._carrito[key]} ${key}\n`;
                    }
                return mensaje;
            };
    
            this.ver = (articulo = 'todos') => {
                return ( articulo === 'todos' ) ?
                 this._iterable()
                : (this._carrito.hasOwnProperty(articulo)) ?
                `${this._carrito[articulo]} ${articulo}`
                :`El Articulo ${articulo} No Existe`;            
            };
    
           /*  return {
                add: agregar,
                delete: eliminar,
                view: ver
            }; */
        }
        const comics = new Carrito('Comics');
        c(comics);
        comics.agregar('Flash Paradox Point', 4);
        comics.agregar('Civil War', 3);
        comics.agregar('Spider Man', 1);
       // c(comics);
       c(comics.ver());
       comics.eliminar('Spider Man');
       c(comics.ver('Spider Man'));
       c('****Patrón de Diseño: Factoria o Fábricas****');
       const music = new Carrito('Music'),
       newspaper = new Carrito('NewsPaper'),
       movies = new Carrito('Movies');
       c(
        music, '\n',
        newspaper, '\n',
        movies  
       );
})(console.log);

((c) => {
    c('**********POO con PROTOTYPE*****');
        function Carrito (articulo) {
            this._articulo = articulo;
            this._carrito = {};
        }
        Carrito.prototype = {
            agregar: function(articulo, cantidad) {
                this._carrito[articulo] = cantidad;
            },    
            eliminar: function(articulo) { 
                delete this._carrito[articulo]
            },    
            _iterable: function () {
                 let mensaje = 'Carrito: \n';
                    for (let key in this._carrito) {
                        mensaje += `\t${this._carrito[key]} ${key}\n`;
                    }
                return mensaje;
            },    
            ver: function(articulo = 'todos') {
                return ( articulo === 'todos' ) ?
                 this._iterable()
                : (this._carrito.hasOwnProperty(articulo)) ?
                `${this._carrito[articulo]} ${articulo}`
                :`El Articulo ${articulo} No Existe`;            
            }
        };
    
           /*  return {
                add: agregar,
                delete: eliminar,
                view: ver
            }; */
        const comics = new Carrito('Comics');
        c(comics);
        comics.agregar('Flash Paradox Point', 4);
        comics.agregar('Civil War', 3);
        comics.agregar('Spider Man', 1);
       // c(comics);
       c(comics.ver());
       comics.eliminar('Spider Man');
       c(comics.ver('Spider Man'));

       const music = new Carrito('Music'),
       newspaper = new Carrito('NewsPaper'),
       movies = new Carrito('Movies');
       c(
        music, '\n',
        newspaper, '\n',
        movies  
       );
})(console.log);

((c)=>{
    function Telefono() {
        this.puedoLlamar = true;
    }

    Telefono.prototype = {
        llamar: function () {
            c('Rinnng Rinnnng');
        }
    };

    function Celular() {
        this.tengoCable = false;
    }

    Celular.prototype = new Telefono();
    Celular.prototype.vibrar = function (){
        c('Vbbbrrr Vbrrrrr');
    };

    function SmartPhone() {
        this.tengoInternet = true;
    }

    SmartPhone.prototype = new Celular();
    SmartPhone.prototype.conectar = function () {
        c('Conectado a Internet');
    };

    let G4 = new SmartPhone();
    c(G4);
    G4.vibrar();
    G4.llamar();
    c(G4.puedoLlamar);
})(console.log);