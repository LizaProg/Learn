/*1*/
/*
 $(function () {
 $('h2').wrap('<div>');
 });
 */

/*2*/
/*
 $(function () {
 $('h2').wrap('<div class="test"></div>')
 });*/

/*3*/
/*
 $(function () {
 $('h2').wrapInner('<i>')
 });*/

/*4*/
/*
 $(function () {
 $('h2').wrapAll('<i>')
 });*/

/*5*/
/*
 $(function () {
 $('div > p').unwrap('')
 });*/

/*8*/
/*
 $(function () {
 $('h2').before('<p>!</p>').after('<p>!</p>');
 });*/

/*11*/
/*
 $(function () {
 $('h2').prepend('!').append('?').css('color', 'red');
 });*/

/*12*/
/*$(function () {
 $('h2').replaceWith($('h2').text());
 });*/

/*13*/
/*$(function () {
 $('h2').each(function(n, el) {
 var text = $(el).text();
 $(el).replaceWith('<p>' + text + '</p>');
 });
 });*/

/*15*/
/*
 $(function () {
 $('h2').empty();
 });
 */

/*16*/
/*$(function () {
 var href = $('.www').attr('href');
 console.log(href);
 });*/


$(function () {
    /*17*/
    //console.log($('a:first').attr('href'));
    /*18*/
    /*$('a').each(function () {
     alert($(this).attr('href'))
     })*/
    /*19*/
    /*$('a').each(function () {
     $(this).attr('href', '!');
     })*/
    /*20*/
    //$('a').attr('target', '_blank')

    /*21*/
    /*$('a').each(function (){
     var elem = $(this);
     elem.html(elem.attr('href'));
     });*/

    /*22*/
    /*$('a').each(function () {
     $(this).append('(' + $(this).attr('href') + ')')
     })*/

    /*23*/
    //Анкор (от англ. anchor) - это текст ссылки.
    /* $('a').each(function () {
     $(this).attr('title', $(this).attr('href'))
     })*/

    /*24*/
    //$('li').addClass('test')
    // $('li').attr('class', 'test');
    /*25*/
    //$('li').removeClass('www')
    //$('li.www').removeAttr('class');
    /*26*/
    //$('li').toggleClass('www');

    /*
     !NO!
     $('li').each(function () {
     if($(this).attr('class') == 'www'){
     $(this).removeClass('www')
     }else {
     $(this).addClass('www')
     }
     })*/

    /*
     !YES!
     $('li').each(function () {
     if ($(this).hasClass('www') == true) {
     $(this).removeClass('www')
     } else {
     $(this).addClass('www')
     }
     });*/

    /*27*/
    /*$('li').each(function () {
     if($(this).hasClass('www') == true){
     console.log('class "www" is here ' +'(' + $(this).text()+')');
     }
     })*/

    /*28*/
    /*$('input.in').each(function () {
     console.log($(this).val());
     });*/

    /*29*/
    /* $('textarea').each(function () {
     if ($(this).hasClass('text')) {
     console.log($(this).val());
     }
     })*/

    /*30*/
    /*$('input').each(function () {
     console.log($(this).val());
     })*/

    /*31*/
    /*$('input').each(function () {
     //$(this).attr('value', '!')
     $(this).val('!');
     })*/

    /*32*/
    /*$('input.number').each(function () {
     var numSquare = $(this).val() * $(this).val();
     $(this).val(numSquare);
     })*/

    /*33*/
    //$('input').prop('checked', false);

    /*35*/
    /*  $('input').each(function () {
     if($(this).prop('checked') == true){
     $(this).prop('checked', false)
     }else {
     $(this).prop('checked', true)
     }
     })*/

    /*36*/
    //$('input:last').prop('checked', false)

    /*37*/
    $('#wrapper').children(':lt(3)').each(function () {
        var width = $(this).width();
        var height = $(this).height();
        console.log($(this).attr('class') + " Width: " + width + " Height: " + height);
    });
    console.log('-----');

    /*38*/
    $('#wrapper').children(':lt(3)').each(function () {
        var width = $(this).innerWidth();
        var height = $(this).innerHeight();
        console.log($(this).attr('class') + " Width: " + width + " Height: " + height);
    });
    console.log('-----');

    /*39*/
    $('#wrapper').children(':lt(3)').each(function () {
        var width = $(this).outerWidth();
        var height = $(this).outerHeight();
        console.log($(this).attr('class') + " Width: " + width + " Height: " + height);
    });
    console.log('-----');

    /*40*/
    $('#wrapper').children(':lt(3)').each(function () {
        var width = $(this).outerWidth(true);
        var height = $(this).outerHeight(true);
        console.log($(this).attr('class') + " Width: " + width + " Height: " + height);
    });
    console.log('-----');




});































