window.onload = function () {
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(100, 50);
    ctx.strokeStyle = 'red';
    ctx.stroke();

    /*2*/
    var ctx1 = document.getElementById('canvas1').getContext('2d');
    ctx1.beginPath();
    ctx1.moveTo(50, 50);
    ctx1.lineTo(50, 100);
    ctx1.stroke();

    /*3*/
    var ctx2 = document.getElementById('canvas2').getContext('2d');
    ctx2.beginPath();
    ctx2.moveTo(50, 50);
    ctx2.lineTo(100, 100);
    ctx2.moveTo(100, 50);
    ctx2.lineTo(50, 100);
    ctx2.stroke();

    /*4*/
    var ctx3 = document.getElementById('canvas3').getContext('2d');
    ctx3.strokeRect(50, 50, 50, 50);
    ctx3.beginPath();
    ctx3.moveTo(50, 120);
    ctx3.lineTo(100, 120);
    ctx3.lineTo(100, 170);
    ctx3.lineTo(50, 170);
    ctx3.lineTo(50, 120);
    ctx3.stroke();

    /*5*/
    var ctx4 = document.getElementById('canvas4').getContext('2d');
    ctx4.beginPath();
    ctx4.moveTo(100, 50);
    ctx4.lineTo(150, 100);
    ctx4.lineTo(50, 100);
    ctx4.lineTo(100, 50);

    ctx4.stroke();

    /*6*/
    var ctx5 = document.getElementById('canvas5').getContext('2d');
    ctx5.beginPath();
    ctx5.moveTo(50, 50);
    ctx5.lineTo(150, 50);
    ctx5.lineTo(130, 30);
    ctx5.moveTo(150, 50);
    ctx5.lineTo(130, 70);
    ctx5.stroke();

    /*7*/
    var ctx6 = document.getElementById('canvas6').getContext('2d');
    ctx6.strokeRect(20, 20, 120, 100);

    /*9*/
    var ctx7 = document.getElementById('canvas7').getContext('2d');
    ctx7.fillRect(20, 20, 100, 100);
    //ctx7.strokeRect(20, 20, 100, 100);

    /*11*/
    var ctx8 = document.getElementById('canvas8').getContext('2d');
    ctx8.fillRect(20, 20, 100, 100);
    ctx8.clearRect(40, 40, 50, 50);

    /*14*/
    function getRadians(degrees) {
        return (Math.PI / 180) * degrees;
    }//для преобразования радиан в градусы

    var ctx9 = document.getElementById('canvas9').getContext('2d');
    ctx9.arc(100, 100, 50, 0, getRadians(360));
    ctx9.fill();
    ctx9.stroke();

    /*16*/
    function getRadians(degrees) {
        return (Math.PI / 180) * degrees;
    }

    var ctx10 = document.getElementById('canvas10').getContext('2d');
    ctx10.arc(100, 100, 50, 0, getRadians(180));
    ctx10.fill();
    ctx10.stroke();

    /*17*/
    function getRadians(degrees) {
        return (Math.PI / 180) * degrees;
    }

    var ctx11 = document.getElementById('canvas11').getContext('2d');
    ctx11.arc(110, 110, 50, 0, getRadians(80));
    ctx11.fill();
    ctx11.stroke();

    /*21*/
    var ctx12 = document.getElementById('canvas12').getContext('2d');
    ctx12.beginPath();
    ctx12.strokeStyle = 'red';
    ctx12.moveTo(50, 50);
    ctx12.lineTo(150, 50);
    ctx12.stroke();
    ctx12.beginPath();
    ctx12.moveTo(50, 70);
    ctx12.lineTo(150, 70);
    ctx12.strokeStyle = 'green';
    ctx12.stroke();

    /*24*/
    var ctx13 = document.getElementById('canvas13').getContext('2d');
    for (var i = 1; i <= 10; i++) {
        ctx13.moveTo(50, 10 * i + 40);
        ctx13.lineTo(150, 10 * i + 40);
    }
    ctx13.stroke();

    /*25*/
    var ctx14 = document.getElementById('canvas14').getContext('2d');

    for (var y = 1; y <= 10; y++) {
        ctx14.moveTo(40, 10 * y + 40);
        ctx14.lineTo(150, 10 * y + 40);
    }

    for (var z = 1; z <= 10; z++) {
        ctx14.moveTo(10 * z + 40, 40);
        ctx14.lineTo(10 * z + 40, 150);
    }
    ctx14.stroke();


};