function sum(n1, n2) {
    return n1 + n2;
}
var res = sum(5, 3);
console.log(res);

console.log(sum(2, 4));

//
//возвратить положительное число
function abc(num) {
    if (num < 0)
        return -num;
    else
        return num;
}

console.log(abc(5));
console.log(abc(-5));