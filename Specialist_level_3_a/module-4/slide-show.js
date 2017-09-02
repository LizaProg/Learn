(function ($) {

    var viewUL = $('div.view')
            .css('overflow', 'hidden')
            .children('ul'), //все ul
        imgs = viewUL.find('img'), //все картинки
        imgW = 400, //ширина картинки
        imgsLen = imgs.length, //кол-во картинок
        totalImgsW = imgsLen * imgW, //общая ширина
        current = 1; //текущая позиция

    $('div#show')
        .show()
        .find('button').on('click', function () {
        //какую кнопку нажали(вычислили по id)
        var direction = $(this).attr('id'),
            position = imgW;

        //меняем картинки при нажатии кнопок
        if (direction == 'next') {
            current += 1;
        } else {
            current -= 1;
        }
        //если появилась первая картинка
        // то нужно поставить последнюю
        //а если последняя то следующая первая
        if (current == 0) {
            current = imgsLen;
            direction == 'next';
            position = totalImgsW - imgW;
        } else if (current - 1 == imgsLen) {
            current = 1;
            position = 0;
        }
        doIt(viewUL, position, direction);
    });
    function doIt(container, position, direction) {
        var sign;
        if (direction && position != 0){
            sign = (direction == 'next') ? '-=' : '+=';
        }
        container.animate(
            {'margin-left': sign ? (sign + position) : position}
        );
    }


})(jQuery);
