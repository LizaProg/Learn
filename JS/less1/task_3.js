//Найти периметр многоугольника(найти сумму всех сторон)

var polygonSides = [10, 20, 30, 40, 30, 20, 10];
var polygonPerimeter = 0;

for (var i = 0; i < polygonSides.length; i++){
    polygonPerimeter += polygonSides[i];
}
console.log(polygonPerimeter);

