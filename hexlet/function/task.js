//isPalindrom OK

/*const isPalindrome = (str) => {
    if (str.length === 1) {
        return true;
    }
    if (str.length === 0) {
        return true;
    }
    let firstSymbol = str[0];
    let lastSymbol = str.slice(-1);
    if (firstSymbol === lastSymbol) {
        let partOfStringNotDiscover = str.substr(1, str.length - 2);
        return isPalindrome(partOfStringNotDiscover);
    } else {
        return false;
    }
};*/


//substr ОК
const substr = (str, start = 0, size = str.length) => {
    if (size === 0) {
        return '';
    }
    if (start >= str.length) {
        return '';
    }
    if (start < 0) {
        start = 0;
    }
    if (size < 0) {
        size = 1;
    }
    if (start + size >= str.length) {
        size = str.length - start;
    }
    let resultString = '';
    for (let i = start; i < start + size; i++) {
        resultString += str[i];
    }
    return resultString;
};
// console.log(substr('abba', 0, 1));   // => a
// console.log(substr('abba', 1, 2));   // => bb
// console.log(substr('abba', -10, 2));  // => ab
// console.log(substr('abba', -1, 100)); // => abba
// console.log(substr('abba', -1, -1));  // => a
// console.log(substr('abba', 1, -10));  // => b
// console.log(substr('abba', 1, 0));   // => ''
// console.log(substr('abba', 100, 3));   // => ''

// export default (str, index = 0, substrLength = getLength(str)) => {
//     if (substrLength === 0) { // guard expression
//         return '';
//     }
//
//     const length = getLength(str);
//     if (index >= length) { // guard expression
//         return '';
//     }
//
//     let currentIndex = index < 0 ? 0 : index;
//     let lastIndex;
//     if (substrLength < 1) {
//         lastIndex = currentIndex;
//     } else if (substrLength > length) {
//         lastIndex = length - 1;
//     } else {
//         lastIndex = currentIndex + (substrLength - 1);
//     }
//
//     let result = '';
//     for (; currentIndex <= lastIndex; currentIndex += 1) {
//         result = `${result}${str[currentIndex]}`;
//     }
//
//     return result;
// };


// apply ОК
const apply = (size, func, num) => {
    let res = num;
    for (let i = 0; i < size; i++) {
        res = func(res);
    }
    return res;
};

/*
const f1 = (v) => v ** 2;
console.log(apply(0, Math.sqrt, 4));
console.log(apply(1, a => a * 5, 10));
console.log(apply(3, a => a * 2, 2));
*/

//учитель
/*const apply = (count, fn, value) =>
    (count === 0 ? value : apply(count - 1, fn, fn(value)));*/


//лексическое Окружение LexicalEnvironment
/*const reverse = (str) => {
    const iter = (indexStr, res) => {
        if (str[indexStr] === undefined) {
            return res;
        }
        return iter(indexStr - 1, res + str[indexStr]);
    };

    return iter(str.length - 1, '');
};

console.log(reverse('lojka'));*/

const reverse = (str) => {
    const iter = (index, acc) => {
        if (str[index] === undefined) {
            return acc;
        }
        return iter(index + 1, str[index] + acc);
    };

    return iter(0, '');
};

// const reverse2 = (str) => {
//     // BEGIN (write your solution here)
//     const iter = (index, acc) => {
//         if (str[index] === undefined) {
//             return acc;
//         }
//         return iter(index + 1, `${str[index]}${acc}`);
//     };
//     // END
//
//     return iter(0, '');
// };


//частичное применение

/*const partialApply = (func, arg1) => {
    return function (x) {
        return func(arg1, x);
    }
};

let f1 = partialApply(pow, 2);
console.log(f1(4));*/

// let fu = partialApply(pow, 2);
// console.log(fu(2));

//teacher
//export default (f, a) => b => f(a, b);


//FLIP
/*У нас есть функция flip в которую будем передавать какую-то функцию,
функция flip возвращает нам другую функцию
в которую мы передаем аргументы
и возвращаем аргументы функции в обратном порядке*/
const sub = (a, b) => a - b;

const flip = (func) => {
    return (a, b) => {
        return func(b, a)
    }
};

const reverseSub = flip(sub);
/*console.log(sub(6, 5));
console.log(reverseSub(6, 5));*/

//teacher
//export default f => (a, b) => f(b, a);


//каррирование
//п1
const greeting = () => () => () => () => console.log('Hey!');
greeting()()()();
//Суммарное количество функций считается очень легко, оно равно сумме всех стрелок =>

//п2
//const sum = (a, b, c) => a + b + c;

// const sum = (a, b, c) => a + b + c;

const sum21 = a => b => c => a + b + c;
console.log(sum21(5)(10)(-2));

//Тоже самое разложенное по функциям:
const sum22 = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c;
        };
    };
};

// const onePlus2Args = sum22(1);
// const onePlusTwoPlus1Arg = onePlus2Args(2);
// const onePlusTwoPlusThree = onePlusTwoPlus1Arg(3);
//
// console.log(onePlusTwoPlus1Arg);
// console.log(onePlusTwoPlusThree);

console.log(sum22(1)(2)(3));


// //п3
// const sum = a => b => c => a + b + c;
// /*const sum1 = sum(10); // sum1 = b => c => 10 + b + c
// const sum2 = sum1(3); // sum2 = c => 10 + 3 + c
// const result = sum2(0); // result = 10 + 3 + 0
// console.log(result); // 13*/
//
// //Тоже самое происходит и при таком вызове:
// console.log(sum(10)(3)(0) + '!');
// //разница только в том что вызовы происходят без создания промежуточных констант.
//
//
// //
// const getAverageSalary = job => country =>{
//     let workingDays = 0;
//     let rateADay = 0;
//     if (country === 'spain' && job === 'programmer') {
//         workingDays = 245;
//         rateADay = 500;
//         return workingDays * rateADay;
//     }
//     if (country === 'russia' && job === 'programmer') {
//         workingDays = 247;
//         rateADay = 600;
//         return workingDays * rateADay;
//     }
//     if (country === 'usa' && job === 'programmer') {
//         workingDays = 250;
//         rateADay = 700;
//         return workingDays * rateADay;
//     }
// };
//
// //const salary1 = getAverageSalary('programmer')('spain');
// const getProgrammersSalaryByCountry = getAverageSalary('programmer');
//
// const salary1 = getProgrammersSalaryByCountry('spain');
// const salary2 = getProgrammersSalaryByCountry('russia');
// const salary3 = getProgrammersSalaryByCountry('usa');
//
// console.log(salary1);
// console.log(salary2);
// console.log(salary3);
//
//
const sumT = a => b => c => b - a - c;
console.log(sumT(10)(7)(1));
/*
Выберите корректный результат вызова функции.
-4*/


/*
const concatThree = (a, b, c) => `${a} ${b} ${c} nash kurator Dzhigurda!`;

const carryConcatThree = (a) => {
    return (b) => {
        return (c) => {
            return concatThree(a, b, c);
        }
    }
};


console.log(carryConcatThree('1')('2')('3'));
*/


const If = c => c;
const True = a => () => a;
const False = () => b => b;

// const True = (a) => {
//     return function (b) {
//         return a;
//     }
// };

// const False = function (a) {
//     return function (b) {
//         return b;
//     }
// };

// const False = (a) => {
//     return function (b) {
//         return b;
//     }
// };
//
// console.log(True('a')('b'));
// console.log(False('1')('2'));

console.log(If(True)('one')('two'));
console.log(If(False)('one')('two'));

// console.log(If(True, 'one', 'two'));
// console.log(If(False, 'one', 'two'));































