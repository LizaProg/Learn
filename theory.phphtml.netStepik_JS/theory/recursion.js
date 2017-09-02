/*факториал с помощью рекурсии*/
function factorial(num) {
    /*5*4*3*2*1
     4*3*2*1
     3*2*1
     2*1
     1*/

    if (num == 1) {
        return 1;
    }
    //3 * 2 * 1
    return num * factorial(num - 1);
}
console.log(factorial(5));

/*написать число от того которое написали - 1 до 0*/
function print(num) {
    console.log(num);

    if (num == 0) {
        return;
    }

    print(num - 1);
}
print(10);