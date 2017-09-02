/*глобальные и локальные переменные.
 Первые видны во всем скрипте, а вторые - только ограниченной области.*/

/*function func() {
    var local = 'Тест!';
    console.log(local); //выведет 'Тест!'
}
func();
console.log(local); //ReferenceError: local is not defined
//local переменная внутри функции не видна снаружи(локальная)*/

/*переменная test, которая находится вне функции, это не та переменная test, которая находится внутри нее*/
var test = 'Тест!';
function func1() {
    var test = 'Локальная!';
    console.log(test); //выведет 'Локальная!'
}
func1();

/*если внутри функции переменная не объявлена через var - она будет считаться глобальной:*/
var testT = 'Тест!';
function func2() {
    console.log(testT); //выведет 'Тест!'
}
func2();

/*если НЕ написать var внутри функции то глобальная переменная исчезнет*/
var global = 'Тест!';
function func3() {
    global = 'Поменялась!';
}
func3();
console.log(global); //выведет 'Поменялась!'

/*Если написать var - переменная будет локальной внутри функции:*/
var glob = 'Тест1!';
function func4() {
    var glob = 'Поменялась!';
}
func4();

console.log(glob); //выведет 'Тест!'

/*НЕ написали var перед переменной и она видна снаружи:*/
function func5() {
    local = 'Тест2!';
    console.log(local); //выведет 'Тест2!'
}
func5();
console.log(local); //выведет 'Тест2!'







//СТРОГИЙ РЕЖИМ!!!

/*если не поставить var можно случайно затереть глобальную переменную
* рекомендуется включать строгий режим командой 'use strict';, которая пишется в начале скрипта.
* */

//забыли поставить var и затерли глобальную переменную teST:
var teST = 'Привет!';
function func() {
    teST = 'Тест!';
}
func();
console.log(teST); //выведет 'Тест!', а не 'Привет!'

/*
// если включить строгий режим

'use strict';
var TEst = 'Привет!';
function func() {
    TEst = 'Тест!'; //будет ошибка, нет var
}
func();

console.log(TEst);*/
