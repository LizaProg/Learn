$(function () {
    /*/!*1*!/
     $('li').not('.test').prepend('without .test, ');
     /!*2*!/
     $('li').first().append(', first li!');
     /!*3*!/
     $('li').last().append(', last li!');
     /!*4*!/
     $('li').eq(4).prepend('it is the fifth li! ');
     /!*5*!/
     $('li').eq(-2).prepend('last but one li! ');
     /!*6*!/
     $('li').slice(2, 10).css('color', 'red');
     /!*7*!/
     $('li').filter('.www').append(' with .www')*/

    /*/!*8*!/
     $('li.text').next().prepend('Im next after li.text ');
     /!*9*!/
     $('li.text').prev().prepend('Im before li.text ');
     /!*10*!/
     $('li.text').nextAll().css('color', 'blue');
     /!*11*!/
     $('li.text').prevAll().css('color', 'green');
     /!*12*!/
     /!*$('li.text').nextUntil('li.www').append(' !!!');*!/
     /!*13*!/
     $('li.www').prevUntil('li.text').append(' !!!');
     /!*14*!/
     $('li.www').siblings().append(' im sibling .www ');
     /!*15*!/
     $('li.www').siblings('.text').append('O_O');
     /!*16*!/
     $('li.www').siblings().not('.text').prepend(' ^_^ ');*/

    /*17*/
    /*ищу разных родителей и соседей*/
    //$('.item-1').parent().css('color', 'red');
    //$('.item-1').siblings().css('color', 'red');

    //$('.level-3').parent().css('color', 'red');
    //$('.level-3').siblings().css('color', 'red');

    //$('.level-2').parent().css('color', 'red');
    //$('.item-a').siblings().css('color', 'red');

    //$('.item-a').parent().css('color', 'red');

    /*18*/
    //$('b').parent().css('color', 'red')

    /*19*/
    //$('b').closest('div').css('color', 'red')

    /*20*/
     /*$('h2.www').css('color', 'red').find('.test').css('fontSize', '30px');*/

    /*21*/
    /*$('.www').css('color', 'red').find('p').append('!');*/

    /*22*/
    /*$('p.www').prepend('!').append('!!').add('<p>Новый абзац</p>');*/

    /*23*/
    $('h2').is('h2.test');

    $("p").find("span").css("color", "red");
});





























