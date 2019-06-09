const fs = require('fs'),
file ='./assets/Archivo.txt'

/** Código Sincrono */
console.time('Sincrono')

console.log('\nAbriendo Archivo...')

let content
try {
    content = fs.readFileSync(file, 'utf8')
    console.log(content)
} catch (err) {
    console.log(err.message)
}

console.log('\nHaciendo otra cosa\n')
console.log('\nHaciendo otra cosa más\n')

console.timeEnd('Sincrono')

/**Código Asincrono */
console.time('Asincrono')

console.log('\nAbirendo Archivo...\n')

content = fs.readFile(file, 'utf8', (err,content)=>(err)?console.log(err.message):console.log(content))
console.timeEnd('Asincrono')