/*
DEFINICION DE VARIABLES
var cont => Contador de números aacertados (<=15)
var contl1 => Contador de números acertados en la línea 1 (<=5)
var contl2 => Contador de números acertados en la línea 2 (<=5)
var contl3 => Contador de números acertados en la línea 3 (<=5)
var linea => Contador de linea cantada (bool)
*/
// ___________________________________________ DEFINICIÓN DE FUNCIONES __________________________________________
// Función para obtener una matriz de 15 números aleatorios
function numsRandom(){
    var numeros = new Array();
    
    for (i=1; i<16; i++){
        do {
                var random = Math.floor(Math.random() * (91 - 1)) + 1;
            }
            while(numeros.includes(random))
        numeros.push(random);
    }
    return numeros;
}
// Creamos la matriz con los 15 objetos
function showArray(){
    for (var i=0; i<15; i++){
        var card = new Object();
        card.number = arrayNumbers[i];
        card.matched = false;
        bingoCard.push(card);
    }
    var line1 = "";
    for (var i=0; i<5; i++){
        line1 += bingoCard[i].number + '        ';
    }
    console.log(line1);
    var line2 = "";
    for (var j=5; j<10; j++){
        line2 += bingoCard[j].number + '        ';
    }
    console.log(line2);
    var line3 = "";
    for (var k=10; k<15; k++){
        line3 += bingoCard[k].number + '        ';
    }
    console.log(line3);
    console.log('___________________________________________________________');
}
// Función para comprobar que el número 
function checkNumber(randomToCheck){
    // Evaluamos Si alguno de los 5 primeros objetos (linea1) tiene un propiedad number igual al número pasado .................
    for (var i=0; i<5; i++){
        if (bingoCard[i].number == randomToCheck && contadorLinea1 < 5){
            cont++;
            contadorLinea1++;
            bingoCard[i].number = 'X';
            if (contadorLinea1 == 5 && linea == 'NO'){
                linea = 'SI';
                alert('********** LÍNEA 1 DEL CARTÓN COMPLETADA **********');
            }else{
                alert('EL NÚMERO EXISTE EN LA LÍNEA 1 DEL CARTÓN');
            }
        }
    }
    // Evaluamos Si alguno de los 5 segundos objetos (linea2) tiene un propiedad number igual al número pasado .................
    for (var j=5; j<10; j++){
        if (bingoCard[j].number == randomToCheck && contadorLinea2 < 5){
            cont++;
            contadorLinea2++;
            bingoCard[j].number = 'X';
            if (contadorLinea2 == 5 && linea == 'NO'){
                linea = 'SI';
                alert('********** LÍNEA 2 DEL CARTÓN COMPLETADA **********');
            }else{
                alert('EL NÚMERO EXISTE EN LA LÍNEA 2 DEL CARTÓN');
            }
        }
    }
    // Evaluamos Si alguno de los 5 terceros objetos (linea3) tiene un propiedad number igual al número pasado .................
    for (var k=10; k<15; k++){
        if (bingoCard[k].number == randomToCheck && contadorLinea3 < 5){
            cont++;
            contadorLinea3++;
            bingoCard[k].number = 'X';
            if (contadorLinea3 == 5 && linea == 'NO'){
                linea = 'SI';
                alert('********** LÍNEA 3 DEL CARTÓN COMPLETADA **********');
            }else{
                alert('EL NÚMERO EXISTE EN LA LÍNEA 3 DEL CARTÓN');
            }
        }
    }
}
// ___________________________________________________ EJECUCIÓN _________________________________________________
var name = prompt("Por favor, introduce tu nombre");
console.log("Bienvenido: " + name);
var arrayNumbers = numsRandom(); // Llamada a la función para generar la matriz de 15 números aleatorios
// Inicializamos variables
var cont = 1; // Contador de aciertos totales
var turno = 0;
var contadorLinea1 = 0; // Contador de aciertos linea 1
var contadorLinea2 = 0; // Contador de aciertos linea 2
var contadorLinea3 = 0; // Contador de aciertos linea 3
var linea = 'NO';
var bingoCard = new Array(); // Matriz con los números del cartón
var cantados = new Array(); // Matriz con los números cantados
while (cont < 16){
    showArray();
    do {
            var randomToCheck = Math.floor(Math.random() * (91 - 1)) + 1; // Número aleatorio entre 1 y 90 que no haya salido ya (esté en el arraycantados)
        }
        while(cantados.includes(randomToCheck))
    cantados.push(randomToCheck);
    turno ++;
    var num = confirm(randomToCheck);
    checkNumber(randomToCheck);
}
showArray();
alert('********** BINGO COMPLETADO **********');
console.log(turno);