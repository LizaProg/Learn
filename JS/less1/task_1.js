/*var time = 3;
var speedofFirst = 12;
var speedofSecond = 14;

var distanceofFirst = speedofFirst * time;
var distanceofSecond = speedofSecond * time;
var totalDistance = distanceofFirst + distanceofSecond;
console.log(totalDistance);
*/
//решение с помощью функции
function calculateTotalDistance(time, speedofFirst, speedofSecond ) {
    var distanceofFirst = speedofFirst * time;
    var distanceofSecond = speedofSecond * time;
    var totalDistance = distanceofFirst + distanceofSecond;
    return totalDistance;
}
console.log(calculateTotalDistance(3, 12, 14));