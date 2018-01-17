// https://fonts.google.com/
function Calculate(){
	var n1 = parseInt(document.getElementById('n1').value); // Pasamos a número lo que se recupera en un campo de texto que es un string
	var n2 = parseInt(document.getElementById('n2').value); // Pasamos a número lo que se recupera en un campo de texto que es un string
	var sum = n1 + n2;
	var subs = n1 - n2;
	var mult = n1 * n2;
	var div = n1 / n2;

	document.getElementById('results').innerHTML =  // Mostramos el resultado como una lista
	'<li>' + n1 + ' + ' + n2 + ' = ' + sum + '</li>' + 
	'<li>' + n1 + ' - ' + n2 + ' = ' + subs + '</li>' + 
	'<li>' + n1 + ' x ' + n2 + ' = ' + mult + '</li>' + 
	'<li>' + n1 + ' / ' + n2 + ' = ' + div + '</li>';
}