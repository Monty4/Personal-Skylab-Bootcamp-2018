function suma(a,b){
	return a + b;
}

function resta(a,b){
	return a - b;
}

function multiplicacion(a,b){
	return a * b;
}

function division(a,b){
	//return (a / b).toFixed(3);
	var div = (a / b).toFixed(3);
	var parteentera = (div.split("."))[0]; // parte entera
	var partedecimal = (div.split("."))[1]; // parte decimal
	if (partedecimal == 0){
		var resultado = parteentera;
	}else var resultado = div;
	return resultado;
}

// Introduciendo datos con Prompt
do { var a = prompt("Por favor, introduce un valor numérico para a"); } while(isNaN(a));
do { var b = prompt("Por favor, introduce un valor numérico para b"); } while(isNaN(b));

// Definiendo el array de resultados
var resultado = new Array();

// Decidiendo acciones
var aToNumber = parseFloat(a);
var bToNumber = parseFloat(b);
// Realizando la raíz cuadrada si uno de los dos valores no se ha introducido
if(isNaN(aToNumber) || isNaN(bToNumber)){
	if (isNaN(aToNumber)){
		var valor = Math.sqrt(bToNumber).toFixed(3);
		var mensaje ='La raíz cuadrada de "' + b + '" es: ';
	}else if(isNaN(bToNumber)){
		var valor = Math.sqrt(aToNumber).toFixed(3);
		var mensaje ='La raíz cuadrada de "' + a + '" es: ';
	}
	var parteentera = (valor.split("."))[0]; // parte entera
	var partedecimal = (valor.split("."))[1]; // parte decimal
	if (partedecimal == 0){
		var resultado = parteentera;
	}else var resultado = valor;
	alert(mensaje + resultado);
	// Si se han introducido dos números, procedemos a llamar a las funciones suma, resta, multiplicación y división
}else if (!isNaN(aToNumber) && !isNaN(bToNumber)){
	var valor1 = suma(aToNumber,bToNumber); // Llamando a la función suma
	var valor2 = resta(aToNumber,bToNumber); // Llamando a la función resta
	var valor3 = multiplicacion(aToNumber,bToNumber); // Llamando a la función multiplicación
	var valor4 = division(aToNumber,bToNumber); // Llamando a la función división
	resultado.push(valor1,valor2,valor3,valor4); // Introduciendo datos en la matriz

	var mensaje = "";
	mensaje = mensaje + "La suma de los dos valores es: " + resultado[0] + "\n";
	mensaje = mensaje + "La resta de los dos valores es: " + resultado[1] + "\n";
	mensaje = mensaje + "La multiplicación de los dos valores es: " + resultado[2] + "\n";
	mensaje = mensaje + "La división de los dos valores es: " + resultado[3];
	alert(mensaje);
}