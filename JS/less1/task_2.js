//Циклический алгоритм:
//почистить все апельсины на столе

//рекурсия
/*
var orangesLeft = 3;

function pellNextOrange() {
    orangesLeft -= 1;
    if (orangesLeft > 0){
        pellNextOrange();
    }
}
pellNextOrange();
console.log(orangesLeft);
*/
//цикл

var orangeLeft = 3;

function peelOranges() {
    while (orangeLeft > 0){
        orangeLeft -= 1;
    }
}
peelOranges();
console.log(orangeLeft);