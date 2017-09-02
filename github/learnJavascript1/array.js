//Циклы - простой способ сделать какое-то действие несколько раз.
//for ([начало]; [условие]; [шаг]) выражения
/*1 посчитать сумму чисел в некотором массиве (сделай массив в коде сама, напрмер var digits = [1,2,3,55,12,55,50])*/

var digits = [5, 1, 2];
//sum исходное значение с которого начинаем вычислять
/*var sum = 0;
 //начальное значение 0(инициализация)
 //нужно пройти всю длину массива (условие)
 // обновляем значение счетчика (инкремент увеличчивает на 1)
 for (var i = 0; i < digits.length; i++) {
 sum = sum + digits[i]; //или так: sum +=digits[i]
 }
 console.log(sum);

 /*2вывести чётные числа от 1 до 100*/
//проверяем четное ли число если его раделить на 2 то четное
//используем промежуток от 1 до 100
/*for (var i = 1; i < 100; i++) {
 //% - остаток от деления == 0 то ок
 if (i % 2 == 0) {
 console.log(i);
 }
 }
 /*вывесчти числа которые делятся на 5 от 1 до 100*/
/*for (var i = 1; i <= 100; i++) {
 if ((i % 5) == 0) {
 console.log(i)
 }
 }


 /*посчитать сумму чсел от 1 до 15*/
//объявили счетчик
// var summ = 0;
// //начальное значение 1; граница 15; декремент (шаг +1)
// for (var i = 1; i <= 15; i++) {
//     //каждое новое значение счётчика cкладывается с i.
//     summ += i
// }
// console.log(summ);


/*4. взять числа от 1 до 100 и те числа которые делятся на 3 заменить на foo, те что деляться на 5 заменить на bar, те что делятся на 3 и на 5 заменить на foobar*/
/*for (var i = 1; i <= 100; i++) {
    var symbol = '--';

    if (i % 3 == 0) {
        symbol += 'foo';
    }

    if (i % 5 == 0) {
        symbol += 'bar';
    }

    if (symbol == '') {
        symbol = i;
    }

    console.log(symbol);

    // if (i % 3 == 0 && i % 5 == 0){
    //     console.log('foobar');
    // } else if (i % 3 == 0) {
    //     console.log('foo');
    // } else if (i % 5 == 0) {
    //     console.log('bar');
    // }  else {
    //     console.log(i);
    // }
}*/

/* Найти количество писателей Пушкин */
var writers = ['Pushkin', 'Lermontov', 'Pushkin', 'Dal', 'Pushkin', 'Lermontov'];
var pushkinCount = 0;
var lermontovCount = 0;

for (var i = 0; i < writers.length; i++) {
    if(writers[i] == 'Pushkin' ){
        pushkinCount = pushkinCount + 1;
    }
    if (writers[i] == 'Lermontov'){
        lermontovCount++
    }
}

console.log("Pushkin count = " + pushkinCount);
console.log("lermontov Count = " + lermontovCount);

// -- Посчитать сумму чётных чисел от 1 до 100, при этом каждое 6 - е чётное число в результат не включать
// var odds = [];
// for (var i = 0; i <= 100; i += 2) {
//     odds.push(i);
// }
// var array = [];
// for (var i = 0; i < odds.length; i++) {
//     var j = i + 1;
//     if (j % 6 == 0){
//         continue;
//     } else {
//         array.push(odds[i]);
//     }
// }
//
// var summ = 0;
// for (var i = 0; i<= array.length; i++){
//     summ += array[i];
// }
// console.log(array);



