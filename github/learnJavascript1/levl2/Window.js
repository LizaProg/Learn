свойства Window
history
navigator
screen
location
document

/*WINDOW*/
history.length //история посещений
history.back() //использование кнопки назад(загружает предыдущую страницу)
history.forward() //кнопка вперед
history.go(5) // указанное количество шагов вперед/назад

navigator// содержит общую информацию о браузере и операционной системе
function f() {
    var s = '';
    for (var p in navigator)
        console.log(p, ":", navigator[p]);
}

screen // содержит информацию об экране пользователя.
function f() {
    var s = '';
    for (var p in screen)
        console.log(p, ":", screen[p]);
}

location // адресная строка браузера
http://www.site.ru:81/about/index.html?x=10#metka
protocol:"http:"
hostname:"www.site.ru"
port:"81"
host:"www.site.ru:81"
pathname:"/about/index.html"
search:"?x=10"
hash:"#metka"
href:

/*location*/
function demoReload() {
    location.reload(true);
} //oбновление страницы

function demoAssign() {
    location.assign("http://ya.ru");
} //загружает контент указанного адреса

function demoReplace() {
    location.replace("http://ya.ru")
}
/*Document*/
писать в html файле в <script>
    function () {
        document.open();
        document.write('<html>');
        document.write('<h1>HELLO</h1>');
        document.write('</html>');
        document.close();
    }
//метод, выводящий на страницу переданные ему аргументы.
 //Аргументов может быть любое количество, и они могут быть любых типов,
   //при выводе они преобразуются в строки.


методы window
alert()
confirm()
prompt()
setTimeout()
clearTimeout()


function f() {
    window.alert("Hello World!");
} //выводит диалоговое окно

function f() {
    var x = confirm("Are you sure?");
    alert(x);
} //диалоговое окно с вопросом (есть варианты да нет)

function f() {
    var x = prompt("Are you sure?", "Yes");
    alert(x);
} //можно вписать свой ответ в строку

var timer;
function demosetTimeout() {
    timer = window.setTimeout(
        "alert('setTimeout')", 3000);
} //таймер исполняется одноразово

function democlearTimeout() {
    window.clearTimeout(timer);
} //отключение таймера

var interval;
function demosetinterval() {
    timer = window.setInterval(
        "alert('setTimeout')", 3000);
} // то же самое что и таймер только интервал исполняется  через заданный промежуток времени

function democlearInterval() {
    window.clearInterval(timer);
} //отключение таймера



