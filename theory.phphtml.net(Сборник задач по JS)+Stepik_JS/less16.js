/*реализуйте функцию inArray, которая будет проверять, есть ли в массиве элемент с таким значением или нет. Первым параметром функция должна принимать значение, а вторым - массив. Если такой элемент есть - функция должна вернуть true, а если нет - false.*/

function inArray(value, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            return true
        } else {
            return false
        }
    }
}
var array = [1, 2, 3, 4, 5];
console.log(inArray(1, array));

/*Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой*/

function stringUsr(str) {
    var result = '';
    var arr = str.split(' ');
    for (var i = 0; i < arr.length; i++) {
        var currentWord = arr[i];
        var upperword = upperWord(currentWord);
        result = result + upperword + ' ';
    }
    function upperWord(word) {
        var upper = word.charAt(0).toUpperCase();
        var wordEnd = word.substring(1);
        return upper + wordEnd;
    }

    return result;
}
//console.log(stringUsr('маша ела сушку'));

/*Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.*/

function task2(str) {
    var result = [];
    var arr = str.split('_');
    result.push(arr[0]);

    for (var i = 1; i < arr.length; i++){
        var word = upperWord(arr[i]);
        result.push(word);
    }
    function upperWord(word) {
        var upper = word.charAt(0).toUpperCase();
        var wordEnd = word.substring(1);
        return upper + wordEnd;
    }
    var newStr = result.join('');
    return newStr;
}
console.log(task2("var_text_hello"));

/*Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false*/

// var i = 0;
// i = i + 1 ~ i += 1 ~ i++         i+1

function inArray(text, array) {
    var result = false;
    for(var i = 0; i < array.length; i++){
        if(text == array[i]){
            result = true;
            break;
        }
    }
    return result;
}
console.log(inArray('5', ['1', '2', '3', '4']));

/*Дана строка, например, '123456'. Сделайте из нее '214365'.*/

function changeNumber(string) {
    var result = '';
    var arr = string.split('');
    for(var i = 0; i < arr.length; i = i + 2){
        var current = arr[i];
        var next = arr[i+1];
        result = result + next + current;
    }
    return result;
}

console.log(changeNumber('123456'));











