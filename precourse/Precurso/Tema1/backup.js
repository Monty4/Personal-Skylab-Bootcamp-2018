function suma(a,b){
	var aToNumber = parseInt(a);
	var bToNumber = parseInt(b);
	if (!isNaN(aToNumber) && !isNaN(bToNumber)){
		return aToNumber + bToNumber;
	}else if(isNaN(aToNumber) || isNaN(bToNumber)){
		if (isNaN(aToNumber)){
			return Math.sqrt(bToNumber).toFixed(3);
		}else if(isNaN(bToNumber)){
			return Math.sqrt(aToNumber).toFixed(3);
		}
	}
}

function resta(){
	if (!isNaN(a) && !isNaN(b)){
		return a-b;
	}else if(isNaN(a) || isNaN(b)){
		return 'error';
	}
}

function multiplicacion(){
	if (!isNaN(a) && !isNaN(b)){
		return a*b;
	}else if(isNaN(a) || isNaN(b)){
		return 'error';
	}
}

function division(){
	if (!isNaN(a) && !isNaN(b)){
		return a/b;
	}else if(isNaN(a) || isNaN(b)){
		return 'error';
	}
}

// Introduciendo datos con Prompt
do { var a = prompt("Por favor, introduce un valor numérico para a"); } while(isNaN(a));
do { var b = prompt("Por favor, introduce un valor numérico para b"); } while(isNaN(b));

// Definiendo el array de resultados
var resultado = new Array();

// Llamando a la función suma
var sum = suma(a,b);
resultado.push(sum);
console.log(resultado);

// Llamando a la función resta
var rest = resta();
console.log(rest);

// Llamando a la función multiplicación
var mult = multiplicacion();
console.log(mult);

// Llamando a la función división
var div = division();
console.log(div);