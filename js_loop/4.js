function randInt(start, finish) {
    var range = finish - start;
    return Math.floor((Math.random() * range) + start);
}

function randArr(size, start, finish) {
    var arr = new Array(size);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = randInt(start, finish);
    }
    return arr;
}

var rand = randArr(10, 5, 10);
for (var i = 0; i < rand.length; i++) {
    if(rand[i] % 2 == 0){
        console.log(rand[i]);
    }
}

