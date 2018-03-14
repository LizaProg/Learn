import {makePoint, getX, getY} from "./point";

let p1 = makePoint(1, 2);
console.log(getX(p1));
console.log(getY(p1));

let p2 = makePoint(9, 10);
console.log(getX(p2));
console.log(getY(p2));

const symmetricalPoint = (p) => {
    return makePoint(-(getX(p)), -(getY(p)));
};
console.log(symmetricalPoint(p1));

const distance = (p1, p2) => {
    let x1 = getX(p1);
    let x2 = getX(p2);
    let y1 = getY(p1);
    let y2 = getY(p2);
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
};
console.log(distance(makePoint(-2, -3), makePoint(-4, 4)));