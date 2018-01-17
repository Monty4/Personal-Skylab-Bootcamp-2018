/*
a) Escribe una funcion en la que, declarando una array con los numeros del 1 al 9, 
muestres por pantalla los numeros unidos por parejas (1-2, 2-3, 3-4...), además, cada elemento de la pareja deberá estar multiplicada por 2.
*/

function showNums(){
    var nums = [1,2,3,4,5,6,7,8,9];
    for(var i = 0; i < nums.length-1; i++){
        var pairs = [nums[i],nums[i+1]];
        var operation = pairs.map(multiplyArrayElement);
        console.log(i+1 + "ª pareja " + operation.join(" - "));
    }
    function multiplyArrayElement(item){
    	return item * 2;
    }
}
showNums();


// a1) La funcion debería aceptar la array a tratar como argumento.
function showNums(nums){
    
    for(var i = 0; i < nums.length-1; i++){
        var pairs = [nums[i],nums[i+1]];
        var operation = pairs.map(multiplyArrayElement);
        console.log(i+1 + "ª pareja " + operation.join(" - "));
    }
    function multiplyArrayElement(item){
    	return item * 2;
    }
}
var nums = [1,2,3,4,5,6,7,8,9];
showNums(nums);


// a2) Pasa también el numero a multiplicar a la función como argumento
function showNums(nums,multiplicador){ //<= el último número de arguments lo podemos tratar como el numero multiplicador...
    
    for(var i = 0; i < nums.length-1; i++){
        var pairs = [nums[i],nums[i+1]];
        var operation = pairs.map(multiplyArrayElement,multiplicador);
        console.log(i+1 + "ª pareja " + operation.join(" - "));
    }
    function multiplyArrayElement(item){
    	return item * multiplicador;
    }
}
var nums = [1,2,3,4,5,6,7,8,9,10,11,12];
showNums(nums,nums[11]);


// a3) La función debería ser capaz de recibir el numero de parejas que queremos devolver del total.
function showNums(nums,multiplicador,filas){ //<= el último número de arguments lo podemos tratar como el numero multiplicador...
    
    for(var i = 0; i < filas; i++){
        var pairs = [nums[i],nums[i+1]];
        var operation = pairs.map(multiplyArrayElement,multiplicador);
        console.log(i+1 + "ª pareja " + operation.join(" - "));
    }
    function multiplyArrayElement(item){
    	return item * multiplicador;
    }
}
var nums = [1,2,3,4,5,6,7,8,9,10,11,12,3];
console.log("El número escogido es, " + nums[11]);
console.log("Se quieren mostrar las " + nums[12] + " primeras parejas");
showNums(nums,nums[11],nums[12]);


// b) Volvemos a la numeros... Podrias hacer una funcion que mostrara por pantalla la serie Fibonacci?
var serie = [0,1];
function fibo(){
	for (var i=2; i<10; i++){ // añadimos 8 valores a los 2 iniciales y tenemos 8
		serie.push(serie[serie.length-2] + serie[serie.length-1]);
	}
	return serie;
}
var fibo = fibo();
console.log(fibo.join(" "));


// b2) Puedes añadir además, la posición de cada resultado?
var serie = [0,1];
function fibo(){
	for (var i=2; i<10; i++){ // añadimos 8 valores a los 2 iniciales y tenemos 8
		serie.push(serie[serie.length-2] + serie[serie.length-1]);
	}
	return serie;
}
var fibo = fibo();
for (var i=0; i<fibo.length; i++){
	console.log("Pos " + i + ": " + fibo[i]);
}


// b3) Ahora, inserta los resultados en una array y muestralos todos juntos de una manera amigable.


// b4) Ahora, el usuario debería ser capaz de especificar la posición de la serie hasta donde queremos llegar.
var serie = [0,1];
function fibo(posicion){
	for (var i=2; i<=posicion; i++){ // añadimos 8 valores a los 2 iniciales y tenemos 8
		serie.push(serie[serie.length-2] + serie[serie.length-1]);
	}
	return serie;
}

