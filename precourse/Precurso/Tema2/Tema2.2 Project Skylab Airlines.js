// _________________ CREAMOS EL ARRAY DE OBJETOS CON LOS VUELOS _________________________

var flights = [
{id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
{id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
{id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
{id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
{id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
{id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
{id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
{id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
{id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
{id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
];

// ____________________________ DECLARACIÓN DE LA FUNCIÓN _________________________________

function avalaibleFlights(){
	var array = new Array();
	var message = '';
	var cost = 0;
	var items = 0;
	var countScale = 0;
	var lastDest = '\nLos últimos 5 destinos para el día de hoy son: \n';
	for (i=0; i<flights.length; i++){
		cost += flights[i].cost;
		items ++;
		if (flights[i].scale){
			escala = ' y tiene escala';
			countScale++;
		}else{
			escala = ' y no tiene escalas';
		}
		message += '· El vuelo con origen: ' + flights[i].from + ' y destino: ' + flights[i].to + ' tiene un coste de ' + flights[i].cost + escala + '\n';
		if (flights[i].id > flights.length-6){
			lastDest += '·' + flights[i].to + '\n';
		}
	}
	var average = '\nEl coste medio de los vuelos es de: ' + (cost / items) + ' euros.'//  Coste de todos los vuelos dividido por el número de vuelos
	var scaleNumber = '\nEl número de vuelos con escala es de: ' + countScale;
	array = [message,average,scaleNumber,lastDest]; // Array con información de vuelos, coste medio, nº vuelos con escala y 5 últimos destinos
	return array;
}


var fullName = prompt('Por favor, Introduce tu nombre completo'); // PEDIMOS EL NOMBRE COMPLETO DE LA PERSONA Y MOSTRAMOS LA BIENVENIDA
console.log('Bienvenido/a, Sr./Sra. ' + fullName);

var datos = avalaibleFlights();
console.log(datos[0]); // LISTADO DE VUELOS DISPONIBLES PARA EL DÍA
console.log(datos[1]); // COSTE MEDIO DE LOS VUELOS
console.log(datos[2]); // NÚMERO DE VUELOS CON ESCALA
console.log(datos[3]); // LOS ÚLTIMOS 5 VUELOS DEL DIA
//alert(datos[0]+"\n"+datos[1]+"\n"+datos[2]+"\n"+datos[3]);
