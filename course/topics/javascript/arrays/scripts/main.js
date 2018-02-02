// is Array
function isArray(arr){
    return Array.isArray(arr);
    //return arr.constructor == array;
    //return arr instanceof Array; SOBRE OBJETOS, NO PRIMITIVOS
}

console.log(isArray([]));
console.log(isArray([1,2,3]));
console.log(isArray('skylab'));
console.log(isArray('skylab'));


// joinElements
function joinElements(array){
    return array.join();
}
beatles = ['John','George','Ringo','Paul'];
console.log(joinElements(beatles));

// array_Clone
/*
function arrayClone(array) {
    return Array.slice();
}
console.log(arrayClone([1,2,4,0]));
console.log(arrayClone([1,2,[4,0]]));
*/

function recursiveArrayClone(){
    var result = [];
    for (var i =)
}