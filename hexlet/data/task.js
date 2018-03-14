/*+
    2 |    1
      |
+----------------+
      |
   3  |    4
+
*/

const getX = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
};

const getY = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
};

const quadrant = () => {
    let x = getX(-5, 5);
    console.log('x = ' + x);
    let y = getY(-5, 5);
    console.log('y = ' + y);

    if (x === 0 || y === 0) {
        return null;
    }
    if (x > 0 && y > 0) {
        return 1;
    }
    if (x < 0 && y > 0) {
        return 2;
    }
    if (x < 0 && y < 0) {
        return 3;
    }
    if (x > 0 && y < 0) {
        return 4;
    }
};

//console.log('quadrant is ' + quadrant());


const symmetricalPoint = () => {

};

console.log(symmetricalPoint());

const distance = () =>{
    let x1 = getX(-5, 5);
    console.log('x1 = ' + x1);
    let y1 = getY(-5, 5);
    console.log('y1 = ' + y1);
    let x2 = getX(-5, 5);
    console.log('x2 = ' + x2);
    let y2 = getY(-5, 5);
    console.log('y2 = ' + y2);

    let res1 = Math.pow((x2 - x1), 2);
    let res2 = Math.pow((y2 - y1), 2);
    let fres = res1 + res2;

    return sqrt(fres);
};
console.log(distance());

/*
const quadrant = (x, y) =>{
    if(x === 0 || y === 0){
        return null;
    }
    if(x > 0 && y > 0){
        return 1;
    }
    if(x < 0 && y > 0){
        return 2;
    }
    if(x < 0 && y < 0){
        return 3;
    }
    if(x > 0 && y < 0){
        return 4;
    }
};*/

/*console.log(quadrant(0, 0)); //null
console.log(quadrant(5, 0));//null
console.log(quadrant(1, 5));//1
console.log(quadrant(-3, 10));//2
console.log(quadrant(-2, -5));//3
console.log(quadrant(4, -1));//4*/
