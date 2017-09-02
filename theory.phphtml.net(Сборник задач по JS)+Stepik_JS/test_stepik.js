/*Рекурсия*/
/*function my_function(n, arr) {
 if (arr == undefined) {
 arr = [];
 }
 if (n == 0) {
 return arr.reverse().join('.');
 }

 arr.push(n);
 return my_function(n - 1, arr);
 }

 console.log(my_function(2));*/



/*Object*/
/*var person = {};                                  //Объявляем объект person
 person.sayAge = function(n) {                    //Объявляем метод sayAge для объекта person
 console.log("Person is " + n + " years old");  //Тело метода sayAge - вывод текста
 };
 person.sayAge(22);*/

/*this*/
/*
 var person = {
 name : "Ivan",
 age : 25,
 hiredYear : 2017
 };
 person.sayName = function() {
 console.log("My name is " + this.name);
 };
 person.sayName();*/

/*for .. in*/
/*var person = {
 name: "Ivan",
 age: 25,
 hiredYear: 2017
 };
 person.sayAll = function () {
 for (var i in this) {
 console.log(i + " is " + this[i]);
 }
 };
 person.sayAll();*/


/*
 Если присвоить значению какого-либо свойства код, то мы получим функцию - нет, мы получим метод

 Выражение delete myObject.myProperty; полностью удалит объект myObject  - нет, удалит свойство

 Ключевое слово this используется для доступа к объекту, из которого оно вызывается - верно

 Для создания объекта используются конструкторы и деструкторы - нет, только конструкторы

 Для объявления объекта можно воспользоваться выражением var person : Object();  - нет, двоеточие нельзя использовать

 Функция function Person(name, age, year) { this.name = name;} создаст конструктор для объекта person - верно */


/*В этом задании в нашу функцию testStr передаются две строки. Вам нужно вернуть из функции их суммарную длину.*/
/*function testStr(a, b) {
 var lenghtA = a.length;
 var lenghtB = b.length;
 var res = lenghtA + lenghtB;
 return res;
 }
 console.log(testStr('5794675', '181683'));*/

/*function testStr(a, b) {
 var strA = String(a);
 var strB = String(b);
 var lenghtA = strA.length;
 var lenghtB = strB.length;
 var res = Number(lenghtA + lenghtB);
 return res;
 }
 console.log(testStr(5794675, 181683));*/


/*В этом задании в нашу функцию testStr первым параметром передается строка (переменная str), а вторым - число (переменная n) . Вам нужно вернуть из функции символ строки , порядковый номер которого указан в переданном в функцию числе.*/
/*function testStr(str, n) {
 var string = String(str);
 var res = string.charAt(n - 1);
 return res;
 }
 console.log(testStr('Ithardlycousinmealways', 19));*/

/*В этом задании в нашу функцию testStr передаются две строки. Вам нужно вернуть из функции строку, которая будет включать в себя обе этих строки, преобразовав в первой строке все буквы в заглавные, а во второй - в строчные.*/

/*function testStr(a, b) {
 var aUpper = a.toUpperCase();
 var bLower = b.toLowerCase();
 var res = aUpper.concat(bLower);
 return res;
 }
 console.log(testStr('Hello', 'World!'));*/



/*function testStr(a, b) {
 return a.indexOf(b, 0);
 }
 console.log(testStr('This is a test string', 'test'));*/


/*В этом задании в нашу функцию testArray передаются два массива случайной длины заполненные случайными числами. Вам нужно сосчитать сумму всех элементов обоих массивов и возвратить ее из функции.*/
/*function testArray(a, b) {
 var union = a.concat(b);
 var res = 0;
 for(var i = 0; i < union.length; i++){
 res += Number(union[i]);
 }
 return res;
 }
 console.log(testArray([8, 1, 1, 7, 4, 0], [5, 8, 5, 4, 8]));*/


/*
 1. В этом задании в нашу функцию testArray передаются две строки случайной длины и содержания.
 Вам нужно
 2. составить из символов этих строк один массив (каждый символ строки становится отдельным элементом массива),

 3.затем добавить первым элементом  массива текстовое значение "Иванов", и

 4. вернуть из функции все элементы в обратном порядке,
 5. преобразовав в строку.

 Обратите внимание, что в обратном порядке нужно переставить элементы внутри массива, а данные внутри элементов инвертировать не нужно!*/

/*function testArray(a, b) {
 var arrA = a.split('');
 var arrB = b.split('');
 var unionArr = arrA.concat(arrB);
 unionArr.unshift('Иванов');
 var revArr = unionArr.reverse();

 return revArr.join('');
 }
 console.log(testArray('4326', '297515'));*/


/*В этом задании в нашу функцию testDateTime

 1.передаются две строки вида "03 November 2017 04:17".
 Вам нужно
 2.превратить строки в даты,
 3.сравнить их.
 4.Для той, что больше
 5.получить день недели и
 6.вернуть его из функции.

 7.Название дня недели должно быть по-русски, с большой буквы, например: "Понедельник".*/

/*function testDateTime(a, b) {
 var dateA = new Date();
 dateA.setTime(Date.parse(a));
 var dateB = new Date();
 dateB.setTime(Date.parse(b));

 if(dateA > dateB){
 var dayA = dateA.getDay();
 return showDay(dayA);
 }else {
 var dayB = dateB.getDay();
 return showDay(dayB);
 }

 function showDay(day) {
 var week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
 return week[day];

 }
 }
 console.log(testDateTime('15 January 1909 11:56', '01 July 1909 07:56'));*/



