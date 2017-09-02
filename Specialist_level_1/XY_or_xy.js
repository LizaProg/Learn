var x = "X";
var y = "Y";

function outer() {
    var x = "x";
    console.log("x: " + x); //x выводится маленькая х потому что она была объявлена внутри функции
    console.log("y: " + y); //Y не была объявлена внутри функции во 2 строке обявлена значит исп она
    y = "y";
    function inner(z) {
        var y = "_y";
        console.log("x: " + x); //x
        console.log("y: " + y); //_y
        console.log("z: " + z); //z
    }
    inner("z");
}
outer();
console.log("x: " + x); //X объявлены  в глобальной области видимости
console.log("y: " + y); //y перезаписана в 8 строке

