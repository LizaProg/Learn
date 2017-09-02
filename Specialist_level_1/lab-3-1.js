//стр 47 раб тетр

function power(base, exp) {
    var result = 1;
    for (var cnt = 0; cnt < exp; cnt ++)
        result *= base;
    return result;
}
console.log(power(2, 2));
console.log(power(5, 2));
console.log(power(7, 2));
