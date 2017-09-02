//Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.

/*1 варик*/
/*var arr = [3, 12, 15, 17, 5];
 var flag = false; //считаем, что 5 нет в массиве
 for(var i = 0; i < arr.length; i++){
 if (arr[i] == 5){
 flag = true;
 break;
 }
 }
 if (flag == true) {
 console.log('Да');
 } else {
 console.log('Нет');
 }*/

/*2 варик*/
/*var arr = [3, 12, 15, 17, 5];
 function hasElem(arr) {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] == 5) {
 return true;
 }
 }
 return false;
 }
 console.log(hasElem(arr));*/

//Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.
/*var num = 31;
var flag = false;
for (var i = 1; i <= 31; i++) {
    var res = num % i;
    if (res == 0) {
        flag = true;
        break;
    }
}
if (flag == true) {
    console.log('true');
} else {
    console.log('false');
}*/

//Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.
/*function summ(firstNum, lastNum) {
    var summNum = firstNum + lastNum;
    if(summNum > 10){
        return true
    }else {
        return false
    }
}
console.log(summ(0, 0));*/

//Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее

/*var array = [];
for (var i = 0; i < 10; i++) {
    array[i] = '';
    for (var j = 0; j <= i; j++) {
        array[i] += 'x';
    }
}
console.log(array);*/


//Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее
/*var array = [];
for (var i = 1; i < 10; i++) {
    var line = '';
    for (var j = 0; j < i; j++) {
        line += array[i];
    }
    array.push(line);
}
console.log(array);*/

//Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

/*var arr = [3, 5];
function moreTen(array) {
    var summElem = 0;
    var i = 0;
    var moreTen = false;
    for( ; i < array.length; i++ ){
        summElem = summElem + array[i];
        if(summElem > 10){
            moreTen = true;
            break;
        }
    }
    if(moreTen = true){
        return i;
    }else {
        return -1;
    }
}
console.log(moreTen(arr));*/


//Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное.

/*
var arr = [1, 2, 3, -1, -2, -3];
function isPositive(num) {
    if(num >= 0){
        return true
    }else {
        return false
    }
}
var newArr = [];
for(var i = 0; i < arr.length; i++){
    if(isPositive(arr[i])){
        newArr.push(arr[i])
    }
}
console.log(newArr);
*/

//Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

/*var myNum = 50;
function isNumberInRange(num) {
    if(num > 0 && num < 10){
        return true
    }else {
        return false
    }
}
console.log(isNumberInRange(myNum));*/

//Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.
/*var myArr = [1, 2, 3, 5, 25, 57, 11, 9, -1, -2, -3];
function isNumberInRange(num) {
    if(num > 0 && num < 10){
        return true
    }else {
        return false
    }
}
var newArr = [];
for(var i = 0; i <= myArr.length; i++){
    if(isNumberInRange(myArr[i])){
        newArr.push(myArr[i]);
    }
}
console.log(newArr);*/

//Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

/*var myDigit = 56;
var arrDigit;
var result = 0;
function digitSplit(digit) {
    arrDigit = String(digit).split('');
    return arrDigit;
}
function getDigitsSum(arr) {
    for(var i = 0; i < arr.length; i++){
        result += arrDigit[i];
    }
    return result;
}

console.log(digitSplit(myDigit));
console.log(getDigitsSum(arrDigit));*/

//Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
/*var num = 156;
function isEven(number) {
    if (number % 2 == 0){
        return true;
    } else {
        return false;
    }
}
console.log(isEven(num));*/

//Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

/*var arr = [16, 38, 45, 25, 66, 33, 74, 52];
function isEven(number) {
    if (number % 2 == 0){
        return true;
    } else {
        return false;
    }
}
var newArr = [];
for (var i = 0; i < arr.length; i++){
    if(isEven(arr[i])){
        newArr.push(arr[i]);
    }
}
console.log(newArr);*/

//Сделайте функцию getDividers, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).

/*var num = 36;
function getDividers(number) {
    var arr = [];
    for (var i = 1; i <= number; i++){
        if(number % i == 0){
            arr.push(i);
        }
    }
    return arr;
}
console.log(getDividers(num));*/

//Сделайте функцию, которая параметром принимает 2 числа, а возвращает массив их общих делителей. Для этого используйте вспомогательную функцию getDividers из предыдущей задачи.

/*var numFirst = 9;
var numLast = 3;
function getDividers(numOne, numTwo) {
    var arr = [];
    for (var i = 1; i <= numFirst; i++){
        if(numOne % i == 0 && numTwo % i == 0){
            arr.push(i);
        }
    }
    return arr;
}
console.log(getDividers(numFirst, numLast));*/



































