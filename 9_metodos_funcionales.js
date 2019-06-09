; //Reduce, Map, Filter
//Function Lambda => es la estructura de una arrow function
((c)=>{
    c('****METODOS FUNCIONALES****');
    c('Reduce');
    c([1, 2, 3, 4, 5].reduce( (acumulado, elemento) => acumulado+elemento));//acumulado valor previo, elemento valor actual 1
    c([1, 2, 3, 4, 5].reduce( (acumulado, elemento) => acumulado*elemento));//Factorial
    c('Map')
    c([1, 2, 3, 4, 5].map(elemento=> elemento*elemento)) //Cuadrado
    c([1, 2, 3, 4, 5].map(elemento=> -elemento)) //Negativos
    c('Filter')
    c([1, 2, 3, 4, 5].filter(elemento => elemento % 2 === 0)) //Par
    c([1, 2, 3, 4, 5].filter(elemento => elemento % 2 === 1)) //Impar
})(console.log);