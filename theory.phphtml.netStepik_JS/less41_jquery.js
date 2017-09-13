$(function () {
    /*1*/
    //$('p:has(b)').wrap('<div>');
    /*3*/
    /*$('p').each(function () {
        $(this).replaceWith('<div>' + $(this).text() + '</div>');
    });*/
    /*4*/
    //$('input[type=checkbox]:odd').prop('disabled', true);
    // $(':checkbox:odd').prop('disabled', true);
    /*5*/
    /*$('input[type=checkbox]').each(function () {
        if ($('input[type=checkbox]').prop('disabled', false)) {
            $(this).prop('checked', true)
        }
    })*/
    // $(':checkbox:not([disabled])').prop('checked', true);
    /*6*/
    /*$('#test').prev().text('!').end().next().text('?');*/

    /*7*/
    // $('#test').prev().html($('#test').html()).end().next().html($('#test').html());

    /*9*/
    // $('li:eq(1)').addClass('www').wrapInner('<i>').after('<li>Hi!</li>');

    /*10*/
    // $('li:eq(9)').parent().prev().wrap('<div class="www">');

    /*11*/
    /*$('p:not(.www)').each(function (index) {
        $(this).append(' ' + index);
    })*/

    /*12*/
    /*$('p').each(function () {
        var cloneEl = $(this).clone().addClass('copy');
        $(this).prepend(cloneEl).addClass('original');
    })*/

    /*13*/
    /*$('h2').next('p').each(function () {
        var p = $(this).detach();
        $('h2').before(p);
    });*/

    /*14*/
    /*$('p').each(function () {
        if($.trim($(this).text()) == ''){
            $(this).html($(this).prev().html());
        }
    })*/
    /*если будет элемент с пробелом внутри то :empty считает его не пустым*/

    /*$('p:empty').each(function () {
        $(this).html($(this).prev().html());
    });*/

    /*15*/

    /*$('b').each(function () {
        if ($(this).parent().is('.www') || $(this).parent().is('p')) {
            $(this).parent().css({fontSize: '30px', color: 'red'})
        }
    });*/

    /*16*/
    /*$('p').each(function () {
        if($.trim($(this).text()) == ''){
            $(this).html($(this).prevAll('h2').first().html())
        }
    })*/
    /*prevAll('h2')все h2 которые стоят перед элементом
    * .first() первый h2 из этих h2*/

    /*17*/
    /*$('#btnSquare').click(function () {
        $('input[type=text]').each(function () {
            var value = $(this).val() * $(this).val();
            $(this).val(value);
        })
    })*/

    /*18*/
    //$('#testTest').prepend($('#testTest').prev().html()).append(' ' + $('#testTest').next().html());

    /*19*/
    /*var neigNext = $('#testTest').nextAll().eq(1).html();
    /!*второй сосед снизу*!/
    var neigPrev = $('#testTest').prevAll().eq(1).html();
    /!*второй сосед сверху*!/
    $('#testTest').nextAll().eq(1).html(neigPrev);
    $('#testTest').prevAll().eq(1).html(neigNext);*/


    /*20*/
    //$('#test').children().not(':header').css('color','red');

    /*21*/
    //$('p').css('color','red').filter('.www').prepend('!');


    /*22*/
    //$('p.www').css('color','red').filter(':first').prepend('!').end().filter(':last').prepend('?');

    /*23*/
    /*$('p').each(function () {
        $(this).append(' ' + $(this).html())
    });*/

    /*24*/
    /*$('p').each(function (index) {
        $(this).append(' (№' + (index + 1) + ')')
    });*/

    /*25*/
    /*$('#num > p').each(function (index) {
        var numInP = parseInt($(this).text());
        $(this).append(' (' + ((index + 1) * numInP) + ')');
    });*/

    /*26*/
    /*$('p').click(function () {
        $(this).next().remove().end().prev().remove();
    });*/

    /*27*/
    /*$('p').click(function () {
        $(this).prevUntil(':header').remove();
    })*/

    /*28*/
    /*$('p').click(function () {
        $(this).nextAll('.www').first().remove();
    })*/

    /*29*/
    /*$('p').click(function () {
        $(this).nextAll(':eq(4)').remove();
    })*/

    /*30*/
    /*
   $('p').click(function () {
      $(this).nextAll(':eq(4)').not('h2').remove();
    });*/

   /*31*/
   /*$('p').click(function () {
       $(this).nextAll(':eq(4)').not(':has(b)').remove();
   })*/

   /*32*/
    /*$('p').click(function () {
        $(this).nextAll(':eq(4)').not('h2').next().remove();
    })*/

    /*33*/
    /*$('*').click(function () {
        var el1 = $(this);
        var el2 = $(this).next();
        el1.insertAfter(el2);
    })*/

    /*34*/
    /*$('*').click(function () {
        var cloneCurr = $(this).clone();
        cloneCurr.insertAfter($(this).next()).css('color', 'red');
    });*/

    /*$('body').on('click', '*', function () {
        $(this).clone().insertAfter($(this).next()).css('color', 'red');
    })/!*делегирование(клоны тоже клонируются)*!/*/

    /*35*/
    $('*').click(function () {
       var neigh = $(this).nextAll('.www').first(); /*сосед ближайший снизу*/
        $(this).insertAfter(neigh);
    });



    /*9 задач в день и не ибет 1*/
});