/*В этом задании в нашу функцию передается угол в градусах. Вам нужно вернуть из функции значение его синуса. Не забывайте, что тригонометрические функции в JavaScript принимают аргументы только в радианах!*/


/*function testMath(a) {
 var radian = a * Math.PI / 180;
 return Math.sin(radian);
 }
 console.log(testMath(348));*/

/*А тут вам нужно вычислить и вернуть из функции площадь треугольника. Передаваемые в функцию аргументы "a" и "b" - это длины сторон, а "c" - это угол между ними в градусах.*/

/*function testMath(a, b, c) {
 var sinSq = Math.sin(c * Math.PI / 180);
 return 1/2*(a*b*sinSq);
 }
 console.log(testMath(2, 10, 16));*/

/*В этом задании в нашу процедуру передаются 4 числа. Вам необходимо
 1.вычислить результат деления большего из этих чисел на меньшее, и
 2.округлив до ближайшего меньшего целого вернуть из функции.*/

/*function testMath(a, b, c, d) {
 var minNum = Math.min(a, b, c, d);
 var maxNum = Math.max(a, b, c, d);

 return Math.floor(maxNum/minNum);
 }
 console.log(testMath(1, 4, 8, 8));*/


/*function testErrorFunc(a, func) {
 var x;
 try {
 x = func(a);
 } catch (e) {
 x = e.name;
 }
 return x;
 }

 function func2(a) {
 if (a > 0) {
 throw new Error('Message')
 }
 return 10 / a;
 }
 console.log(testErrorFunc(-1, func2));*/



/*regExp*/

/*Некоторые классы из наборов символов настолько часто используются, что для них определили специальные обозначения:
 [...] - любой из символов, указанных в скобках
 [^...] - любой кроме символов, указанных в скобках
 . (точка) - любой символ кроме перевода строки или другого разделителя строки
 \w - эквивалентно [a-zA-Z0-9_] (Любой текстовый символ ASCII)
 \W - эквивалентно [^a-zA-Z0-9_] (Любой символ кроме текстовых символов ASCII)
 \s - любой пробельный символ из Unicode
 \S - любой НЕпробельный символ из Unicode
 \d - эквивалентно [0-9] (любые цифры ASCII)
 \D - эквивалентно [^0-9] (все символы кроме цифр ASCII)
 [\b] - обозначение символа "забой"

 для сколь угодно многократных повторений. Это называют "квантификацией".
 {n} - обозначает ровно n экземпляров шаблона
 {n,} - обозначает n или больше экземпляров шаблона
 {n,m} -  обозначает не менее n и не более m экземпляров шаблона
 ? -  обозначает ноль или один экземпляр шаблона (эквивалентно выражению {0,1} )
 + -  обозначает 1 или более экземпляров шаблона (эквивалентно выражению {1,} )
 * -  обозначает ноль или более экземпляров шаблона (эквивалентно выражению {0,} )


 указание границы соответствия. Для этого используются якорные выражения.
 ^ - соответствует началу строки при многострочном поиске или началу строкового выражения
 $ - соответствует концу строки при многострочном поиске или концу строкового выражения
 \b - соответствует границе слова, т.е. позиции между текстовым (aA-zZ) и не-текстовым символом, либо между текстовым         символом и началом или концом строки.
 \B - Соответствует позиции, не являющейся границей слов.
 (?=p) - Позитивная опережающая проверка на последующие символы - убеждается в том, что последующие символы соответствуют шаблону "р" но не включает их в результат поиска.
 (?!p) - Негативная опережающая проверка на последующие символы - требует чтобы последующие символы НЕ соответствовали шаблону "р".


 JavaScript поддерживает три варианта флагов:
 i - указывает на то, что поиск по шаблону должен быть не чувствительным к регистру
 g - указывает что поиск должен быть глобальным, т.е. должны быть найдены ВСЕ соответствия в строке
 m - указывает на то, что поиск должен производиться в многострочном режиме.*/


/*function pirate() {
 var pirateName = 'noname';
 var obj = {
 name: 'Piter',
 age: 23,
 sayHello: function () {
 return 'Hello! My name is ' + this.name;
 }
 };
 return obj;
 }
 var num = pirate();

 console.log(num.sayHello());*/




/*
function pirate() {
    var pirateName = 'noname';
    return {
        getName: function () {
            return pirateName;
        },
        setName: function (name) {
            pirateName = name;
        }
    }
}
var newPirate = pirate();
console.log(newPirate.getName());
newPirate.setName('John');
console.log(newPirate.getName());
newPirate.setName('Lol');
console.log(newPirate.getName());

function love(name) {
    return 'I love you ' + name;
}

newPirate.setName(love);
console.log(newPirate.getName()("UU"));
*/


function human(name, age) {
    var humanName = name;
    var humanAge = age;
    return{
        getName: function () {
            return humanName;
        },
        setName: function (newName) {
            humanName = newName;
        },
        getAge: function () {
            return humanAge;
        },
        setAge: function (newAge) {
            humanAge = newAge;
        },
        info: function () {
            var info = {
                name: humanName,
                age: humanAge
            };
            return info;
        }
    }
}
var human_1 = human();
console.log('This is first human:');
human_1.setName('Petr');
console.log(human_1.getName());
human_1.setAge(56);
console.log(human_1.getAge());
console.log('End');

var human_2 = human();
console.log('This is second human:');
human_2.setName('Alex');
console.log(human_2.getName());
human_2.setAge(22);
console.log(human_2.getAge());
console.log('End');

var human_3 = human('Lisa', 23);
console.log('This is third human:');
console.log(human_3.getName());
console.log(human_3.getAge());
console.log('End');

console.log(human_1.info());


