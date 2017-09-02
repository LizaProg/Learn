//Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное.

var arr = [1, 2, 3, -1, -2, -3];
function isPositive(num) {
    if (num>=0){
        return true
    }else {
        return false
    }
}

var newArr = [];
for(var i = 0; i <= arr.length; i++){
    if(isPositive(arr[i])){
        //push Добавляет элемент в конец массива
        newArr.push(arr[i]);
    }
}
console.log(newArr);

//Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

function squr(num) {
    return num*num
}
console.log(squr(2));

//Сделайте функцию, которая возвращает сумму двух чисел.
function plus(numFirst, numLast) {
    return numFirst + numLast
}
console.log(plus(5, 2));

//Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
function plusDevision(num1, num2, num3) {
    return (num1 - num2) / num3
}
console.log(plusDevision(10, 5, 2));

//Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

function howDay(day) {
    var week = ['пн','вт','ср','чт','пт','сб','вс'];
    return week[day-1];
}
console.log(howDay(7));




















