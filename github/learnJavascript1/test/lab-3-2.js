//написать функцию compare которая принимает значение х и возвращает анонимную функцию
//анонимная функция должна принимать значене у и возвращать результат значений
// у и х как:
//если у больше чем х то возвращается true
// если у меньше чем х то false
// если значения равны то null

// exI
function compare(x) {
    return function (y) {
        if (y>x)
            return true;
        if (y<x)
            return false;
        return null;
    };
}
var c = compare(10);
console.log(c(9));
console.log(c(10));
console.log(c(11));


// exII
function compare(x) {
    return function (y) {
        if (y==x) return null;
        return y>x;
    };
}
console.log( compare(10)(9) );