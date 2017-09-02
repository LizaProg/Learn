var stringArr = ['lorem', 'ipsum', 'dolor', 'sit', 'amet'];

function arrStr(arr, separator) {
    var string = '';
    for (var i = 0; i < stringArr.length; i++){
        if(i == stringArr.length - 1){
            string = string + stringArr[i];
        }else {
            string = string + stringArr[i] + separator;
        }
    }
    return string;
}

console.log(arrStr(stringArr, ' - '));