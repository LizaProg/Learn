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

let a = "Hello";
let b = " JOPA";
let c = 56 ** 2;

let d = `${a}${b}${c}`;

console.log(d);

console.log(reverse('abc'));

