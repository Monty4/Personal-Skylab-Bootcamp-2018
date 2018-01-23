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