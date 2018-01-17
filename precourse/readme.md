# PRECURSO 2018-01

## Proyectos en  JS
* Calculadora
```javascript
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
```
* Skylab Airlines
* Bingo
* Pasapalabra



## Proyectos en HTML
* [Pasapalabra](http://2enred.atwebpages.com/pasapalabra/)
``` css
    *{ /* Para todo el documento */
	font-family: 'Source Sans Pro', sans-serif;
	background-color: #00bfff;
}
```