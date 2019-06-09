const first = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'first');
});
const second = new Promise((resolve, reject) => {
    setTimeout(resolve, 600, 'second');
});
Promise.race([first, second]).then((result) => {
  console.log(result); // second
});


const doSomethingsAsync = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('I did Somethings'), 3000);
    });
};

const doSomethings = async () => {
    console.log(await doSomethingsAsync());
}

console.log('Before');
doSomethings();
console.log('After');

const aFunction = async () => {
    return Promise.resolve('Test');
}
//aFunction().then(alert);

const aFunctions = async () => {
    return 'hi'
}
//aFunctions().then(alert);


function scaryClown() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('🤡')
        }, 2000);
    })
}

async function msg() {
    const msg = await scaryClown();
    console.log('Message: ', msg);
}
msg();

function who() {
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve ('🤡 ')
        }, 200);
    })
}

function what() {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(' Lurks')
        }, 300);
    })
}

function where() {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve('Where ')
        }, 500);
    })
}

const msgs = async () => {
    const a = await who();
    const b = await what();
    const c = await where();

    console.log(`${a} ${b} ${c}`)
}

msgs();

async function msgr() {
    const [a, b, c] = await Promise.all([who(), what(), where()]);
  
    console.log(`Promise all: ${ a } ${ b } ${ c }`);
  }

msgr();


let done = false
const isItDoneYet = new Promise(
  (resolve, reject) => {
    if (done) {
      const workDone = 'Here is the thing I built'
      resolve(workDone)
    } else {
      const why = 'Still working on something else'
      reject(why)
    }
  }
)

const checkIfItsDone = () => {
    isItDoneYet
      .then((ok) => {
        console.log(ok)
      })
      .catch((err) => {
        console.error(err)
      })
  }

checkIfItsDone();

function yayOrNay() {
  return new Promise((resolve, reject) => {
    const val = Math.round(Math.random()*1);
    val ? resolve('Lucky') : reject ('Nope');
  })
}

async function msj() {
  try {
    const msg = await yayOrNay();
    console.log(msg);
  } catch (err) {
    console.log(err);
  }
}

msj();
msj();
msj();
msj();
console.log('ttt', Math.round(Math.random()*1));
console.log('ttt', Math.round(Math.random()*1));



const operations = []
for (var i = 0; i < 5; i++) {
  operations.push(() => {
    console.log(i)
  })
}
for (const operation of operations) {
  operation()
}

const operationsd = []
for (let i = 0; i < 5; i++) {
  operationsd.push(() => {
    console.log(i)
  })
}
for (const operation of operationsd) {
  operation()
}