var posicion = prompt("Indica la posición hasta donde deseas realizar la serie");
var fibo = fibo(posicion);
for (var i=0; i<fibo.length; i++){
	console.log("Pos " + i + ": " + fibo[i]);
}


// b5) Ahora, muestra los resultados en forma piramidal:
function fiboPymamid(posicion){
	for (var i=2; i<=posicion; i++){ // añadimos 8 valores a los 2 iniciales y tenemos 8
		serie.push(serie[serie.length-2] + serie[serie.length-1]);
		console.log(serie.join(" "));
	}

	for (var j=posicion; j>=2; j--){ // añadimos 8 valores a los 2 iniciales y tenemos 8
		serie.pop();
		console.log(serie.join(" "));
	}
	return serie;
}

var posicion = prompt("Indica la posición hasta donde deseas realizar la serie");
var serie = new Array();
var index0 = serie.push(0);
console.log(serie.join(" "));

var index1 = serie.push(1);
console.log(serie.join(" "));

var fibo = fiboPymamid(posicion);

serie.pop();
console.log(serie.join(" "));


/*
c) Simple Scripting program. Crea un programa que transforme un número de 4 dígitos en otro diferente con las posiciones de los dígitos cambiadas, 
creando un nuevo código
*/
var code = 3712;
function codeScript(code){
	var string = code.toString();
	
	for (var i=0; i<4; i++){
		var num = string.substr(i,1);
		switch(i){
			case 0:
			pos4 = num;
			break;

			case 1:
			pos1 = num;
			break;

			case 2:
			pos2 = num;
			break;

			case 3:
			pos3 = num;
			break;
		}
		
	}
	var change1 = parseInt(pos1 + pos2 + pos3 + pos4);
	return change1;
}
var cadena = codeScript(code);
code = cadena;
console.log(code);


/*
c2) Ahora, el usuario debería poder introducir como parámetro dos códigos a la vez y devolver los dos códigos encriptados 
(Los dos códigos se deberían encriptar en la misma función)
*/
var code1 = 3712;
var code2 = 4952;

function codeScript(code1,code2){
	var string1 = code1.toString();
	var string2 = code2.toString();

	var numeros = new Array();
	
	for (var i=0; i<4; i++){
		var num1 = string1.substr(i,1);
		var num2 = string2.substr(i,1);
		switch(i){
			case 0:
			var num1pos4 = num1;
			var num2pos4 = num2;
			break;

			case 1:
			var num1pos1 = num1;
			var num2pos1 = num2;
			break;

			case 2:
			var num1pos2 = num1;
			var num2pos2 = num2;
			break;

			case 3:
			var num1pos3 = num1;
			var num2pos3 = num2;
			break;
		}
	}
	var change1 = parseInt(num1pos1 + num1pos2 + num1pos3 + num1pos4);
	var change2 = parseInt(num2pos1 + num2pos2 + num2pos3 + num2pos4);
	numeros.push(change1,change2);
	return numeros;
}

var cadena = codeScript(code1,code2);
code1 = cadena[0];
code2 = cadena[1];
console.log(code1 + " / " + code2);


/*
c3) Ahora, vamos a añadir un nivel más de seguridad. Despues de cambiar la posición de los dígitos, 
multiplicaremos a cada miembro por un numero cuya multiplicación no sea superior a 10. 
(Si es superior a 10, conseguiremos una multplicación de dos digitos y el código ya no sería de 4 valores)
*/
var code = 3712;
function codeScript(code){
	var string = code.toString();
	
	for (var i=0; i<4; i++){
		var num = string.substr(i,1);
		switch(i){
			case 0:
			do{
				var random = (Math.floor(Math.random() * (10 - 1)) + 1) * num;
			}
			while(random > 9);
			pos4 = random.toString();
			break;

			case 1:
			do{
				var random = (Math.floor(Math.random() * (10 - 1)) + 1) * num;
			}
			while(random > 9);
			pos1 = random.toString();
			break;

			case 2:
			do{
				var random = (Math.floor(Math.random() * (10 - 1)) + 1) * num;
			}
			while(random > 9);
			pos2 = random.toString();
			break;

			case 3:
			do{
				var random = (Math.floor(Math.random() * (10 - 1)) + 1) * num;
			}
			while(random > 9);
			pos3 = random.toString();
			break;
		}
	}
	var change1 = parseInt(pos1 + pos2 + pos3 + pos4);
	return change1;
}
var cadena = codeScript(code);
console.log(cadena);


