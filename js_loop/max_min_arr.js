/*var arr = [4, 8, 15, 16, 23, 42, 108];
var max = 1;
for(var i = 0; i < arr.length; i++){
    if (arr[i] > max){
        max = arr[i];
    }
}
console.log(max);*/

/*
var arr = [4, 8, 15, 16, 23, 42, 108, 0, 1];
var min = arr[0];
for(var i = 0; i < arr.length; i++){
    if (arr[i] < min){
        min = arr[i];
    }
}
console.log(min);*/


var myArr = [4, 8, 15, 16, 23, 42, 108, 0, 1];
function max(arr) {
var max = 1;
    for(var i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(max(myArr));
