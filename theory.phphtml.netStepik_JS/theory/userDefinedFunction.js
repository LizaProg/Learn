/*функция, которая возводит число в квадрат*/
function square(num) {
    return num * num
}
console.log(square(2));

/*(!) - можно не передавать все параметры - если какой-то не передан, вместо него запишется undefined.*/

/*если мы не передали параметр num, то по умолчанию бралось значение 3*/
/*1 method приравнять num к undefined*/
function square1(num) {
    if (num == undefined) {
        num = 3;
    }
    return num * num;
}
console.log(square1());

/*2 предполагаем что параметр отсутствует, если передана пустая строка, 0, или вообще любое значение, которое в логическом контексте является false.*/
function square2(num) {
    num = num || 3;
    return num * num;
}
console.log(square2());

/*/!*(!) передаем несколько параметров и часть из них (с конца) сделать необязательными, присвоив им значение по умолчанию:*!/
 function square3(num1, num2, num3) {
 num2 = num2 || 4;
 num3 = num3 || 5;


 return num1 * num1;
 }
 console.log(square3(2, 3, 5));*/

function plus(num1, num2, num3) {
    if (num2 == undefined) {
        num2 = 0
    }
    if (num3 == undefined) {
        num3 = 0
    }

    return num1 + num2 + num3
}
console.log(plus(2, undefined, 5));
