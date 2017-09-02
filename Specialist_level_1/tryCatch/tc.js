var err0 = new Error("На 0 делить нельзя!");
var err1 = new Error("На 1 делить нельзя!");
var err2 = new Error("На 5 делить нельзя!");
try {
    var x = 1, y = 5;
    if (y == 0) {
        throw err0;
    }
    if (y == 1) {
        throw err1;
    }
    if (y == 5) {
        throw err2;
    }
    console.log(x / y);
} catch (e) {
    console.log(e.name, e.message);
}
console.log("The end");


function getDate(str) {
    var f = str.match(/^(\d\d?)-(\d\d?)-(\d{4})$/);
    if (!f) {
        throw new Error("Неправильная дата!");
    }
    return new Date(f[3], f[2] - 1, f[1]);
}

try {
    var d = getDate("21-10-20141");
    console.log(d.toString());
} catch (e) {
    console.log(e.message);
}

