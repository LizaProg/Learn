//доп задание 2
/*const reverseInt = (num) => {
    let str = String(num);
    let arr = str.split('');
    let res = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        /!*if (arr[0] !== '-') {
            res += arr[i];
        } else {
           res[0] === '0';
        }*!/
        res += arr[i];
        if (res.length - 1 === '-') {
            /!*  с позиции последнего эл-та
                удалить один элемент
                вставить -*!/
            res.splice(-1, 1, '-');
        }
    }
    return res;
};

console.log(reverseInt(-126));*/

//true решение task 2
/*const reverseInt = (num) => {
    let res = '';
    if (String(num)[0] === '-') {
        res += '-';
    }

    for (let i = String(num).length - 1; i >= 0; i--) {
        if (String(num)[i] !== '-') {
            res += String(num)[i];
        } else {
            break
        }
    }

    return res
};*/

//console.log(reverseInt(-102083));

//Сумма квадратов

/*const sumSquareDifference = (n) => {
    return squareSum(n) - sumSquare(n);
};

const sumSquare = (n) => {
    let res = 0;
    for (let i = 1; i <= n; i++) {
        res += Math.pow(i, 2);
    }
    return res;
};

const squareSum = (n) => {
    let res = 0;
    for (let i = 1; i <= n; i++) {
        res += i;
    }
    res = Math.pow(res, 2);
    return res;
};*/

//console.log(sumSquareDifference(10));


//Преобразование DNA в RNA

/*const dnaToRna = (str) => {
    let rnaRes = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'G') {
            rnaRes += 'C';
        }
        else if (str[i] === 'C') {
            rnaRes += 'G';
        }
        else if (str[i] === 'T') {
            rnaRes += 'A';
        }
        else if (str[i] === 'A') {
            rnaRes += 'U';
        } else {
            return null;
        }
    }
    return rnaRes;
};*/

//console.log(dnaToRna('ACGTGGTCTTAA'));

//Совершенное число
/*const isPerfect = (num) => {
    if (num === 0) {
        return false;
    }
    let res = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            res += i;
        }
    }
    return res === num;
};*/
/*console.log(isPerfect(0));
console.log(isPerfect(10));
console.log(isPerfect(44));
console.log(isPerfect(6));
console.log(isPerfect(28));
console.log(isPerfect(496));
console.log(isPerfect(8128));*/


//Счастливый билет


/*const isHappyTicket = (num) => {
    if (typeof num === "number") {
        num = String(num);
    }

    let threeNumFirst = num.substr(0, 3);
    let threeNumSecond = num.substr(3, 6);

    let resOne = 0;
    let resTwo = 0;

    for (let i = 0; i < threeNumFirst.length; i++) {
        resOne += parseInt(threeNumFirst[i]);
    }

    for (let i = 0; i < threeNumSecond.length; i++) {
        resTwo += parseInt(threeNumSecond[i]);
    }
    return resOne === resTwo;
};*/
/*console.log(isHappyTicket(385916));
console.log(isHappyTicket('054702'));*/

//Счастливый билет (решение подсмотрено у учителя)
/*const basic = (num) => {
    let number = String(num);
    let threeNumFirst = number.substr(0, 3);
    let threeNumSecond = number.substr(3, 6);

    return calc(threeNumFirst) === calc(threeNumSecond);
};

const calc = (num) => {
    let res = 0;
    for (let i = 0; i < num.length; i++) {
        res += parseInt(num[i]);
    }
    return res;
};*/

/*
console.log(basic(385916));
console.log(basic('054702'));*/


//Найди Fizz и Buzz

/*const fizzBuzz = (start, finish) => {
    // if (start > finish || start === finish) {
    //     console.log('');
    // }
    for (let i = start; i <= finish; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzAndBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
};*/

//fizzBuzz(35, 25);

/*
1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz,
    11, fizz, 13, 14, fizzAndBuzz, 16, 17, fizz, 19, buzz,
    fizz, 22, 23, fizz, buzz, 26, fizz, 28, 29, fizzAndBuzz,
    31, 32, fizz, 34, buzz, fizz, 37, 38, fizz, buzz,
    41, fizz, 43, 44, fizzAndBuzz, 46, 47, fizz, 49, buzz,
    fizz, 52, 53, fizz, buzz, 56, fizz, 58, 59, fizzAndBuzz,
    61, 62, fizz, 64, buzz, fizz, 67, 68, fizz, buzz,
    71, fizz, 73, 74, fizzAndBuzz, 76, 77, fizz, 79, buzz,
    fizz, 82, 83, fizz, buzz, 86, fizz, 88, 89, fizzAndBuzz,
    91, 92, fizz, 94, buzz, fizz, 97, 98, fizz, buzz,*/

//противоположный регистр

// const invertCase = (str) => {
//     let strSplit = str.split(' ');
//     let res = '';
//     for (let i = 0; i < strSplit.length; i++) {
//         let r = strSplit[i];
//         for (let j = 0; j < r.length; j++) {
//             if (r[j] === r[j].toUpperCase()) {
//                 res += r[j].toLowerCase();
//             } else {
//                 res += r[j].toUpperCase();
//             }
//         }
//         res += ' ';
//     }
//     return res.slice(0, -1);
// };
//
// console.log(invertCase('I loVe JS'));

/*const invertCase = (str) => {
    let result = '';
    for (let i = 0; i < length(str); i += 1) {
        const upper = str[i] === toUpperCase(str[i]);
        result += upper ? toLowerCase(str[i]) : toUpperCase(str[i]);
    }

    return result;
};*/


//степень тройки
/*const isPowerOfThree = (num) => {
    let res = num / 3;
    if (res === 3 || num === 1) {
        return true;
    }
    if (num === 0) {
        return false;
    }
    //проверка на целое число
    if (parseInt(res) !== res) {
        return false;
    }

    return isPowerOfThree(res);
};*/


//учитель
/*const isPowerOfThree = (num) => {
    let current = 1;
    while (current <= num) {
        if (current === num) {
            return true;
        }
        current *= 3;
    }

    return false;
};

export default isPowerOfThree;*/

//перевернуть строку
/*const reverse = (str) => {
    let res = '';
    res += str.substr(-1);
    str = str.slice(0, -1);
    reverse(str);
    return res;

};
console.log(reverse('hi'));*/

/*const reverse = (str) => {
    const len = str.length;
    if (len === 0) {
        return str;
    }
    /!*console.log(str);*!/
    return str[len - 1] + reverse(str.substr(0, len - 1));
};


console.log(reverse('hello'));*/

//форматированное время
/*const formattedTime = (num) => {
    let time = new Date;
    time.setHours(0, 0, 0, 0);

};*/
//console.log(formattedTime(5));


//счастливые числа
/*const sumOfSquareDigits = (num) => {
    const numAsStr = String(num);
    let sum = 0;
    for (let i = 0; i < numAsStr.length; i += 1) {
        const digit = Number(numAsStr[i]);
        sum += digit * digit;
    }

    return sum;
};

const isHappyNumber = (num) => {
    let strNum = num.toString();
    let partOfNum = strNum.split('');
    let res = 0;
    for (let i = 0; i < partOfNum.length; i++) {
        res += sumOfSquareDigits(partOfNum[i]);
    }
    if (res >= 10) {
        return isHappyNumber(res);
    }

    if(res === 1){
        return true
    }else {
        return false
    }
};*/
//учитель
export default (num) => {
    let number = num;
    for (let i = 0; i < 10; i += 1) {
        number = sumOfSquareDigits(number);
        if (number === 1) {
            return true;
        }
    }
    return false;
};