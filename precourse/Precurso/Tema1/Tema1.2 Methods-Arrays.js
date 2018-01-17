// a) Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"
var Name = ["Tony Stark"]; myName = "";

for (var i=0; i<Name[0].length; i++){
    if (i<Name[0].length-1 && Name[0].substr(i,1)!=" ") {
    	myName = myName + Name[0].substr(i,1).toUpperCase() + "/";
    } else if (Name[0].substr(i,1)!=" "){
    	myName = myName + Name[0].substr(i,1).toUpperCase();
    }
}
console.log(myName); // T/O/N/Y/S/T/A/R/K


// b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|"
var Name = ["Tony Stark"]; myLastName = "";
var myLast = Name[0].substr(parseInt(Name[0].indexOf(" ")+1));
for (var i=0; i<myLast.length; i++){
    if (i<myLast.length-1 && myLast.substr(i,1)!=" ") {
    	myLastName = myLastName + myLast.substr(i,1).toUpperCase() + "|";
    } else if (myLast.substr(i,1)!=" "){
    	myLastName = myLastName + myLast.substr(i,1).toUpperCase();
    }
}
console.log(myLastName); // S|T|A|R|K

// c) Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for)
var Name = ["Tony Stark"]; myFirstName = "";
//var myFirst = Name[0].substr(0,parseInt(Name[0].indexOf(" ")));
var NameArray = Name[0].split(" ");
var myFirst = NameArray[0];

for (var i=0; i<myFirst.length; i++){
	if (i<myFirst.length-1){
		myFirstName = myFirstName + (i+1) + "º " + myFirst[i].toUpperCase() + ", ";
	}else {
		myFirstName = myFirstName + (i+1) + "º " + myFirst[i].toUpperCase();
	}
	
}
console.log(myFirstName); // 1º T, 2º O, 3º N, 4º Y


// d)Como en el ejercicio anterior, pero seleccionando tu apellido
var Name = ["Tony Stark"]; myLastName = "";
//var myLast = Name[0].substr(parseInt(Name[0].indexOf(" "))+1);
var NameArray = Name[0].split(" ");
var myLast = NameArray[1];
var dif = parseInt(Name[0].indexOf(" "))+1;

for (var i=0; i<myLast.length; i++){
	if (i<myLast.length-1){
		myLastName = myLastName + (i+dif) + "º " + myLast[i].toUpperCase() + ", ";
	}else {
		myLastName = myLastName + (i+dif) + "º " + myLast[i].toUpperCase();
	}
	
}
console.log(myLastName); // 5º S, 6º T, 7º A, 8º R, 9º K


// e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la sección de strings
var name = ["Tony Stark"];
var NameArray = Name[0].split(" ");
var myFirstnameLetter = NameArray[0].substr(0,1).toUpperCase();
var myLastnameLetter = NameArray[1].substr(0,1).toUpperCase();
var myFirstLastnameLetters = myFirstnameLetter + "." + myLastnameLetter;
console.log(myFirstLastnameLetters); // T.S


// f) Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, 
//y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.
var Name = ["Tony", "Stark", "40"];
var mySelector = "My name is " + Name[0].toUpperCase() + " and I'm " + Name[2] + " years old";
console.log(mySelector); // My name is Tony and I'm 40 years old


// g) Prepara una función para añadir tu City a la array, 
// muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.
var Name = ["Tony", "Stark", "40"]; var myCityAdd = "City added to array! => ";
var City = Name.push("New York");
for (i=0; i<Name.length; i++){
	if (i<Name.length-1) {
		myCityAdd = myCityAdd + Name[i] + ", ";
	}else {
		myCityAdd = myCityAdd + Name[i];
	}
}
console.log(myCityAdd); // City added to array! => Tony, Stark, 40, New Yorks


// h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.
var Name = ["Tony", "Stark", "40"];

function myCityAdd(City){
	var TextCityAdded = "City added to array! => ";
	Name.push(City);
	for (i=0; i<Name.length; i++){
		if (i<Name.length-1) {
			TextCityAdded = TextCityAdded + Name[i] + ", ";
		}else {
		var TextCityAdded = TextCityAdded + Name[i];
	}
}
	return TextCityAdded;
}

