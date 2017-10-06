window.onload = function () {
    var canvas = document.getElementById('canvas');
    if (canvas && canvas.getContext) {
        var ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.fillStyle = 'gray';
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        }
    }

    var canvas1 = document.getElementById('canvas1');
    if (canvas1 && canvas1.getContext) {
        var ctx1 = canvas1.getContext('2d');
        if (ctx1) {
            ctx1.fillStyle = 'gray';
            ctx1.fillRect(20, 20, 100, 100);
        }
    }

    var canvas2 = document.getElementById('canvas2');
    if (canvas2 && canvas2.getContext) {
        var ctx2 = canvas2.getContext('2d');
        if (ctx2) {
            ctx2.fillStyle = 'gray';
            ctx2.fillRect(20, 20, 100, 100);

            ctx2.lineWidth = 3;
            ctx2.strokeStyle = 'rgba(0,0,255,1)';
            ctx2.strokeRect(20, 20, 100, 100);
        }
    }

    var canvas3 = document.getElementById('canvas3');
    if (canvas3 && canvas3.getContext) {
        var ctx3 = canvas3.getContext('2d');
        if (ctx3) {
            //прямоугольник
            ctx3.lineWidth = 3;
            ctx3.strokeStyle = 'blue';
            ctx3.strokeRect(25, 25, 100, 125);

            //контур прямоугольника
            ctx3.fillStyle = 'gray';
            ctx3.fillRect(175, 25, 100, 125);

            //прямоугольник с контуром
            ctx3.strokeStyle = 'red';
            ctx3.fillStyle = 'yellow';
            ctx3.lineWidth = 10;
            ctx3.fillRect(325, 25, 100, 125);
            ctx3.strokeRect(325, 25, 100, 125);

            ctx3.clearRect(15, 75, 450, 50);


        }
    }

    var canvas4 = document.getElementById('canvas4');
    if (canvas4 && canvas4.getContext) {
        var ctx4 = canvas4.getContext('2d');
        if (ctx4) {
            for(var i = 0; i < 10; i++){
                ctx4.beginPath();
                ctx4.lineWidth = i+1;
                ctx4.moveTo(25, 25+i*15);
                ctx4.lineTo(475, 25+i*15);
                ctx4.stroke();
            }
        }
    }
};