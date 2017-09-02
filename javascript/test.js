//присвоить переменной arr массив
var arr = ["kiwi", "apple", "banana", "watermalon", "orange"];
//первый элемент массива
console.log(arr[0]);
console.log(arr[4]);
//цикл от 0 до конца массива
for (var i = 0; i < arr.length; i++) {
    //вывести элемент массива с индексом i
    console.log(arr[i]);
}

var obj0 = new Object(); // var obj0 = {};
obj0['one'] = 1;
obj0['fun'] = function () {
    return this.one;
};
//объект
var obj1 = {
    //свойство
    one: 1,
    //метод
    getOne: function () {
        //this. - получение свойства текущего объекта
        return this.one;
    },
    //свойством объекта может быть другой объект
    obj2: {
        two: 2,
        //функция без параметров
        getTwo: function () {
            return this.two;
        },
        //функция с параметром number
        plusTwo: function (number) {
            return number + this.two;
        }

    }
};
//у обекта obj1 вызвать метод getOne
console.log(obj1.getOne());
//у объекта obj1 вывести свойство one
//след 2 строки делают одно и тоже
console.log(obj1.one);
console.log(obj1["one"]);
console.log(obj1.obj2.two);
console.log(obj1.obj2.getTwo());
//при вызове ф-ции вместо number будет подставлено 6
console.log(obj1.obj2.plusTwo(6));

for (var i = 1; i <= 7; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

console.log("");

for (var i = 1; i <= 7; i++) {
    if (i == 3 || i == 5) {
        continue;
    }

    console.log(i);
}


