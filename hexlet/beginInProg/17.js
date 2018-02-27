const sumPartNum = (num) => {
    let numPart = num.toString().split('');
    let res = 0;
    for (let i = 0; i < numPart.length; i++) {
        res += Number(numPart[i]);
    }
    if (res >= 10) {
        return sumPartNum(res)
    } else {
        return res;
    }
};

/*
teacher
const sum = (str) => {
  let result = 0;
  for (let i = 0; i < length(str); i += 1) {
    result += Number(str[i]);
  }

  return result;
};

const addDigits = (num) => {
  let result = num;
  while (result >= 10) {
    result = sum(String(result));
  }

  return result;
};

export default addDigits;*/


//18

/*const upperFirstLetter = (str) => {
    return str[0].toUpperCase() + str.substr(1);
};

const upperEveryWord = (str) => {
    let strSplit = str.split(' ');
    let res = '';
    for (let i = 0; i < strSplit.length; i++) {
        res += upperFirstLetter(strSplit[i]) + ' ';
    }
    return res.slice(0, -1);
};

console.log(upperEveryWord('jmsdj jshdch sdkn'));*/

/*const upperEveryWord = (str) => {
    let strSplit = str.split(' ');
    let res = '';
    for (let i = 0; i < strSplit.length; i++) {
        let c = strSplit[i];
        res += c[0].toUpperCase() + c.substr(1) + ' ';
    }
    return res.slice(0, -1);
};

console.log(upperEveryWord('hello, world!'));
console.log(upperEveryWord('  hello,   world!'));
console.log(upperEveryWord(' many different words inside sentence'));*/


/*const upperEveryWord = (str) => {
    //w - слово
    //S - не пробел
    //!* - 0 или больше
    //Метод replace() возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном, заменёнными на заменитель.
    return str.replace(/\w\S*!/g, function (txt) {
        return txt[0].toUpperCase() + txt.substr(1)
    });
};

console.log(upperEveryWord('hello, world!'));
console.log(upperEveryWord('  hello,   world!'));
console.log(upperEveryWord(' many different words inside sentence'));*/

/*const upperEveryWord = (str) => {
    function upper(word) {
        return word[0].toUpperCase() + word.substr(1);
    }
    return str.replace(/\w\S*!/g, upper);
};

console.log(upperEveryWord('hello, world!'));
console.log(upperEveryWord('  hello,   world!'));
console.log(upperEveryWord(' many different words inside sentence'));*/


//teacher
/*export default (str) => {
    let result = '';
    for (let i = 0; i < length(str); i += 1) {
        const shouldBeBig = str[i] !== ' ' && (i === 0 || str[i - 1] === ' ');
        result += shouldBeBig ? toUpperCase(str[i]) : str[i];
    }

    return result;
};*/















