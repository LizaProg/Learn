/* Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл. */

var arr = ['ало', 'гараж', 'тропический', 'остров'];

function elemArr(array) {
    if (array.length == 0) {
        return
    }
    console.log(array[0]);

    array.splice(0, 1);
    elemArr(array);
}
elemArr(arr);

/*Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).*/

function summDigit(num) {

    var res = 0;
    var strNum = num.toString();
    var arrNum = strNum.split('');

    if (num <= 9) {
        return num
    }
    for (var i = 0; i < arrNum.length; i++) {
        var digit = parseInt(arrNum[i]);
        res = res + digit;
    }
    
    return summDigit(res);
}
console.log(summDigit(999));