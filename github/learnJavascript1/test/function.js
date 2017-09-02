/*function sayHello(name, sign) {
    name = name || "Guest";
    sign = sign || "...";
    console.log("Hello, " + name + sign );
}
sayHello("John" , "!");
var n = "Mike";
sayHello(n);
sayHello();

//нужно вывести только положительные числа. независимо от того полож или отриц получилось
function abc(num) {
    if (num < 0)
        return -num;
    else 
        return num;
}
console.log(abc(5));
console.log(abc(-5));
*/
// примерчик
var x = "X";
var y = "Y";

function outer() {
    var x = "x";
    console.log("x: " + x);
    console.log("y: " + y);
    y = "y";
    function inner(z) {
        var y = "_y";
        console.log("x: " + x);
        console.log("y: " + y);
        console.log("z: " + z);
    }
    inner("z");
}
outer();
console.log("x: " + x);
console.log("y: " + y);

// функция удерживает ссылку

function say(greet) {
    return function (name) {
        return greet + " " + name;
    }
}
var en = say("Hello");
console.log(en("John"));
console.log(en("Mike"));

var ru = say("Privet");
console.log(ru("Vasya"));
console.log(ru("Petya"));
