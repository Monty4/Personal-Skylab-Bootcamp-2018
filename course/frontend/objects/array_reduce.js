// REDUCE ______________

var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) {
if (name in allNames) {
allNames[name]++;
}
else {
allNames[name] = 1; // Equivale a allNames.name = 1;
}
return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

//alNames almacena el objeto {}
//name almacena los valores del array names

cart = [
    {
        name: 'camiseta ....',
        price: 10.2
    }
    {
        name: 'chaqueta ....',
        price: 156.9
    }
    {
        name: 'camiseta ....',
        price: 10.2
    }
]
cart.reduce(function(acum, v) {return accum + v.price}, 0)