$(function () {
    /*/!*1*!/
    /!*$('p').click(function () {
        alert($(this).text());
    });*!/
    /!*2*!/
    $('a').mouseover(function fu() {
        $(this).append('(' + $(this).attr('href') + ')');
        $(this).unbind('mouseover', fu);
    });
    /!*4*!/
    /!*$('.inp').blur(function () {
        $('#test').append($(this).val()+'<br>');
    })*!/
    /!*5*!/
    $('input').click(function f() {
        alert($(this).val());
        $(this).unbind('click', f);
    });

    /!*6*!/
    /!*$('.num').click(function f6() {
        $(this).append(' Square this num = ' + $(this).text() * $(this).text());
        $(this).unbind('click', f6)
    });*!/

    /!*7*!/
    $('.num').dblclick(function f7() {
        $(this).append(' * 2 = ' + $(this).text() * 2);
        $(this).unbind('dblclick', f7)
    });*/

    /*8*/
    $('a').on('mouseover', function f8() {
        $(this).append('(' + $(this).attr('href') + ')');
        $(this).off('mouseover', f8);
    });

    /*10*/
    $('p').one('click', function () {
        $(this).append('!');
    });

    /*11*/
    $('ol').on('click', 'li', function () {
        $(this).append('!');
    });
    $('#btn').click(function () {
        $('ol').append('<li>Point</li>');
    });


    /*12*/
    $('table').on('click', 'td', function () {
        var name = prompt('Name new user');
        $(this).text(name);
    });
    $('#addUsr').click(function () {
       $('table').append('<tr><td>New</td><td>User</td></tr>')
    });





});










