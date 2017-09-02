/*
//доступ к отдельным свойствам объекта:
// 1.через точку
// 2. через квадратные скобки

var obj = {prop: 1};
console.log(obj.prop);
console.log(obj['prop']);
*/

/*
//Итератор по объектам: for...in.
//существует спец вид цикла for
//он перебирает каждый ключ объекта по очереди вызывая оператор in

var myObject = {
    someProb: 1,
    anotherProb: 2
};
console.log('someProb' in myObject);

for (var prop in myObject){
    console.log(prop);
    console.log(myObject[prop]);
}
*/

/*
//в качестве значений в объект могут быть записаны функции

var obj = {
    doSomething: function () {
        console.log('something');
    }
};
//ф-я является значением (тип function)
//после ее объявления к ней можно обращаться как к
//обычной переменной
console.log(typeof obj.doSomething);

//вызов функции - запуск кода,
//записанного в ней - происходит
//при добавлении к названию ф-ции круглых скобок
console.log(obj.doSomething());
*/

//свойства и методы объекта

var table = {
    //Цвет и кол-во ножек стола -  СВОЙСТВА
    color: 'black',
    legsCount: 4,

    //покраска стола - МЕТОД, он управляет его свойствами
    paint: function (color) {
        this.color = color;
    }
};
console.log(table.color);
table.paint('red');
console.log(table.color);