/*
c4) Ahora, implementa en otra funcion aparte el decrypter(), que recibirá como argumento un código encriptado 
(y correspondientemente multiplicado en el apartado c3) y nos devuelva el código desencriptado.
*/
var code = 3712;
var param1 = new Array();
var param2 = new Array();
function codeScript(code){
	var string = code.toString();
	
	for (var i=0; i<4; i++){
		var num = string.substr(i,1);
		switch(i){
			case 0:
			do{
				var random1 = (Math.floor(Math.random() * (10 - 1)) + 1);
				var random = random1 * num;
			}
			while(random > 9);
			pos4 = random.toString();
			break;

			case 1:
			do{
				var random2 = (Math.floor(Math.random() * (10 - 1)) + 1);
				var random = random2 * num;
			}
			while(random > 9);
			pos1 = random.toString();
			break;

			case 2:
			do{
				var random3 = (Math.floor(Math.random() * (10 - 1)) + 1);
				var random = random3 * num;
			}
			while(random > 9);
			pos2 = random.toString();
			break;

			case 3:
			do{
				var random4 = (Math.floor(Math.random() * (10 - 1)) + 1);
				var random = random4 * num;
			}
			while(random > 9);
			pos3 = random.toString();
			break;
		}
	}
	var change1 = parseInt(pos1 + pos2 + pos3 + pos4);
	//alert(change1);
	param1.push(change1,random1,random2,random3,random4);
	//alert(param1);
	return param1;
}

function decrypter(code){
	var string = code[0].toString();
	pos1 = parseInt(string.substr(3,1)) / code[1];
	pos2 = parseInt(string.substr(0,1)) / code[2];
	pos3 = parseInt(string.substr(1,1)) / code[3];
	pos4 = parseInt(string.substr(2,1)) / code[4];
	param2.push(pos1,pos2,pos3,pos4);
	return param2;
}

console.log("Nº a encriptar: " + code);

var cadena1 = codeScript(code);
console.log("Valores aleatorios para la enciptación: " + cadena1[1] + ", " + cadena1[2] + ", " + cadena1[3] + ", " + cadena1[4]);
console.log("Nº encriptado: " + cadena1[0]);

var cadena2 = decrypter(cadena1);
console.log("Nº desdencriptado: " + cadena2.join(""));


//c5) Añade las dos funciones a la misma función padre, de forma que encripte y desencripte a la vez cuando termine de ejecutarse.
var code = 3712;
var param1 = new Array();
var param2 = new Array();
function father(code){
	var cadena1 = codeScript(code);
	function codeScript(code){
		var string = code.toString();
		for (var i=0; i<4; i++){
			var num = string.substr(i,1);
			switch(i){
				case 0:
				do{
					var random1 = (Math.floor(Math.random() * (10 - 1)) + 1);
					var random = random1 * num;
				}
				while(random > 9);
				pos4 = random.toString();
				break;

				case 1:
				do{
					var random2 = (Math.floor(Math.random() * (10 - 1)) + 1);
					var random = random2 * num;
				}
				while(random > 9);
				pos1 = random.toString();
				break;

				case 2:
				do{
					var random3 = (Math.floor(Math.random() * (10 - 1)) + 1);
					var random = random3 * num;
				}
				while(random > 9);
				pos2 = random.toString();
				break;

				case 3:
				do{
					var random4 = (Math.floor(Math.random() * (10 - 1)) + 1);
					var random = random4 * num;
				}
				while(random > 9);
				pos3 = random.toString();
				break;
			}
		}
		var change1 = parseInt(pos1 + pos2 + pos3 + pos4);
		param1.push(change1,random1,random2,random3,random4);

		var cadena2 = decrypter(param1).join("");
		return cadena2;
	}
	function decrypter(code){
		var string = code[0].toString();
		pos1 = parseInt(string.substr(3,1)) / code[1];
		pos2 = parseInt(string.substr(0,1)) / code[2];
		pos3 = parseInt(string.substr(1,1)) / code[3];
		pos4 = parseInt(string.substr(2,1)) / code[4];
		param2.push(pos1,pos2,pos3,pos4);
		return param2;
	}
	return cadena1;
}
console.log("Nº a encriptar: " + code);
var cadena1 = father(code);
console.log("Nº encriptado y descriptado: " + cadena1);


