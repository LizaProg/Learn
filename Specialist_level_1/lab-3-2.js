//стр 51 раб тетр

function compare(x) {
    return function (y) {
        if (y > x)
            return true;
        if (y < x)
            return false;
        return null;
    };
}
var c = compare(10);
console.log(c(9));
console.log(c(10));
console.log(c(11));