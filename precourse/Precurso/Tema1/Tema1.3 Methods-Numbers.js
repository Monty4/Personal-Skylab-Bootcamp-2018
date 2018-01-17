// a) Que hora es? Declara la hora como número y devuelvela como String
var hora = 10.45;
var stringhora = hora.toString();
console.log("It's " + stringhora + " of morning");


// b) Nono, que hora exactamente? Dime la hora sin minutos
var coma = parseInt(stringhora.indexOf("."));
var round = stringhora.substr(0,coma);
console.log("It's around " + round + " of morning");


// c) Ahora, declara tu hora y muéstrala redondeada.
var hora = 10.34;
console.log(Math.round(hora)); // 10

var hora = 10.55;
console.log(Math.round(hora)); // 11


/*
d) Hagamos una calculadora. Primero, la suma.
We can do a calculator, so let's do it! first, do a sum with two numbers
*/
var a = 7;
var b = 3;
var sum = a+b;
console.log(sum);


// d1) Añade la resta...
var rest = a-b;
console.log (sum+rest);


// d2) Y la multiplicación
var mult = a*b;
console.log(sum+rest+mult);


// d3) Por ultimo, la división
var div = a/b;
console.log(sum+rest+mult+div);


// d4) Ahora, intenta multiplicar un número por una string, que devuelve?
console.log(10*"hour"); // NaN


//e) Podemos controlar este error con un condicional if?
if (isNaN(10*"hour")) {console.log("You can't do this operation!");}