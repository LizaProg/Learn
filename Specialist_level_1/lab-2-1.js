//стр 32 раб тетр
var num = 2;
var exp = 10;
var result = 1;
var cnt = 1;
while (cnt <= exp){
    result *= num;
    cnt++;
}
console.log(result);

//самим вводить числа
var read = require("readline-sync"); //нужно подключить функцию
var number = read.question("Введите число ");
var exponent = read.question("Введите желаемую степень ");
var resul = 1;
var counter = 1;
while( counter <= exponent ){
    resul *= number;
    counter++;
}
console.log(number + " в степени " + exponent + " равно " + resul);


