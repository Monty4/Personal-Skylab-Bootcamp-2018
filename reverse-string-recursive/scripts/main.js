// Pasamos 'hello' y el resultado es 'olleh'

function _reverseString(str){
    if (str ===''){
        return '';
    }else {
        return reverseString(str.slice(1)) + str.charAt(0); // Cuando se ha terminado de hacer todos los slice se van devolviendo los caracteres 1 por 1 en orden inverso
    }
}

// Simplificando
function reverseString(str){
    return  str ? reverseString(str.slice(1)) + str.charAt(0) : '';
}

console.log(reverseString('hello'));