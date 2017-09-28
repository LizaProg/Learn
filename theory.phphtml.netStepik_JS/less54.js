var ball = document.getElementById('ball');

ball.onmousedown = function (e) {// 1. отследить нажатие
    // подготовить к перемещению

    var coords = getCoords(ball);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;

    function getCoords(elem) { // кроме IE8-
        var box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };

    }
    // 2. разместить на том же месте, но в абсолютных координатах
    ball.style.position = 'absolute';
    // переместим в body, чтобы мяч был точно не внутри position:relative
    document.body.appendChild(ball);

    moveAt(e);

    ball.style.zIndex = 1000; // показывать мяч над другими элементами
    // передвинуть мяч под координаты курсора
    // и сдвинуть на половину ширины/высоты для центрирования
    function moveAt(e) {
        ball.style.left = e.pageX - shiftX + 'px';
        ball.style.top = e.pageY - shiftY + 'px';
    }
    // 3, перемещать по экрану
    document.onmousemove = function (e) {
        moveAt(e);
    };
    // 4. отследить окончание переноса
    ball.onmouseup = function () {
        document.onmousemove = null;
        ball.onmouseup = null;
    };

};
//браузер имеет свой собственный Drag’n’Drop, который автоматически запускается и вступает в конфликт с нашим.
//Его нужно отключить:
ball.ondragstart = function () {
    return false;
};