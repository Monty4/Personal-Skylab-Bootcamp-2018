var x = myFunction(4, 3);

function myFunction(a, b) {
    return a * b;
}

var y = function myFunction(a, b) {
    console.log(a * b)
}

// a) Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola.
function name(nombre){
	console.log('Hello ' + nombre);
}
var nombre = name('Mario');


// b) Intenta retornar los valores en lugar de usar console.log
function name(nombre){
	 return 'Hello ' + nombre;
}
console.log(name('Mario'));


// c) Ahora, añade tu edad y concaténala al return
function name(nombre,edad){
	 return "Hello " + nombre + ", You'are " + edad + " years old";
}
console.log(name('Mario',51));


// d) Iguala tu función a una variable y ejecútala ??????????????????????????????????????????????????????
function myFunction(nombre,edad) {
    return "Hello " + nombre + ", You'are " + edad + " years old";
}
var a = myFunction('Mario',51);
console.log(a);


/*
e) Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable,
 intenta imprimir sus dos resultados concatenados Now, try to declare other function and assign it result to other variable called myAge, 
 and try to print the result of both functions in one line.
*/
function myName(){
	return "Mario ";
}

function myAge(){
	return 51;
}
myName() + myAge();


// e1) Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y conviertelo todo a un solo string.
function myName(){
	return "Mario ";
}

function myAge(){
	return 51;
}
(myName() + (myAge() + (Math.floor(Math.random() * (11 - 0)) + 0))).toString();


// f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.
function myName(name){
	return name + " ";
}

function myAge(age){
	return age;
}
var param1 = 'Mario';
var param2 = 51;
myName(param1) + myAge(param2);


// g) Intenta englobar todas las funciones en una sola funcion padre, el return de dicha función padre deberá ser la llamada a las funciones hijas
function father(param1,param2){
	
	function myName(name){
		return name + " ";
	}

	function myAge(age){
		return age;
	}

	myName(param1) + myAge(param2);

	var x = myName(param1);
	var y = myAge(param2);
	return x + y;
}
father('Mario',51);


// h) Haz otra función hija que solo devuelva un número random, ese número random será el argumento que se pasará como parámetro a la función age()
function father(param1,param2){
	function randomAge(){
		var randNum = Math.random();
		return randNum;
	}
	var rand = randomAge();
	var y = myAge(rand);
	return y;
}
father('Mario',51);


// i) Ahora, limita el random de 0 a 50, Muestra un mensaje si el output age es < 20 y otro si es de 21 - 50
function root(param1,param2){
	function randomAge(){
		var randNum = Math.floor(Math.random() * (51 - 0)) + 0;
		return randNum;
	}
	var rand = randomAge();
	var x = myName(param1);
	var y = myAge(rand);
	if (rand < 21) {
		return 'El resultado es menor o igual a 20';
	}else return 'El resultado está entre 21 y 50';
}
root('Mario',51);


// j) Al return de la función name(), concaténale otro mensaje
function root(param1,param2){
	var x = myName(param1);
	return x;
}
root('Mario',51) + " It's me";


// k) Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable
function root(param1,param2){
	function randomAge(){
		var randNum = Math.floor(Math.random() * (51 - 0)) + 0;
		return randNum;
	}
	var rand = randomAge();
	var x = "The first function returns: '" + myName(param1);
	var y = "', The second function returns: '" + myAge(rand) + " ... Sure you're " + myName(param1) + "?'";
	return x + y;
}
root('Mario',51);


// l) Modifica la primera función y la función padre para, si el parámetro introducido no es tu nombre, no siga con la segunda llamada
// return x + y // output: "The first function returns: Hulk... You're not IRONMAN!"
function root(param1,param2){ // param1 LONGITUD 6 ??????????????????????
	var x = "The first function returns: " + myName(param1) + "...";
	
	if (myName(param1) != "Mario "){ // ????????????????????????????????
		var y = "You're not IRONMAN!";
	}else if (myName(param1) == "Mario "){ // ??????????????????????????????????????
		//var y = myAge(param2);
		var y = "', The second function returns: '" + myAge(param2) + " ... Sure you're " + myName(param1) + "?'";
	}
	return x + y;
}
root("Mario",51);


/*
m) Vamos a complicarlo un poco... El número random debería generarse en otra función separada del padre. 
Retorna a la funcion padre y concaténalo en el return padre.
*/
function GenerateRandom(){
    var randomNumber = Math.floor(Math.random() * (51 - 0)) + 0;
    return randomNumber;
}

