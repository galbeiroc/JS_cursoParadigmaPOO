;
/* ((c)=>{
c('*****CALLBACKS*****');
const cuadrado = (value, callback ) => {
    setTimeout(() => {
        callback(value, value*value);
    }, 0 | Math.random()*100);
};
cuadrado(0, (value, result) => { 
    c('CALLBACK INICIO');
    c(`Callback: ${value} ${result}`);
    cuadrado(1, (value, result) => { 
        c(`Callback: ${value} ${result}`);
        cuadrado(2, (value, result) => { 
            c(`Callback: ${value} ${result}`);
            cuadrado(3, (value, result) => { 
                c(`Callback: ${value} ${result}`);
                cuadrado(4, (value, result) => { 
                    c(`Callback: ${value} ${result}`);
                    cuadrado(5, (value, result) => { 
                        c(`Callback: ${value} ${result}`);
                    });
                });
            });
        });
    });
});
c('***CALLBACKS HELL***');
})(console.log);

((c)=> {
    c('***PROMISE***');
    let fifteen = Promise.resolve(20);
    fifteen.then(value => console.log(`Got ${value}`));

    const cuadrado = value => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({value: value, result: value * value});
            }, 0 | Math.random()*100);
        });
    };
    cuadrado(0)
        .then(obj => {
            c('Incio Promise');
            c(`${obj.value} ${obj.result}`);
            return cuadrado(1);
        })
        .then( obj => {
            c(`${obj.value} ${obj.result}`);
            return cuadrado(2)
        })
        .then(obj => {
            c(`${obj.value} ${obj.result}`);
            c('Fin Promise');
        })
        .catch(err => c(err));

        new Promise((_, reject) => reject(new Error("Fail")))
        .then(value => console.log("Handler 1"))
        .catch(reason => {
            console.log("Caught failure " + reason);
            return "nothing";
        })
        .then(value => console.log("Handler 2", value));
})(console.log);
 
((c)=> {
    c('****GENERATORS****');
    const Cuadrado = value => {
        setTimeout(() => {
            c({value: values, result: value*value});
        }, 0 | value * 100);
        return {
            value: value,
            result: value * value
        };
    };
    function* genenator() {
        c('Inicio Generador');
        yield Cuadrado(0);
        yield Cuadrado(1);
        yield Cuadrado(2);
        yield Cuadrado(3);
        c('Fin Generator');
    }

    let gen = genenator();
    c(gen.next());
    c(gen.next());
    c(gen.next());
    c(gen.next());
    c(gen.next());
})(console.log);
*/
((c)=>{
    const cuadrado = value => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({value: value, result: value*value});
            },10 | Math.random()*100);
        });
    };

    async function asyncAwait(){
        let obj = await cuadrado(0);
        c(`${obj.value} ${obj.result}`);
        obj = await cuadrado(1);
        c(`${obj.value} ${obj.result}`);
        obj = await cuadrado(2);
        c(`${obj.value} ${obj.result}`);
        obj = await cuadrado(3);
        c(`${obj.value} ${obj.result}`);
    }

    asyncAwait();

})(console.log);
/*function* generador(nombre) {
    yield `Hola ${nombre}`;
    yield 'Esta línea saldrá en la segunda ejecución';
    yield 'Esta otra, en la tercera';
    if ( nombre === 'Jonathan' ) {
    	yield 'Esta otra, saldrá en la cuarta solo si te llamas Jonathan';
    }
}

let gen = generador('Jonathan');
console.log( gen.next() ); //Imprime Object {value: "Hola Jonathan", done: false}
console.log( gen.next().value ); //Imprime Esta línea saldrá la segunda ejecución
console.log( gen.next().value ); //Imprime Esta otra, en la tercera
console.log( gen.next().value ); //Imprime Esta otra, saldrá en la cuarta solo si te llamas Jonathan
console.log( gen.next() ); //Imprime Object {value: undefined, done: true}


 class LoremIpsum {
	constructor( text ) {
		this._text = text;
	}

	*words() {
		const re = /\S+/g;
		let match;

		while( match = re.exec( this._text ) ){
			yield match[0];
		}
	}
}

const lorem = new LoremIpsum('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptatem eveniet ipsum in similique maxime sunt eaque veritatis sapiente. Fuga minus, non cumque deleniti consequatur. Odit reprehenderit non fugit cum!');

for ( let word of lorem.words() ) {
  console.log( word );
} */