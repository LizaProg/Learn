//Peгулярные выражения
/*
var re = /.../;

var s = "...";

 // s.search(re)
 // re.test(s)

 // /[abc]/.test("vasya@mail.com") //есть ли в этой строке символы abc
 // /[^abc]/.test("vasya@mail.com") // в этой строке не должно быть символов abc

 //[a-zA-Z0-9_]/.test("vasya@mail.com") //можно делать выборку и так


 // /ab{2,4}c/.test("abbbc")//a и c между ними b в количестве от 2 до 4
 // /ab{2,}c/.test("abbbc") //не меньше 2-х
 // /ab{2}c/.test("abbbc")// строго 2 шт b
 // /ab?c/.test("abbbc")// либо есть либо нет b
 // /ab+c/.test("abbbc")// минимум 1 вхождение максимум не ограничено
 // /ab*c/.test("abbbc")// может быть скольк угодно или не быть совсем
 //


// \d Любая цифра
// \w Алфавитно-цифровой символ
// \s Пробельный символ (пробел, табуляция, перевод строки, и т.п.)
// \D не цифра
// \W не алфавитно-цифровой символ
// \S не пробельный символ
//  . любой символ, кроме перевода строки

 /^\d\d?-\d\d?-\d{4}$/.test("abx12-02-2016dnc"); //с помощью ^ ограничиваем начало строки с помощью $ конец

//флажки(i, ig, igm) ставятся после '//'

 /b/i.test("aBc") //независимо от регистра
 /b/ig.test("aBc") //
 /b/igm.test("aBc") //

// группировка
 var re = /('")[^'"]*\1/; //'...' , "...", но не '...."
*/
var str = "vasya@mail.ru";
var result = str.match(/([a-z]+)@([a-z]+)\.([a-z]{2,})/i);
console.log(result);

/*всякие проверочки
 http://www.regexlib.com/DisplayPatterns.aspx
 */