let fs = require('fs') // Cargamos el módulo fs
// import fs from 'fs'

// fs.readFileSync('/path/to/file') // Leemos un archivo y nos devuelve un objeto Buffer con los contenidos del archivo

// fs.readFileSync(process.argv[2])


const path = process.argv[2]
// Forma 1
// const text = fs.readFileSync(path) // Text es un buffer
// console.log(text.toString()) // convertimos el buffer a string

// Forma 2

const text = fs.readFileSync(path, 'utf-8')
console.log(text)