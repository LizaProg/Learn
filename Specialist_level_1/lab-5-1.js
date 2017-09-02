// стр 99 раб тетр

var s = 'Мы знаем, что монохромный цвет - это грдации серого';
var txt = 'хром';
var word;

var pos = s.indexOf(txt);
if (pos != -1) {
    var start = s.lastIndexOf(' ', pos) + 1;
    var end = s.indexOf(' ', pos);
    if (end == -1) {
        word = s.slice(start);
    } else {
        word = s.slice(start, end);
    }
}
console.log(word);