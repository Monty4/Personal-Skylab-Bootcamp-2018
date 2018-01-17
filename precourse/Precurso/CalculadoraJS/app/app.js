// https://fonts.google.com/
function Calculate(){
	var n1 = document.getElementById('n1').value; // Pasamos a número lo que se recupera en un campo de texto que es un string
	var numero = n1.split(",");
	var sum = 0;
	for (num in numero){
		console.log(numero[num]);
		sum = sum + parseInt(numero[num]);
		if (num == 0){
			subs = numero[num];
			mult = numero[num];
			div = numero[num];
		}else if (num > 0){
			subs = subs - parseInt(numero[num]);
			mult = mult * parseInt(numero[num]);
			div = div / parseInt(numero[num]);
		}
	}
	/*
	for (num in arguments){
    sum += arguments[num];
    subs -= arguments[num];
    mult *= arguments[num];
    div /= arguments[num];  
    }
    */

	document.getElementById('results').innerHTML =  // Mostramos el resultado como una lista
	'<li>' + sum + '</li>' + 
	'<li>' + subs + '</li>' + 
	'<li>' + mult + '</li>' + 
	'<li>' + div + '</li>';
}