function myCityDel(){
	var TextCityDeleted = "City deleted! => ";
	Name.pop();
	for (i=0; i<Name.length; i++){
		if (i<Name.length-1) {
			TextCityDeleted = TextCityDeleted + Name[i] + ", ";
		}else {
		var TextCityDeleted = TextCityDeleted + Name[i];
	}
}
	return TextCityDeleted;
}

var NewArrayAddCity = myCityAdd("New York");
console.log(NewArrayAddCity); // City added to array! => Tony, Stark, 40, New York

var NewArrayDelCity = myCityDel();
console.log(NewArrayDelCity); // City deleted! => Tony, Stark, 40


// j) Ahora, elimina el nombre y asegura los cambios Resources: https://www.w3schools.com/jsref/jsref_shift.asp
function myNameDel(){
	var TextNameDeleted = "Name deleted! => ";
	Name.shift();
	for (i=0; i<Name.length; i++){
		if (i<Name.length-1) {
			TextNameDeleted = TextNameDeleted + Name[i] + ", ";
		}else {
		var TextNameDeleted = TextNameDeleted + Name[i];
	}
}
	return TextNameDeleted;
}
var NewArrayDelName = myNameDel();
console.log(NewArrayDelName); // Name deleted! => Stark, 40


/*
k) Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, 
como podria hacer para introducirlo en la primera posición? Resources: https://www.w3schools.com/jsref/jsref_splice.asp
*/
function myNameAddFirst(nombre){
	var TextNameAddFirst = "Name added at first position! => ";
	Name.splice(0,0,nombre);
	for (var i=0; i<Name.length; i++){
		if (i<Name.length-1){
			TextNameAddFirst = TextNameAddFirst + Name[i] + ", "
		}else{
			TextNameAddFirst = TextNameAddFirst + Name[i];
		}
	}
	return TextNameAddFirst;
}
var NewArrayAddName = myNameAddFirst("Tony");
console.log(NewArrayAddName); // Name added at first position! => Tony, Stark, 40


// l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multByNum(numero) {
    return numero * 2;
}
var multByTwo = numbers.map(multByNum);
console.log(multByTwo); // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]


// l1) Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var num = 3;

function multByNum(numero) {
    return numero * num;
}
var multByNumber = numbers.map(multByNum);
console.log(multByNumber); // [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30]


// m) Podrías mostrarlos en el orden inverso? Resources: https://www.w3schools.com/jsref/jsref_sort.asp
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.reverse()); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]


// n) Puedes indicarme que letras se repiten de tu nombre y cuantas veces?
var Name = ["Tony Stark"];
var nombre = Name[0].toUpperCase();
var array = new Array();
var spl = nombre.split("");
//console.log(spl); // ["T", "O", "N", "Y", " ", "S", "T", "A", "R", "K"]
var asc = spl.sort();
//console.log(asc); // [" ", "A", "K", "N", "O", "R", "S", "T", "T", "Y"]
for (var i=1; i<asc.length; i++){
	if(asc[i]==asc[i-1]){
		array.push(asc[i]);
	}
}
// console.log(spl);
//console.log(array); // ["T"]
var buscando = "";
var contando = 0;
var encontrado = "";
for (var i=0; i<array.length; i++){
	buscando = array[i];
	for (var j=0; j<array.length; j++){
		if (buscando == array[j]){
			contando++;
		}
	}
	var encontrado = "'" + buscando + "' => " + contando + " times";
	console.log(encontrado);
	contando = 0;
}


// n1) Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras
var Name = ["Tony Stark"];
var nombre = Name[0].toUpperCase();
var array = new Array();
var spl = nombre.split("");
//console.log(spl); // ["T", "O", "N", "Y", " ", "S", "T", "A", "R", "K"]
var asc = spl.sort();
//console.log(asc); // [" ", "A", "K", "N", "O", "R", "S", "T", "T", "Y"]
for (var i=1; i<asc.length; i++){
	if(asc[i]==asc[i-1]){
		array.push(asc[i]);
	}
}
// console.log(spl);
//console.log(array); // ["T"]
var spl = nombre.split("");
//console.log(spl);
var repeatLetters = Name[0] + ", the letters => ";
for (var k=0; k<spl.length; k++){
	for (var j=0; j<array.length; j++){
		if (spl[k]!=array[j]){
			repeatLetters = repeatLetters + spl[k] + ", ";
		}
	}
}


repeatLetters = repeatLetters + " are not repeated";
console.log(repeatLetters);