function father(param1){
    var numR = GenerateRandom();
    return "The first function returns: '" + myName(param1) + "', The second function returns: '" + numR + " ... Sure you're " + myName(param1) + "?'";
}
father("Mario");


/*
n) Refactorizemos nuestro código dejando todas las funciones separadas del padre, 
éste último se encargará de llamarlas todas y mostrar sus resultados.
*/
function father(param1){
    var a = myFunction(param1);
    var b = myOtherFunction();
    var c = myOtherVarFunction(param1);
    return a+b+c;
}

function myFunction(param1){
	return "The first function returns: '" + param1;
}

function myOtherFunction(param2){
	return "', The second function returns: '" + (Math.floor(Math.random() * (51 - 0)) + 0);
}

function myOtherVarFunction(param3){
	return " ... Sure you're " + param1 + "?'";
}
father("Mario");


/*
ñ) Intenta hacer push de todos los resultados de las funciones a una array declarada en el padre, 
muestra los resultados de esta array como siempre.
*/
function father(param1){
	var chain = new Array();
    var a = myFunction(param1);
    var b = myOtherFunction();
    var c = myOtherVarFunction(param1);
    chain.push(a,b,c);
    return chain[0] + chain[1] + chain[2];
}

function myFunction(param1){
	return "The first function returns: '" + param1;
}

function myOtherFunction(param2){
	return "', The second function returns: '" + (Math.floor(Math.random() * (51 - 0)) + 0);
}

function myOtherVarFunction(param3){
	return " ... Sure you're " + param1 + "?'";
}
father("Mario");


/*o) Crea una funcion que llame a nuestra funcion father(), ésta, a parte de llamarla, 
deberá hacer otro push "hello from the dark side..." a la array que crea father(). Muestra toda la array completa.
*/
function father(param1){
	var chain = new Array();
    var a = myFunction(param1);
    var b = myOtherFunction();
    var c = myOtherVarFunction(param1);
    chain.push(a,b,c);
    return chain;
}

function myFunction(param1){
	return "The first function returns: '" + param1;
}

function myOtherFunction(param2){
	return "', The second function returns: '" + (Math.floor(Math.random() * (51 - 0)) + 0);
}

function myOtherVarFunction(param3){
	return " ... Sure you're " + param1 + "?'";
}

function constructor(param1,param2){
	var data1 = father(param1);
	var data2 = data1;
	data2.push(param2);
	return data2;
}
constructor("Mario","hello from the dark side");


/*
p1) En lugar de retornar los valores como una array, prepara tus funciones para que devuelvan los resultados como OBJECTS. 
Muestra por pantalla los objetos sin estilizar el output.
*/
function father(param1){
	var chain = new Object();

    //var a = myFunction(param1);
    chain.val1 = myFunction(param1);
    
    //var b = myOtherFunction();
    chain.val2 = myOtherFunction();

    //var c = myOtherVarFunction(param1);
    chain.val3 = myOtherVarFunction(param1);
    return chain;
}

function myFunction(param1){
	return "The first function returns: '" + param1;
}

function myOtherFunction(param2){
	return "', The second function returns: '" + (Math.floor(Math.random() * (51 - 0)) + 0);
}

function myOtherVarFunction(param1){
	return " ... Sure you're " + param1 + "?'";
}

function constructor(param1,param2){
	var data1 = father(param1);
	
	data1.val4 = param2;
	return data1;
}
console.log(constructor("Mario","hello from the dark side"));



// p2) Muestra los resultados de los OBJECTS recorriendolos y mostrando los valores de una forma amigable.
function father(param1){
	var chain = new Object();

    //var a = myFunction(param1);
    chain.val1 = myFunction(param1);
    
    //var b = myOtherFunction();
    chain.val2 = myOtherFunction();

    //var c = myOtherVarFunction(param1);
    chain.val3 = myOtherVarFunction(param1);
    return chain;
}

function myFunction(param1){
	return "The first function returns: '" + param1;
}

function myOtherFunction(param2){
	return "', The second function returns: '" + (Math.floor(Math.random() * (51 - 0)) + 0);
}

function myOtherVarFunction(param1){
	return " ... Sure you're " + param1 + "?'";
}

function constructor(param1,param2){
	var data1 = father(param1);
	
	data1.val4 = param2;
	return data1;
}
var data2 = constructor("Mario","hello from the dark side");
console.log("val1: " + data2.val1);
console.log("val2: " + data2.val2);
console.log("val3: " + data2.val3);
console.log("val4: " + data2.val4);