// c6) El usuario podrá solo introducir letras, cada número del 0 al 9 corresponderá a varias letras. Podéis seguir este esquema.
// ?????????????????????????????????????????????????????????????

function codeScript("HI  ", "WE  ", "NEED", "HELP"){}
"HI__" = "dictionary[7][0]+dictionary[8][0]+dictionary[9][2]+dictionary[9][2]..."

var dictionary = {
    0: ['A', 'K', 'T', 'F', 'O', 'Y'],
    1: ['B', 'L', 'U', 'G', 'P', 'Z'],
    2: ['C', 'M', 'V', 'H', 'Q', '.'],
    3: ['D', 'N', 'W', 'I', 'R', ','],
    4: ['E', 'Ñ', 'X', 'J', 'S', ' '],
	5: ['a', 'k', 't', 'f', 'o', 'y'],
    6: ['b', 'l', 'u', 'g', 'p', 'z'],
    7: ['c', 'm', 'v', 'h', 'q', '.'],
    8: ['d', 'n', 'w', 'i', 'r', ','],
    9: ['e', 'ñ', 'x', 'j', 's', ' ']
};


/*d) Crea un programa que use la encriptacion Romana, como es? Si tenemos la palabra SKYLAB, 
la palabra encriptada será SLKAYB. Si divides la palabra original en 2 grupos obtienes:
*/
function encriptSkylab(str){
	var part1 = [];
	var part2 = [];
	var newCode = [];
	for (var i = 0; i < str.length; i++){
		if (i < 3){
			part1.push(str[i]);
		}else{
			part2.push(str[i]);
		}
	}
	for (var i = 0; i < part1.length; i++){
		newCode.push(part1[i]);
		newCode.push(part2[i]);
	}
	console.log(newCode.join(""));
}
encriptSkylab("skylab");


// d2) Programa el desencriptador, pasa como parámetro SLKAYB y que devuelva SKYLAB.
function decriptSkylab(str){
	var part1 = [];
	var part2 = [];
	var newCode = [];
	for (var i = 0; i < str.length; i++){
		if (i%2 == 0){
			part1.push(str[i]);
		}else{
			part2.push(str[i]);
		}
	}
	for (var i = 0; i < part1.length; i++){
		newCode.push(part1[i]);
	}
	for (var i = 0; i < part2.length; i++){
		newCode.push(part2[i]);
	}
	console.log(newCode.join(""));
}
decriptSkylab("SLKAYB");


