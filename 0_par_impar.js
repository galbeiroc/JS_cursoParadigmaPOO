function parImparFrontend() {
    let numero = prompt('Ingrese Numero'),
    modulo = numero % 2;
    par = `El número ${numero} es par`;
    impar = `El número ${numero} es impar`;

    //Operador ternario
    console.log((modulo===0)? par: impar);
}

parImparFrontend();