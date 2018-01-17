var name = "Mark";

undefined
console.log(na
    VM144:1 Uncaught SyntaxError: missing ) after argument list
console.log(name);
VM150:1 Mark
undefined
var age = 38;
undefined
console.log(age);
VM194:1 38
undefined
var info = ["Mario","Montalban","51"];
undefined
console.log(info);
VM240:1 (3) ["Mario", "Montalban", "51"]0: "Mario"1: "Montalban"2: "51"length: 3__proto__: Array(0)
undefined
var data = {name:"Mario", age:51};
undefined
console.log(data);
VM282:1 {name: "Mario", age: 51}age: 51name: "Mario"__proto__: Object
undefined
for (var i=0; i<info.length; i++){
    console.log(info[i]);
}
VM354:2 Mario
VM354:2 Montalban
VM354:2 51
undefined
var a = 25;
undefined
var b = 12;
undefined
if (a>b) {console.log(a);
    VM423:1 Uncaught SyntaxError: Unexpected end of input
    if (a>b) {
        console.log(a);
    }else if (a<b>) {
        VM497:3 Uncaught SyntaxError: Unexpected token )
if (a>b) {
    console.log(a);
}else if (a<b) {
    console.log(b);
}
VM529:2 25
undefined
if (a>b) {
    console.log(a);
}else if (a<b) {
    console.log(b);
}else {
    console.log("The numbers are equal");
}
VM567:2 25
undefined
var b = 25;
undefined
if (a>b) {
    console.log(a);
}else if (a<b) {
    console.log(b);
}else {
    console.log("The numbers are equal");
}
VM577:6 The numbers are equal
undefined
var numbers = [1,2,3,4,5];
undefined
for (var i=0; i<numbers.length; i++){
    if ((numbers.length-1) / i == 2) { console.log("We are in the middle of loop") } else { console.log(numbers[i]); }
}
VM619:2 1
VM619:2 2
VM619:2 We are in the middle of loop
VM619:2 4
VM619:2 5
undefined
var myName = "Mario";
undefined
var myAge = "51";
undefined
var myAge = 51;
undefined
if (myName != "Mario" && myAge != 51){
   console.log("this is not you!");    
} else {
   console.log("Hi!! Glad to see u again!");   
}
VM739:4 Hi!! Glad to see u again!
undefined
var datos = ["Mario",51];
undefined
var datos = ["Oscar 19", "Mario 51", "Alba 16"];
undefined
for (var i=0; i<datos.length; i++){
   if (datos[i] == "Mario 51"){   
   }
   VM909:3 Uncaught SyntaxError: Unexpected end of input
   for (var i=0; i<datos.length; i++){
       if (datos[i] == "Mario 51"){   
       }
       VM910:3 Uncaught SyntaxError: Unexpected end of input
       for (var i=0; i<datos.length; i++){
           if (datos[i] == "Mario 51"){ 
           }
           VM911:3 Uncaught SyntaxError: Unexpected end of input
           for (var i=0; i<datos.length; i++){
               if (datos[i] == "Mario 51"){ console.log(datos[i]);
               }
           }
           VM959:2 Mario 51
           undefined