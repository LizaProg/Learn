var read = require('readline-sync');
// программа которая возводит 2 в степень 10. Использовать цикл while.
var num = read.question('Введите число ');
var exp = read.question('Введите желаемую степень ');
var result = 1;
var cnt = 1;
while( cnt <= exp ){
    result *= num;
    cnt++;
}
console.log(num + " в степени " + exp + " равно " + result);

//нарисовать звездчками треугольник
var lines = 5;
var line = "";
var symbol = "*";
var cnt = 1;
while (cnt <= lines){
    line += symbol;
    console.log(line);
    cnt++;
}

//программа которая возводит 2 в степень 10. Использовать цикл for.

var num = 2;
var exp = 10;
var result = 1;
for(var cnt = 1; cnt <= exp; cnt++){
    result *= num;
}
console.log(result);


