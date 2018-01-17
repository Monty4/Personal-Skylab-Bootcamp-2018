// Creamos el objeto _______________________________________________
var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};


// a) Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)
function propertyNames(){
	var array = Object.getOwnPropertyNames(avenger); // Obtenemos la matriz con los nombres de las propiedades
	//var array = Object.getOwnPropertyNames(avenger).sort(); // Obtenemos los nombres de las propiedades ordenadas en orden ascendente
	var names = array[0] + ', ' + array[1] + ', ' + array[2];
	return names;	
}
console.log(propertyNames()); // name, class, id


// b) Ahora, crea una función que liste solo los valores de las propiedades.
function propertyValues(obj,objName){
	var result = new Array();
	for (var i in obj){
		if (obj.hasOwnProperty(i)){
			result.push(obj[i]);
		}
	}
	var values = result[0] + ', ' + result[1] + ', ' + result[2];
	return values;
}
console.log(propertyValues(avenger, "avenger")); // Tony, VII, 1


// c) Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios se han efectuado.
avenger.class = 'XI';
console.log('new class = ' + avenger.class);


// d) Ahora, elimina la propiedad ID y asegura los cambios.
delete avenger.id;
if (avenger.id==null)console.log('Not exist :(');


// e) Añade una nueva propiedad, por ejemplo city y dale un valor.
avenger.city = "New York City";
console.log(avenger); // {name: "Tony", class: "XI", city: "New York City"}


// e1) Asegura los cambios solo imprimiendo esa nueva propiedad.
var city = 'City => ' + avenger.city;
console.log(city); // City => New York City


// f) Lista el numero de propiedades que contiene el objeto.
function propertyNumber(){
	var array = Object.getOwnPropertyNames(avenger); // Obtenemos la mattiz con los nombres de las propiedades
	//var names = array[0] + ', ' + array[1] + ', ' + array[2];
	var num = array.length;
	return num;	
}
console.log('There are ' + propertyNumber() + ' info fields'); // There are 3 info fields


// g) Cambia la propiedad name por fullName.
var avenger = { 
    fullName : "Tony Stark", 
    class : "VII", 
    id : 1 
};

// g1) Asegura los cambios.
var fullName = avenger.fullName;
console.log(fullName);


// h) Lista todas las propiedades del objeto a través de un console.log()
console.log("Hi there, I'm " + avenger.fullName + ", Class " + avenger.class + " and Id " + avenger.id);


// h1) Añade más propiedades al objeto, como... markAverage, country, job, studies...
avenger.markAverage = "7.5";
avenger.country = "NYC";
avenger.job = "Developer";
avenger.studies = "Skylab";


// h2) Asegura los cambios volviendo a listar los valores del objeto
var result = "";
	for (var i in avenger){ // Recorremos el Objeto
		if (avenger.hasOwnProperty(i)){ // Si existe la propiedad
			result += avenger[i] + "\n"; // Construimos la cadena
		}
	}
console.log(result);


