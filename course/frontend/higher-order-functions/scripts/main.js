function countVowels(text){
    var characters = text.toLowerCase().split('');
    var vowels = 'aeiouAEIOU';

    var countVowels = characters.reduce(function (acc, current){
        if (vowels.split('').indexOf(current) > -1){
            return acc + 1;
        }else {
            return acc;
        }

        //return vowels.split('').indexOf(current) > -1? acc +1 : acc;


    }, 0);
    return countVowels;
}
reduce();


function reduce(){

    var loremIpsum = 'prueba de texto, con ipsum';
    var arrayIpsum = loremIpsum.split("");
    var vowels = "aeiouAEIOU";
    var countVowels = arrayIpsum.reduce(function(acc,current){
        if(vowels.split("").indexOf(current)!==-1){
           return acc+1;
        }else{
            return acc;
        }
    },0);
    return countVowels;
}

// DO ON CHARS
var nextText = '';
var newChar = '';
function doOnChars(text,operationOnChar){
    
    for (var i = 0; i < text.length; i++){
        nextText = operationOnChar(text[i]);
    }
    return nextText;
}

function operation(char){
    if (char != ' '){
        newChar += '[' + char + ']';
    }else{
        newChar += char;
    }
    return newChar;
}

console.log(doOnChars('hello world', operation));

// MANIPULATE TEXT

var charsArray = new Array;
function texto(word){
    //return charsArray.push(word);
    return word;
}

function wrap(simbol){
    charsArray.unshift(simbol);
    charsArray.push(simbol);
    return charsArray.join('');
}
var word = texto('something');
console.log(word);



wrap('$');
console.log(text('something').wrap('$'));
wrap('[',']');




var charsArray = new Array;
chars = '';
function _manipulateText(word){
    this.letters = function(_word){
        //word = _word;
        charsArray.push(_word);
        chars = _word;
        //return _word;
    }

    this.wrap = function(simbol1,simbol2){
        if (simbol1 && simbol2){
            charsArray.unshift(simbol1);
            charsArray.push(simbol2);
            chars = charsArray.join('');
        }else {
            charsArray.unshift(simbol1);
            charsArray.push(simbol1);
            chars = charsArray.join('');
        }
    }
}

/*
function manipulateText(word){
    this._word = 'hola';
    this.letters = function(_word){
        charsArray.push(_word);
        chars = _word;
        return chars;
    }

    this.wrap = function(simbol1,simbol2){
        if (simbol1 && simbol2){
            charsArray.unshift(simbol1);
            charsArray.push(simbol2);
            chars = charsArray.join('');
        }else {
            charsArray.unshift(simbol1);
            charsArray.push(simbol1);
            chars = charsArray.join('');
        }
    }
}
*/










/**
 * @version 1.0
 */

function text(source){
    function wrap(arg1,arg2){
        if (arg2 === undefined){
            arg2 = arg1;
        }
        source = arg1 + source + arg2;
        return this;
    }

    function toString(){
        return source;
    }

    return {
        wrap: wrap,
        toString: toString
    }
}



// Este método crea un objeto nuevo cada vez (recursividad)
function wrap(text,before,after){
    return (before || '') + text + (after || before || '');
}

function text(_text){
    return{
        wrap: function(before,after){
            return text((wrap(_text, before, after)))
        },
        toString: function(){
            return _tex;
        }
    };
}





// CLOSURE
var text;
(function(){
    function wrap(text,before,after){
        return (before || '') + text + (after || before || '');
    }
    
    text = function (_text){
        var _text = new String(_text);
        
        
            wrap: function(before,after){
                return text((wrap(_text, before, after)))
            },
            toString: function(){
                return _text;
            }
        
    }
})();
var res = text('something').wrap('$').wrap('[', ']').wrap('{', '}').wrap('<', '>').wrap('#').toString();













var word = new manipulateText();
word.letters('something');
word.wrap('$');
word.wrap('[',']');
word.wrap('{','}');
word.wrap('<','>');
word.wrap('#');
console.log(chars);
