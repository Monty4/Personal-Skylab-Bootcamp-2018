// FORMA TERNARIA
var age = 20;
var result = age > 15 ? 'You can drink :)' : 'You ....'
console.log(result);


// FOR IN
var obj = {
	id: 1,
	name: 'pepe';
}
for (key in obj){
	console.log(obj[key])
}

// FOR OF versión corta del FOR
var arr = [1,2,3,4,5];
for (value of arr){
	
}

// FOREACH. Se aplica la función a cada objeto
var array = [{id:1},{id:2},{id:3}];
array.foreach(function(obj){ // array.foreach(function(obj,indice,array))
	console.log(obj);
	console.log(obj.id);
})

for (var i=0; i<5; i+=2){ // incrementamos i de 2 en 2

}

// Si en contramos un valor en 0, lo asigna.
var arr = [1];
var something = arr[0] || 'default Image';
console.log(something);