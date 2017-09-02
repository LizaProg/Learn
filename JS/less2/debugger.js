function calculateTotalDistance(time, speedofFirst, speedofSecond ) {
    var distanceofFirst = speedofFirst * time;
    var distanceofSecond = speedofSecond * time;
    var totalDistance = distanceofFirst + distanceofSecond;
    return totalDistance;
}
console.log(calculateTotalDistance(3, 12, 14));