

var ctx = document.getElementById('canvas').getContext('2d');
for (var i = 1; i <= 10; i++) {
    ctx.moveTo(40, 10*i + 40);
    ctx.lineTo(150, 10*i + 40);
}
for (var i = 1; i <= 10; i++) {
    ctx.moveTo(10*i + 40, 40);
    ctx.lineTo(10*i + 40, 150);
}
ctx.stroke();