/*
const smallestDivisor = (num) => {
    var res;
    const previous = num - 1;
    if (num % 2 === 0){
        res = 2;
        return res;
    }else if(num % previous === 0){
        res = previous;
        return res;
    }else{
        return num  + " это простое число"
    }
}

console.log(smallestDivisor(7));*/

/*const smallestDivisor = (acc) => {

    if (num === 1) {
        return 1;
    }
    else if (acc > num / 2) {
        return num;
    }
    else if (num % acc === 0) {
        return acc;
    }
    return smallestDivisor(acc + 1);
};

console.log(smallestDivisor(2));*/


/*
const smallestDivisor = (num) => {
    const process = (num, divisor) => {
        if (num === 1) {
            return 1;
        } else if (num === 0) {
            return 0;
        } else {
            if (num % divisor === 0) {
                return divisor;
            } else {
                if (divisor === num)
                    return num;
                return process(num, ++divisor);
            }
        }
    };
    return process(num, 2);
};
console.log(smallestDivisor(17));*/


/*10*/
/*const smallestDivisor = (num) => {
    let counter = 2;

    if(num === 1){
        return 1;
    }

    if (num < counter) {
        return NaN;
    }

    while (counter <= num) {
        if (num % counter === 0) {
            return counter;
        } else {
            counter++;
        }
    }
};
console.log(smallestDivisor(1));*/

/*
TEACHER
// BEGIN
const smallestDivisor = (num) => {
    if (num < 1) {
        return NaN;
    }
    if (num === 1) {
        return num;
    }

    let divisor = 2;

    while (num % divisor !== 0) {
        divisor = divisor + 1;
    }

    return divisor;
};
// END
*/

/*11*/
//индексы начинаются с 0, но длина — это реальная длина.
// Так что индекс последнего символа не совпадает с длиной строки.
/*const reverse = (str) => {
    let result = [];
    let length = str.length;

    while (length--) {
        result.push(str[length])
    }
    return result.join('');
};

console.log(reverse('hello'));*/

const reverse = (str) => {
    let i = str.length - 1;
    let result = '';

    while (i >= 0) {
        result = result + str[i];
        i = i - 1;
    }

    return result;
};

//console.log(reverse('hi'));


/*12*/

//Напишите функцию isPrime.
// Она принимает число и возвращает true, если число является простым, и false в ином случае.

const isPrime = (num) => {
    if ((num % 2 === 0) && (num !== 2)) {
        return false
    }
    else if (num === 2) {
        return true
    }
    else if (num === 1) {
        return false
    }
    for (let i = 3; i <= num; i += 2) {
        if (num % i !== 0) {
            return true
        } else {
            return false
        }
    }
};

//console.log(isPrime(1));


/*13*/
const factorial = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
};

//console.log(factorial(0));

/*15*/
/*
Реализуйте функцию square, которая возвращает квадрат числа.
    Реализуйте функцию sumOfSquares, которая возвращает сумму квадратов двух чисел.
    Реализуйте функцию squareSumOfSquares, которая возвращает квадрат суммы квадратов двух чисел.
    Примеры работы функций:

    square(5); // 25
square(10); // 100
sumOfSquares(5, 10); // 125
sumOfSquares(10, -9); // 181
squareSumOfSquares(1, 1); // 4
squareSumOfSquares(2, 3); // 169
Обратите внимание на то, что самостоятельно вызывать их не надо. Это делает проверяющая система в файле __tests__/squares.tests.js

Подсказки
Функция square может быть использована внутри sumOfSquares
Функция sumOfSquares может быть использована внутри squareSumOfSquares
*/


const square = (num) => {
    return num * num;
};

//console.log(square(5));
//console.log(square(10));

const sumOfSquares = (a, b) => {
    return square(a) + square(b)
};

//console.log(sumOfSquares(5, 10));
//console.log(sumOfSquares(10, -9));

const squareSumOfSquares = (c, d) => {
    let res = sumOfSquares(c, d);
    return res * res;
};

//console.log(squareSumOfSquares(1, 1));
//console.log(squareSumOfSquares(2, 3));


/*16*/
const bigLettersCount = (str) => {
    // BEGIN (write your solution here)
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase() || str[i] === ' ') {
            count += 1;
        }
    }

    return count;
    // END
};

const compare = (first, second) => {
    const firstCount = bigLettersCount(first);
    const secondCount = bigLettersCount(second);

    // BEGIN (write your solution here)
    if (firstCount > secondCount) {
        return 1;
    } else if (firstCount < secondCount) {
        return -1;
    } else {
        return 0;
    }
    // END
};

/*console.log(compare('Google ', 'Rambler'));
console.log(compare('Google', 'Rambler '));
console.log(compare('Google', 'Rambler'));*/


/*17*/

const addDigits = (num) => {
    let strNum = num.toString();
    let sp = strNum.split('');
    let res = 0;
    for (let i = 0; i < sp.length; i++) {
        let toNum = parseInt(sp[i]);
        res += toNum;
    }
    return res;
};


/*
console.log(addDigits(148));*/

//18

const upperFirstLetter = (str) => {
    return str[0].toUpperCase() + str.substr(1);
};

const upperEveryWord = (str) => {
    let strSplit = str.split(' ');
    for (let i = 0; i < strSplit.length; i++) {
        strSplit[i] = upperFirstLetter(strSplit[i])
    }
    return strSplit.join(' ');
};

//console.log(upperEveryWord('ghbd dkj slejl '));

//console.log(upperFirstLetter('k.ms slkmx'));
//console.log(upperEveryWord('cd k,dsc lkdjck dsmc'));
