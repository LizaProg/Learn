var a = [10, "John", true];
console.log(a[1]);

//
var user = ["a", "b", "c"];
user[5] = "x";
for (var i = 0; i<user.length; i++) {
    console.log(i + ": " + user[i]);
}

//
var user = ["a", "b", "c"];
user[5] = "x";
for (var i in user) {
    console.log(i + ": " + user[i]);
}

//получение строки из массива
var a = [1, 5, 7];
var s = a.toString(); //1,5,7
var s = a.join(); //1,5,7
var s = a.join('---'); //1---5---7

//сложение массивов
var a = [1, 5];
var b = [11, 8];
var arr = a.concat(3, b); // [1,5,3,11,8]
var s = [1, 5].toString() + [11, 8].toString(); // 1,511,8
console.log(s);

// получение части массива(метод slice)
var a = [1, 5, 7, 12, 9];
var arr = a.slice(2); //[7,12,9]
var arr = a.slice(1,3); //[5,7]
var arr = a.slice(-3, -1); //[7, 12]
var arr = a.slice(2, 1); //[]

//сортировка массива
var a = [14, 51, 7, 2];
a.reverse(); //[2,7,51,14]

var a = [14, 51, 7, 2];
a.sort(); //[14,2,51,7]
console.log(a);

function mySort(a, b) {return a-b;}
a.sort(mySort); //[2,7,14,51]

//работа с концом массива

var a = [5, 'abc', 73];
var v = a.pop(); //[5, 'abc' ] v = 73

//Добавление элементов
var v = a.push(12, 3); //[5, 'abc', 12, 3] v = 4

//Работа с началом массива, извлечение элемента

var a = [5, 'abc', 73];
var v = a.shift(); //['abc', 73] v = 5

//Работа с началом массива, добавление элемента

var a = [5, 'abc', 73];
var v = a.unshift(12, 3); //[12, 3, 'abc', 73] v = 4



//вставка и удаление

var a = [5, 'abc', 73, 12, 8];
var arr = a.splice(1, 2 ); // arr = ['abc', 73] если 2 значения в splice
var arr = a.splice(1, 0, 3); //arr = [5, 3, 'abc', 73, 12, 8]
