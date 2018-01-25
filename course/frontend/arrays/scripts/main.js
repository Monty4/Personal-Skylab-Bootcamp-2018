// FIND DIFERENCES

function _isDiferent(element){
    return element > 1;
}

function _difference(arr1,arr2){
    var diferents = arr1.filter(isDiferent);
    return diferents;
}

function _difference(arr1,arr2){
    for (var i = 0; i < arr1.length; i++){
        var different = new Array;
        var diff = true;
        for (value of arr2){
            if ( value === arr1[i] ) diff = false;
        }
        if (diff == false){
            different.push(arr1[i]);
        }
    }
    return different;
}

function difference(arr1,arr2){
    var allValues = new Array;
    var newAllValues = new Array;
    for (var i = 0; i < arr1.length; i++){
        allValues.push(arr1[i]);
    }
    for (var j = 0; j < arr2.length; j++){
        allValues.push(arr2[j]);
    }
    //console.log(allValues);
    for (var k = 0; k < allValues.length; k++){
        //console.log(k);
        var findIdent = 0;
        console.log(findIdent);
        for (var l = k+1; l < allValues.length; l++){
            if (allValues[k] !== allValues[l]){
                var findIdent = 1;
            }
        }
        if ( findIdent !== 1) newAllValues.push(allValues[k]);
    }
    return newAllValues;
}
    
console.log(difference([1, 2, 3], [100, 2, 1, 10])); 
//console.log(difference([1, 2, 3])); 