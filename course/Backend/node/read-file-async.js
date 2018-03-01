import { throws } from 'assert';
import { resolve } from 'path';

let fs = require('fs') // Cargamos el módulo fs


const path = process.argv[2]

// fs.readFile(path, 'utf-8', (err, data) => {
//  if (err) throw err
//  console.log(data)
// })
// console.log('hello world')

//Forma 1

// function readFile(path, encoding, callback) {
//     fs.readFile(path, 'utf-8', (err, data) => {
//         if (err) throw new Error('ERR-IO-ASYNC')
//         callback(data)
//        })
// }

// try {
//     fs.readFile(path, 'utf-8', data => console.log(data))
// }catch(err) {
//     console.error(err.message) // Unknown message
// }

// console.log('hello world')

// Forma 2 con Promises

function readFile(path, encoding) {
    return new Promisse((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            err ? reject(err) : resolve(data)
        })
    })
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) throw new Error('ERR-IO-ASYNC')
        callback(data)
       })
}

try {
    fs.readFile(path, 'utf-8', data => console.log(data))
}catch(err) {
    console.error(err.message) // Unknown message
}

console.log('hello world')


