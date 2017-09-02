// исходные данные

var s = 'мы знаем, что монохромный цвет - это градации серого';
var txt = 'хром';
var word;

//в значении переменной s найдите слово, содержащее подстроу
//которая является значением переменной txt и присвойте его переменной word

var position = s.indexOf(txt); //найди позицию txt
if (position != -1) {
    var start = s.lastIndexOf(' ', position) + 1; //найди пробел в position слева
    var end = s.indexOf(' ', position); //найти пробел справа
    if (end == -1)
        word = s.slice(start);
    else
        word = s.slice(start, end);
}