/*/!*2*!/
/!*var ggg = function (num, func) {
 return func(num);
 };
 var funcSqr = function (a) {
 return Math.pow(a, 2)
 };*!/


/!*3*!/
var func1 = function () {
    return 3;
};
var func2 = function () {
    return 4;
};
var ggg3 = function (a, b) {
    return a + b;
};
console.log(ggg3(func1(), func2()));

/!*4*!/
var kvadrat = function (n) {
    return Math.pow(n, 2)
};
var kub = function (n) {
    return Math.pow(n, 3)
};
var ggg4 = function (a, b, c) {
    return b(a) + c(a);
};
console.log(ggg4(5, kvadrat, kub));


/!*5*!/
var array5 = [1, 2, 3, 4, 5];
function plusFive(arr) {
    var arrPlusFive = [];
    for (var i = 0; i < arr.length; i++) {
        arrPlusFive[i] = arr[i] + 5;
    }
    return arrPlusFive;
}
//console.log(plusFive(array5));

function each5(a, func) {
    return func(a);
}
console.log(each5(array5, plusFive));

/!*6*!/
function funcFirst(n) {
    return n * 1;
}
function funcSecond(n) {
    return n * 2;
}
function funcThird(n) {
    return n * 3;
}
var allFunc = [funcFirst(), funcSecond(), funcThird()];
var array6 = [1, 2, 3, 4, 5];

function each6(arr, func) {
    var arrEach6 = [];
    for (var i = 0; i < arr.length; i++) {

    }
    return arrEach6;
}
console.log(each6(array6, allFunc));*/


/*7*/

function func() {
    var cnt = 1;
    return function () {
        return cnt++;
    }
}
var count = func();

console.log(count());
console.log(count());
console.log(count());


/*12*/
function funcGener() {
    var generateArr = [];
    return function (min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    };



}