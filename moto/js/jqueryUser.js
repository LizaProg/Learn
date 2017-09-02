$(function () {
    //для календаря
    $("#date").datepicker();


    //для слайдера
    $("#slider-range").slider({
        range: true,
        min: 10,
        max: 1000,
        values: [50, 400],
        slide: function (event, ui) {
            $("#amount").val(ui.values[0] + " - " + ui.values[1] + ' км');
        }
    });
    $("#amount").val($("#slider-range").slider("values", 0) +
        " - " + $("#slider-range").slider("values", 1) + ' км');

    //диалог страховка
    $("#dialog").dialog({
        autoOpen: false,
        show: 'blind',
        hide: 'explode'
    });
    $('#help').click(function () {
        $('#dialog').dialog('open');
        return false;
    });

    /*$() {
     //кнопки
     $( "input:submit #my_button" ).button();
     $( "button, input, a" ).click( function( event ) {
     event.preventDefault();
     } );
     */


    $("#tabs").tabs();


    $("#accordion").accordion();


    $("#progressbar").progressbar({
        value: 0
    });

    $('#opros :radio').change(function () {
        //кол-во выделенных радио кнопок
        var chRadio = $('#opros :radio:checked').size();
        $('#progressbar').progressbar({
            //один ответ по шкале будет отмечен как 20%
            // у нас всего 5 вопросов и ответив нв все их шкала заполнится на 100%
            value: chRadio * 20
        });

        //посчет общего кол-ва вопросов(если будут изменеия)
        var questCount = $('#opros div[id*=radio]').size();
        $('#aswerCount').text('Дано ответов ' + chRadio + ' из ' + questCount);

    });

    $("#sortable").sortable({
        placeholder: "ui-state-highlight"
    });
    $("#sortable").disableSelection();
});

$(function () {
    var availableTags = [
        "Ленинградская",
        "Московская",
        "Кемеровская",
        "Красноярская",
        "Новосибирская",
        "Омская",
        "Томская",
        "Свердловская",
        "Владимиская",
        "Калужская",
        "Ростовская",
        "Рязанская",
        "Кировская",
        "Псковская",
        "Калужская",
        "Курганская",
        "Курская",
        "Пензенская",
        "Орловская",
        "Оренбургская",
        "Тульская",
        "Тюменская"
    ];
    $("#tags").autocomplete({
        source: availableTags
    });


    //перетаскивание эл-ов
    $('#forheader').draggable();
    //для эл-а со шлемами
    $('div[id*=helmet]').draggable({
        containment: '#bound',
        revert: 'invalid',
        helper: 'clone',
        cursor: 'move'
    });
    //Корзина
    //кол-во шлемов в корзине
    var helmetsCount = 0;
    //общая цена шлемов в корзине
    var summ = 0;


    $('#mycart').droppable({
        //в корзину можно помещать только шлемы
        accept: '#forHelmets div[id*=helmet]',
        //подсвечивать рамку корзины(стили прописаны в css)
        activeClass: 'highlight',
        drop: function (e, ui) {
            //при помещении шлем в корзину счетчик шлемов увелич на 1
            helmetsCount++;
            if (helmetsCount > 0){
                $('#myclear').show();
            }
            //в вашей корзине столко то эл-ов:...(если добавили эл-т в корзину)
            $('#helmetsCount strong').text(helmetsCount);
            //текущий шлем который принесли в корзину
            var helmet = $(ui.draggable);
            //текущ стоимость шлема добавл в корзину (число)
            summ += parseInt(helmet.attr('title'));
            $('#helmetsSumm').text(summ);

            //скрыли текущий эл-т на полке со шлемами
            helmet.fadeOut(200, function () {
                //вставили этот эл-т в корзину и показали
                $(this).appendTo('#mycart').fadeIn(1000).find('img').animate({
                    'width' : '90',
                    'height' : '80'
                }, 1000);
            });
        }
    });

    $('#forHelmets').droppable({
        //только шлемы находящиеся внутри корзины
        accept: '#mycart div[id*=helmet]',
        activeClass: 'highlight',
        drop: function (e, ui) {
            //если убрать шлем из корзины счетчик шлемов уменьшается на 1
            helmetsCount--;
            if (helmetsCount == 0){
                $('#clear').hide();
            }
            //в вашей корзине столко то эл-ов:...(если убрали эл-т из корзины)
            $('#helmetsCount strong').text(helmetsCount);
            var helmet2 = $(ui.draggable);

            //текущ стоимость шлема добавл в корзину (число)
            summ -= parseInt(helmet2.attr('title'));
            $('#helmetsSumm').text(summ);

            helmet2.fadeOut(200, function () {
                $(this).appendTo('#forHelmets').fadeIn(1000).find('img').animate({
                    'width' : '180',
                    'height' : '160'
                }, 1000);
            });
        }
    });

    //выбор эл-та(или некольких эл-ов)
    $('#selectable').selectable();

    //изменение размера эл-та
    $('#mytextarea').resizable({
        maxHeight: 250,
        maxWidth: 380,
        minHeight: 150,
        minWidth: 380
    });

    //эффекты
  /*  $('#formHide').toggle(function () {
        $('#my_form').show('slide', 1000);
    }, function () {
        $('#my_form').hide('explode', 1000);
    });*/

   /* $('#formhide').toggle(function () {
        $('#my_form').fadeOut(1000);
        $(this).text('Развернуть форму')
    }, function () {
        $('#my_form').fadeIn(1000);
        $(this).text('Свернуть форму')
    })*/


    $('#my_button').click(function (e) {
        var myDate = $('#date');
        //если при нажатии на кнопку отправить данные поле
        //дата не заполнено
        if (myDate.val() == ''){
            //то меняем цвет на красный
            //и эл-т пульсирует
            myDate.css('background-color','#cc0000').effect('pulsate', 2000, function () {
                //после пульсации вернуть прежний цвет
                myDate.css('background-color','#f6f6f6')
            });
        }

        $(this).attr('disabled', 'disabled');
        $(this).attr('value', 'Отправляем данные...');

        e.preventDefault();
    });

    /*//переключатель с эффектом
    $('#formHide').click(function () {
        $('#my_form').toggle('slide');
    });

    //изменить цвет формы
    $('#formColor').toggle(function () {
     $('#bigform > fieldset').animate({
         'backgroundColor':'#e9f0e7'
     }, 1000);
    }, function () {
        $('#bigform > fieldset').animate({
            'backgroundColor':'#e7e7f0'
        }, 1000);
    });*/


    $('#zoom').click(function () {
        $('#tabs p').toggleClass('forP', 2000);
        $(this).effect('pulsate', 2000);
    });

   /* $('#zoom').toggle(function () {
        $('#tabs p').switchClass('forP', 'forP2', 1000);
    }, function () {
        $('#tabs p').switchClass('forP2','forP', 1000);
    });*/




});





































