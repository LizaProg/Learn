/*Конструкция switch заменяет собой сразу несколько if.
 Переменная x проверяется на строгое равенство первому значению,
 затем второму и так далее.
 Если соответствие установлено – switch начинает выполняться от соответствующей директивы
 до ближайшего break (или до конца switch).*/
var x = 2;
switch (x) {
    case 0:
        console.log("zero");
        break;
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    case 4:
        console.log("four");
        break;
    default:
        console.log("..."); //Если ни один case не совпал – выполняется default.
}

//задачка
//num - любое число ворон, выводить количество ворон - "на ветке сидит ... ворон"

var num = 13;
var str = "На ветке сидит " + num + " ворон";
var x = "";
/*
 1 -> a
 2, 3, 4, -> ы
 11 - 14 исключение
 */
if (num % 100 < 11 || num % 100 > 14) {
    switch (num % 10) {
        case 1:
            x = "a";
            break;
        case 2:
        case 3:
        case 4:
            x = "ы";
    }
}
console.log(str + x);