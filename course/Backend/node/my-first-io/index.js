let fs = require('fs')

let cont = 0

file = fs.readFileSync('text.txt')

fileToString = file.toString()

fileToArray = fileToString.split('')

lineJump = fileToArray.indexOf('\n')

if ( lineJump > -1 ) cont++

console.log(cont)
// console.log(file.toString())