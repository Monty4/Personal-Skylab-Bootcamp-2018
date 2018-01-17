// Simple JS Methods for example.
var today; someday; text;
today = new Date();
someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
	text = "Today is before January 14, 2100.";
} else {
	text = "Today is after January 14, 2100.";
}
console.log(text)


// a) Puedes contar cuantas letras tiene tu nombre? _________________________________________________________
var name = "Tony";
var myName = "My Name has " + name.length + " letters";
console.log(myName); // My Name has 5 letters


// b) Añade tu apellido e indica en que posición se encuentra ________________________________________________
var name = "Tony Stark";
var myName = "My first last name starts on position " + parseInt(name.indexOf(" ")+1);
console.log(myName); // My first last name starts on position 6


// b) Añade tu apellido e indica en que posición se encuentra _________________________________________________
var myString = name.substr(0,parseInt(name.indexOf(" ")));
console.log("My name is " + myString); // My name is Tony


// d) Ahora, solo tu apellido. _________________________________________________________________________________
var myString = name.substr(parseInt(name.indexOf(" ")+1));
console.log("My lastname is " + myString); // My lastname is Stark


// d1) Iguala el resultado a una variable nueva e imprímela por pantalla. ______________________________________
var myFirstString = name;
var myNewString = name.substr(parseInt(name.indexOf(" ")+1));
console.log(myFirstString +", " + myNewString); // Tony Stark, Stark


// e) Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios. _____________________
var myNewString = "Hello, Mr. " + myNewString;
console.log(myNewString); // Hello, Mr. Stark


// f) Selecciona tu apellido y transfórmalo a MAYÚSCULAS. __________________________________________________________
var mySelection = "My lastname is " + myNewString.substr(parseInt(myNewString.lastIndexOf(" ")+1)).toUpperCase();
console.log(mySelection); // My lastname is STARK


// g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje. ________________
var something = myFirstString.substr(0,parseInt(myFirstString.indexOf(" "))) + " is awesome";
console.log(something); // Tony es increíble


// h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?
var myFirstnameLetter = myFirstString.substr(0,1).toUpperCase(); // toUpperCase() no sería necesario porque la primera letra ya es mayúscula
var myLastnameLetter = myFirstString.substr(parseInt(name.indexOf(" ")+1),1).toUpperCase();
var myFirstLastnameLetters = myFirstnameLetter + "." + myLastnameLetter;
console.log(myFirstLastnameLetters); // T.S