const numeros = [1, 2, 3, 4];

console.time('Imperativo');
function cuadrado(numeros) {
    let arr = [];
    for (let i = 0; i < numeros.length; i++){
        arr.push(numeros[i] * numeros[i]);
    }

    return console.log(arr);
}
cuadrado(numeros);
console.timeEnd('Imperativo');

console.time('Declarativo');
console.log(numeros.map(num => num*num));
console.timeEnd('Declarativo');

const foo = [1, 2];
const bar = foo;

bar[0] = 9;

console.log(foo[0], bar[0]); // => 9, 9

const arr = [[[0,10], 1, 6], [2, 3], [4, 5]];
console.log(arr[0][0][1]);

const numberInArray = [
    1,
    'Albeiro',
  ];

  console.log(numberInArray[1]);

  const objectInArray = [
    {
      id: 13013525146,
      name: 'Albeiro'
    },
    {
      id: 2,
    },
  ];

  console.log(objectInArray[0].name);

  //const nodes = Array.from(objectInArray);
  //console.log(nodes);

 // console.log(Array.from([1, 2, 3], x => x + x));

  const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };
  const arrs = Array.from(arrLike);
  console.log(arrs);

  //const name = 'AlbeiRo';
  //console.log(Array.from(name));
  const num = 6;
 const t = Array.from({length: num}, (v, i) => i*i);
console.log(t[2]);

(function HI () {
    console.log('Welcome to the Internet.');
  })();
  (function HI () {
    console.log('Welcome to the Internet. Please follow me.');
  }());

  let f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c; 
  console.log(f());

  let test;
  let currentUser = 'ACG';
    if (currentUser === 'ACG') {
    test = currentUse => {
        currentUse=currentUser;
        console.log('Yup. ', currentUse);
    };
    }

    test();
const ui =  new Date();
console.log(ui);


let max = (a, b) => (a > b) ? a : b;

console.log( max(3,2));

let x = (function () { return console.log({ y: 1 });}()); 

 [1, 2, 3].map(number => `A string containing the ${number + 1}.`);
  [1, 2, 3].map((number, index) => ({
    [index]: number,
  }));
  const O = [1, 2, 3].map((number) => {
    const nextNumber = number + 1;
    return `A string containing the ${nextNumber}.`;
  });
console.log(O);

const increasedByOne = [];
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
  increasedByOne.push(num + 1);
});

console.log(increasedByOne);

const square = (x) => {
    return x * x;
  };
  
  console.log(square(12));

  const hummus = factor => {
    const ingredient = (amount, unit, name) => {
      let ingredientAmount = amount * factor;
      if (ingredientAmount > 1) {
        unit += "s";
      }
      console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
  };

  console.log(hummus(2));