/*
i) Crea un constructor de objetos llamado "Avenger", al cual le pasarás ciertos parametros, 
creando una instancia del objeto con las propiedades de nuestro objeto creado. (Échale un ojo a la referencia de abajo.)
http://www.w3schools.com/js/js_object_definition.asp
*/
function avenger(fullName, classRoom, city, job, studies,markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
}
var tonyStark = new avenger ("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10);
console.log(tonyStark);


// j) Crea otro objeto y imprime sus propiedades por pantalla.
var marioMontalban = new avenger("Mario Montalban", "VIII", "BCN", "Student", "Developer", 10);
console.log(marioMontalban);


// k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia. . Example of property:
function avenger(fullName, classRoom, city, job, studies,markAv){
	this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
    this.description = function(){
    	console.log(this.fullName+", "+this.classRoom+", "+this.city+", "+this.job+", "+this.studies+", "+this.markAv)
    }
}
var tonyStark = new avenger("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10);
console.log(tonyStark.description()); // Tony Stark, XI, NYC, Ingeneer, MIT, 10


// l) Ahora, crea una función que solo liste los nombres de los objetos instanciados
function instanced(objeto){
	console.log(objeto.fullName);
}
var instanciados = instanced(tonyStark); // Tony Stark


/* m) Crea varios objetos con las mismas propiedades, como por ejemplo la ciudad, 
crea una función para que solo liste los nombres de los Avengers que sean de la misma ciudad y cuantos hay.
*/
var marioMontalban = new avenger("Mario Montalban", "VIII", "BCN", "Student", "Developer", 8); // Creamos objeto
var elisaMartinez = new avenger("Elisa Martinez", "VI", "BCN", "Economist", "Economist", 10); // Creamos objeto
var avengers = [tonyStark,marioMontalban,elisaMartinez]; // Introducimos los 3 objetos en la array 'avengers'

var counter = 0;
function sameCity(element,index,array){
	
	if (avengers[index].city == 'BCN'){
		console.log(avengers[index].fullName);
		counter++;
	}
}
avengers.forEach(sameCity);
console.log('Coincidencias: ' + counter);


// n) Para acabar, créate a ti mismo y crea una función que recoja todas las markAv y muestre la media.
var markAv = 0;
var counter =0;
function markavAverage(element,index,array){
	markAv += avengers[index].markAv;
	counter++;
}
avengers.forEach(markavAverage);
var average = (markAv / counter).toFixed(3);
console.log(average);

/*
ñ) Ahora, crea una funcion que recoja los avengers en parejas (será necesario que tengan un id, 
por comodidad al aparejarlos), es decir, de dos en dos, compare sus markAv y que muestre el mayor de ambos.
*/
function avenger(id,fullName, classRoom, city, job, studies,markAv){
	this.id = id;
	this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
}
var tonyStark = new avenger(0,"Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 8);
var marioMontalban = new avenger(1,"Mario Montalban", "VIII", "BCN", "Student", "Developer", 8); // Creamos objeto
var elisaMartinez = new avenger(2,"Elisa Martinez", "VI", "BCN", "Economist", "Economist", 10); // Creamos objeto
var nombreApellido = new avenger(3,"Nombre Apellido", "I", "MDR", "Prova", "Prova", 6); // Creamos objeto
var avengers = [tonyStark,marioMontalban,elisaMartinez,nombreApellido]; // Introducimos los 4 objetos en la array 'avengers'
function averageByTwo(i){
	var item1 = avengers[i].markAv;
	var item2 = avengers[i+1].markAv;
	//console.log(item1 + ' / ' + item2);
	if (item1 > item2) {
		var message = 'El mayor de ' + item1 + ' y ' + item2 + ' es: ' + item1 + '\n';
		message += avengers[i].fullName + ' VS ' + avengers[i+1].fullName + ' =>' + avengers[i].fullName + ' Es mejor';
	}else if (item1 < item2){
		var message = 'El mayor de ' + item1 + ' y ' + item2 + ' es: ' + item2 + '\n';
		message += avengers[i].fullName + ' VS ' + avengers[i+1].fullName + ' =>' + avengers[i+1].fullName + ' Es mejor';
	}else{
		var message = item1 + ' y ' + item2 + ' son iguales\n';
		message += avengers[i].fullName + ' VS ' + avengers[i+1].fullName + ' => Nadie es mejor';
	}
	return message;
}
for (var i=0; i<avengers.length; i=i+2){
	console.log(averageByTwo(i));
}


// ñ1) Intenta crear las parejas de forma aleatoria.
//console.log(parseInt(random*10)); // parseInt() devuelve el valor entero redoneado más alto de la variable x:


//console.log(Math.floor(Math.random() * (10 - 0)) + 0); // Math.random devuelve un número aleatorio entre 0 (mínimo incluido) y 10 (máximo excluido)

function avenger(id,fullName, classRoom, city, job, studies,markAv){
	this.id = id;
	this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
}
var tonyStark = new avenger(0,"Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 8);
var marioMontalban = new avenger(1,"Mario Montalban", "VIII", "BCN", "Student", "Developer", 8); // Creamos objeto
var elisaMartinez = new avenger(2,"Elisa Martinez", "VI", "BCN", "Economist", "Economist", 10); // Creamos objeto
var nombreApellido = new avenger(3,"Nombre Apellido", "I", "MDR", "Prova", "Prova", 6); // Creamos objeto
var avengers = [tonyStark,marioMontalban,elisaMartinez,nombreApellido]; // Introducimos los 4 objetos en la array 'avengers'

function averageByTwoRandom(uno,dos){
	var item1 = avengers[uno].markAv;
	var item2 = avengers[dos].markAv;

	if (item1 > item2) {
		var message = 'El mayor de ' + item1 + ' y ' + item2 + ' es: ' + item1 + '\n';
		message += avengers[uno].fullName + ' VS ' + avengers[dos].fullName + ' =>' + avengers[uno].fullName + ' Es mejor';
	}else if (item1 < item2){
		var message = 'El mayor de ' + item1 + ' y ' + item2 + ' es: ' + item2 + '\n';
		message += avengers[uno].fullName + ' VS ' + avengers[dos].fullName + ' =>' + avengers[dos].fullName + ' Es mejor';
	}else{
		var message = item1 + ' y ' + item2 + ' son iguales\n';
		message += avengers[uno].fullName + ' VS ' + avengers[dos].fullName + ' => Nadie es mejor';
	}
	return message;
}

var uno = Math.floor(Math.random() * (avengers.length - 0)) + 0;
var dos = Math.floor(Math.random() * (avengers.length - 0)) + 0;

do{var dos = Math.floor(Math.random() * (avengers.length - 0)) + 0;}
while(dos == uno);
console.log(averageByTwoRandom(uno,dos));