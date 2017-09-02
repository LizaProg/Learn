// написать функцию power()которая принимает 2 целочисл значения
// функция должна возвращать результат возведения первого числа в степень второго
function power(base, exp) {
    var result = 1;
    for(var cnt = 0; cnt<exp; cnt++)
        result *= base;
    return result;
}
console.log(power(2, 10));
console.log(power(3, 5));
console.log(power(5, 3));