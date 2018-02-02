"use script";
function loop(arr,callback,i){
    i = i || 0;

    if (i < arr.length) {
        callback(arr[i]);
        loop(arr,callback, ++i);
    }
}

function addSymbol(string){
    console.log(string + '$');
}

console.log(loop([1,2,3],addSymbol));