/*
d3) Agrupa la función Encrypt y decrypt en una unica función, de forma que introduzcas como parámetro SKYLAB y devuelva SKYLAB 
(con todas las transformaciones internas hechas y mostrando, entre medias, la transformación)
*/
function father(str){
	var text = encript(str);
	function encript(str){
		var part1 = [];
		var part2 = [];
		var newCode = [];
		for (var i = 0; i < str.length; i++){
			if (i < str.length/2){
				part1.push(str[i]);
			}else{
				part2.push(str[i]);
			}
		}
		for (var i = 0; i < part1.length; i++){
			newCode.push(part1[i]);
			newCode.push(part2[i]);
		}
		var textCoded = newCode.join("");
		//console.log(newCode.join(""));
		console.log("Texto codificado: " + textCoded);
		var text2 = decript(textCoded);
		return textCoded;
	}

	function decript(str){
		var part1 = [];
		var part2 = [];
		var newCode = [];
		for (var i = 0; i < str.length; i++){
			if (i%2 == 0){
				part1.push(str[i]);
			}else{
				part2.push(str[i]);
			}
		}
		for (var i = 0; i < part1.length; i++){
			newCode.push(part1[i]);
		}
		for (var i = 0; i < part2.length; i++){
			newCode.push(part2[i]);
		}
		var textDecoded = newCode.join("");
		//console.log(newCode.join(""));
		console.log("Texto decodificado: " + textDecoded);
		return textDecoded
	}
}var texto = prompt("Introduce texto");
console.log("Texto a codificar: " + texto);
father(texto);


// d4) Lo tienes? Prueba ahora con SKYLABCODERS. Cambia la función para que pueda aceptar palabras más largas.
// ____________________ IMPLEMENTADO EN APARTADO D3 _________________________


// e) Crea un programa al que le introduces un número como parámetro del 0 al 100 y devuelve el número transformado a alfabeto normal, es decir:
function sayItWithWords(number){
	if (number.length == 1){
		var num = units[number];
	}else if (number.length == 2 && number[0] == 1){
		var num = teens[number[1]];
	}else if (number.length == 2 && number[0] != 1){
		var t = tens[number[0]];
		var u = units[number[1]];
		var num = t + '-' + u;
	}else{
		var num = 'one hundred';
	}
	return num;
}
var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

var number = prompt("Introduce un número del 0 al 100");
var inWords = sayItWithWords(number);
console.log(inWords);


// e2) Ahora, el output debería ser capaz de, aparte de devolver el número traducido, devolver también los números por los que está formado:
function sayItWithWords(number){
	if (number.length == 1){
		var num = units[number] + ', ' + units[number] + ' / ' + number;
	}else if (number.length == 2 && number[0] == 1){
		var num = teens[number[1]] + ', ' + teens[number[1]] + ' / ' + number[0] + ' + ' + number[1];
	}else if (number.length == 2 && number[0] != 1){
		var t = tens[number[0]];
		var u = units[number[1]];
		var num = t + '-' + u + ', ' + t + ' + ' + u + ' / ' + number[0]*10 + ' + ' + number[1];
	}else{
		var num = 'one hundred';
	}
	return num;
}
var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

var number = prompt("Introduce un número del 0 al 100");
var inWords = sayItWithWords(number);
console.log(inWords);


// e3) Cambia tu programa para que acepte cualquier número entre 0 y 1000.
function sayItWithWords(number){
	if (number.length == 1){
		var num = units[number] + ', ' + units[number] + ' / ' + number;
	}else if (number.length == 2){
		if (number[0] == 1){
			var num = teens[number[1]] + ', ' + teens[number[1]] + ' / ' + number[0] + ' + ' + number[1];
		}else if (number[0] != 1){
			var t = tens[number[0]];
			var u = units[number[1]];
			var num = t + '-' + u + ', ' + t + ' + ' + u + ' / ' + number[0]*10 + ' + ' + number[1];
		}
	}else if (number.length == 2){
		var t = tens[number[1]];
		var u = units[number[2]];
		var num = units[number[0]] + ' hundred ' + t + '-' + u + ', ' + units[number[0]] + ' hundred ' + '+ ' + t + ' + ' 
		+ u + ' / ' + number[0]*100 + ' + ' + number[1]*10 + ' + ' +  number[2];
	}else{
		var num = 'one thousand';
	}
	return num;
}
var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

var number = prompt("Introduce un número del 0 al 100");
var inWords = sayItWithWords(number);
console.log(inWords);


// f) Recibiendo el siguiente texto por parámetro a tu función... :


/*
f1) Añade una funcionalidad que cuente cuantos cambios/coincidencias ha encontrado de cada palabra, 
y te los muestre de una forma amigable para el usuario
*/