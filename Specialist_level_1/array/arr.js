var user = ["a", "b", "c"];
user[5] = "x";
for (var i = 0; i < user.length; i++){
    console.log(i + ": " + user[i]);
}

console.log();

var us = ["a", "b", "c"];
us[5] = "x";
for (var y in us){
    console.log(y + ": " + us[y]);
}

console.log();

// получить стpоку из массива
var a = [1,5,7];
var s = a.toString();
console.log(s);
var d = a.join(); //то же что и toString только можно поставить разделитель свой
console.log(d);
var q = a.join(';)');
console.log(q);

//сложение массивов
var c = [1, 5];
var f = [11, 8];
var arr = c.concat(3, f);
console.log(arr);
var g = [1, 5] + [11, 8];
console.log(g);

// получение части массива(метод slice)
var p = [1, 5, 7, 12, 9];
var arr1 = p.slice(2); //[7,12,9]
console.log(arr1);
var arr2 = p.slice(1,3); //[5,7]
console.log(arr2);
var arr3 = p.slice(-3, -1); //[7, 12]
console.log(arr3);
var arr4 = p.slice(2, 1); //[]
console.log(arr4);

console.log("____________");

//сортировка массива
var o = [14, 51, 7, 2];
console.log(o.reverse()) ;//[2,7,51,14]

var j = [14, 51, 7, 2];
console.log(j.sort());//[14,2,51,7]

function mySort(o, j) {return o-j;}
console.log(o.sort(mySort)); //[2,7,14,51]

console.log("____________");

//работа с КОНЦОМ массива, ИЗВЛЕЧЕНИЕ элемента
var l = [5, 'abc', 73];
var w = l.pop();
console.log(w);//[5, 'abc' ] w = 73

//Работа с КОНЦОМ массива, ДОБАВЛЕНИЕ элемента
var h = l.push(12, 3);
console.log(h);//[5, 'abc', 12, 3] v = 4 (возвращается новая длинна массива)
console.log("____________");

//Работа с НАЧАЛОМ массива, ИЗВЛЕЧЕНИЕ элемента
var m = [5, 'abc', 73];
var n = m.shift(); //['abc', 73] n = 5
console.log(n);

//Работа с НАЧАЛОМ массива, ДОБАВЛЕНИЕ элемента
var r = [5, 'abc', 73];
var r1 = r.unshift(12, 3); //[12, 3, 5, 'abc', 73] r1 = 5
console.log(r1);
console.log("____________");

//вставка и удаление в любом месте
var au = [5, 'abc', 73, 12, 8];
var aru = au.splice(1, 2);
console.log(aru); //вырезаем с первой позиции, два элемента

var al = [5, 'abc', 73, 12, 8];
var aur = al.splice(1, 0, 3);
console.log(aur); //перед первой позицией ничего не вырезать, вставить 3
//не возвращается ничего потому что ничего не вырезаем
console.log(al);
