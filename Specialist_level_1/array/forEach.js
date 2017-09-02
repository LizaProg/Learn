//это метод массива

// forEach

var nums = [1, 2, 3];
nums.forEach(function (v) {
    console.log(v * 10);
});

// map

var num = [1, 4, 9];
var result = num.map(function (v) {
    return v * 10;
});
console.log(result);
