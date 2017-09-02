$(document).ready(function () {

    $('#small a').click(function (e) {
        //если картинка по которой кликаем та же повторно ее не загружать
        if ($('#big img').attr('src') != $(this).attr('href')) {

            //спрятали картинку
            //поменяли ей значение атрибута src
            $('#big img').hide().attr('src', $(this).attr('href'));
            //когда картинка загрузится показать ее
            $('#big img').load(function () {
                $(this).fadeIn(2000)
            });
        }
        //для того чтобы картинка не открывалась в другом окне(стандартное поведение)
        e.preventDefault()
    });

    /*92*/
//переключатель показаь/скрыть галерею
    $('#switchGal').toggle(function () {
        $('#gallery').slideDown(2000);
    }, function () {
        $('#gallery').slideUp(2000);
    });

//миниатюра картинки прозрачная когда открыта большая картинка в галерее
    $('#small a img').click(function () {
        //сначала убрать прозрачность (у всех прозрачных ранее)
        $('#small a img').fadeTo(1000, 1);
        //сделать прозрачной миниатюру
        $(this).fadeTo(1000, 0.6);
    })
});
