var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

//Некоторые Свойства холста
ctx.fillStyle = 'red'; //заливка
ctx.strokeStyle = '#000'; //цвет обводки
ctx.lineWidth = '3'; //толщина обводки

//Методы
ctx.strokeRect(0, 0, 100, 100); //прямоугольник с обводкой
ctx.clearRect(0, 0, 50, 50); //очистка холста
ctx.fillText('Hello', 0, 0); //текст с цветными буквами
ctx.strokeText('Hi', 10, 10); //текст с обведенными буквами

//Рисование путями(многоугольники, сложные фигуры)
ctx.beginPath(); //начало отрисовки фигуры
ctx.moveTo(0, 0); //начальная точка
ctx.lineTo(100, 100); //перемещение через линию
ctx.rect(100, 100, 30, 30); //добавить прямоугольник
ctx.closePath(); //фигура закончена
ctx.stroke(); //или fill (залить или обвести фигуру)


