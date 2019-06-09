;
((c)=>{
    //Function Recursiva para obtner el factorial de un número
    //(n! = Producto de todos los números naturales desde 1 hasta n)
    const factorialImperativa = n => {
        let f = 1
        for (let i = 1; i <= n; i++) {
            f = f * i;        
        }
        return f
    }

    const factorialDeclarativa = n => {
        return n === 0 
        ? 1
        : n * factorialDeclarativa(n-1)
    }
    c('Factorial Imperativa: ', factorialImperativa(5))
    c('Factorial Declarativa: ', factorialDeclarativa(5))

    //Function Recursiva para obtner la suma factorial de un número
    //(n+! = Sumatoria de todos los números naturales desde 1 hasta n)
    const sumatoria = n => {
        return n === 1
        ? 1
        : n + sumatoria (n - 1)
    }
    c('Sumatoria Factorial: ', sumatoria(5))
    //Function Recursiva para calcular la potencia de un número b elevado al exponente e
    //(b elevado a e = se obtiene como el producto de b con sigo mismo e veces)
    const potencia = (b, e) => {
        return e < 2 
        ? b
        : b * potencia(b, e-1)
    }
    c('Potencia: ', potencia(3, 4))
    //Function para determinar si un número es par o impar sin el uso del operador modulo
    const even = n => {
        return n === 0
          ? true
          : n === 1
            ? false
            : odd( n - 1 )
      }
    
      const odd = n => {
        return n === 0
          ? false
          : n === 1
            ? true
            : even( n - 1 )
      }
    
      c(
        'Pares e Impares',
        5, even(5), odd(5),
        6, even(6), odd(6)
      )
    //Function recursiva que sume los digitos de un número
    //pe 125 = 1+2+5=8

    const sumaDigitos = n => {
        return n < 10 
        ? n
        :n % 10 + sumaDigitos(Math.floor(n/10))
    }
    
    c(sumaDigitos(125))
    //Function recursiva para determinar si un elemento está contenido dentro de un vector
    const contentVectorAux = (vector, elemento, position) => {
        return position > vector.length -1        
        ? false
        /* : vector[position] === elemento
        ? true
        :contentVectorAux (vector, elemento, position + 1) */
        //Operadores de corto circuito mediante el and y or, simplificar un operador ternario
         /*
        Cortocircuito OR - cuando el valor de la izquierda en la expresión siempre pueda validar a true, es el valor que se cargará por defecto
  
        Cortocircuito AND - cuando el valor de la izquierda en la expresión siempre pueda validar a false, es el valor que se cargará por defecto
        */
        : vector[position] === elemento || contentVectorAux (vector, elemento, position + 1)
    }
    const contentVector = (vector, elemento) => {
        return contentVectorAux(vector, elemento, 0)
    }
    c('Aplicando recursividad en un vector',
        contentVector([1, 2, 3, 4, 5], 5),
        contentVector([1, 2, 3, 4, 5], 9)
    )
    //Function recursiva para determinar si un elemento está repetido dentro de un vector
    const repeatVectorAux = (vector, position) => {
        return position > vector.length -1  
            ? false
            :contentVectorAux (vector, vector[position], position + 1) || repeatVectorAux(vector, position + 1)
    }

   const repeatVector = vector => {
        return repeatVectorAux(vector, 0)
    }

    c('Aplicando recursividad en un vector',
        repeatVector([1, 2, 3, 3, 5]),
        repeatVector([1, 2, 3, 4, 5])
    ) 
    c(Math.floor(12/10))

    const btn = document.querySelector('#btn')
    let sClicks = document.querySelector('#clicks')
    let nClicks = 0
    btn.addEventListener('click', () => {            
            sClicks.innerHTML = ++nClicks
    })

    let string = " I will be a url slug   ";

    const slugify = string => {
        return string.toUpperCase()
            .trim()
            .split(" ")
            .join("-")
    }

    c(slugify(string))
    sClicks.innerHTML = slugify(string)

})(console.log)