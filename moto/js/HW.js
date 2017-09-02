/*сначала загрузить страницу потом применить скрипт*/
$(document).ready(function () {
    /*64*/
    /* $('#my_links a[href^=documents]');
     $('#forfooter img[title = Производители]');*/
    /*end*/

    /*var textH1 = $('#main_h1').text('Текст измененный с  помощью jquery');*/

    /*var myLogo =  $('img[src*=logo.jpg]');
     myLogo.hide(3000);
     myLogo.show(3000);*/

    /*67*/
    /*var ex = $('div#forheader');
     ex.click(function () {
     console.log('Hi');
     });*/

    /* $('img[alt=Хедер]').click(function () {
     console.log('Hi');
     });*/
    /*end*/

    /*68*/
    /*var myLink = $('a[href$=.PDF]');
     myLink.hide().text('Хехех').show(2000);*/
    /*end*/

    /*69*/
    /*$('img:not([src*=logo.jpg])').hide(5000);*/
    /*end*/

    /*var divWH = $('#div_for_img').height(130).width(815);*/


    /*70*/
    /*function whCalc(elem) {
     //в elem передадут елемент без указания #
     var fullId = "#" + elem;
     var wElem = $(fullId).width();
     var hElem = $(fullId).height();
     $('#forresults').text('Ширина переданного элемента равна: ' + wElem + ', высота переданного элемента равна: ' + hElem);
     }
     whCalc('sale');*/
    /*end*/


    /*72*/
    /*function outEl(idEl, time) {
     if (isNaN(time) || time < 500 || time > 10000) {
     return false
     } else {
     var fullId = "#" + idEl;
     $(fullId).fadeOut(time)
     }
     }
     outEl('my_form', 1000);*/
    /*end*/

    /*$('#img_1').fadeTo(5000, 0.1).fadeTo(5000, 1);
     $('img[src*=footer]').slideUp(5000).slideDown(5000);*/

    /* var fooHeight = $('img[src*=footer]').attr('height');
     $('#forRes').text('Высота футера: ' + fooHeight);

     $('#motoSelect').attr('size', 2);
     $('#moto_table').removeAttr('title').attr('title', 'Новое значение');*/

    /*75*/
    /* function attr(idElem, nameAttr, newAttr) {
     var fullId = "#" + idElem;
     $(fullId).attr(nameAttr, newAttr);
     }

     attr('big', 'title', 'Hi');*/
    /*end*/

    /*//полчение css свойства
     var textSize = $('#main_h1').css('font-size');
     alert(textSize);*/

    /*//изменение css свойства
     $('#main_h1').css('color', '#3F4078');*/

    /*//изменение нескольких css свойств - 1
     $('#main_h1').css('color', '#3F4078').css('font-size', '19px');*/

    /*//изменение нескольких css свойств - 2
     $('#main_h1').css({
     'color': 'red',
     'font-size': '25px'
     });
     */
    /*77*/
    /*  $('#my_h3 span').removeClass('pq').css({
     'border': '1px solid #cc0000',
     'padding': '5px',
     'background-color': '#f6f6f6'
     });*/
    /*end*/

    /*$('#div_for_img').css({'border': '2px solid #cc000'}).animate({'width': '450px'}, 4000, function () {
     alert('готово!')
     });*/

    /*$('#main_h1').css({'border': '2px solid #cc000'}).animate({'paddingTop': '70px'}, 5000, function () {
     alert('готово!')
     });*/

    /*78*/
    /* $('#img_3').css({'border': '1px solid #333'}).animate({'borderWidth': '5px'}, 5000).fadeOut(5000);*/
    /*end*/

    /*var myDiv = $('#div_for_img').css({'border': '2px solid #cc0000'});
     myDiv.before('<p>Данный абзац вставлен с помощью метода "before"</p>');
     myDiv.after('<p>Данный абзац вставлен с помощью метода "after"</p>');
     myDiv.prepend('<p>Данный абзац вставлен с помощью метода "prepend"</p>');
     myDiv.append('<p>Данный абзац вставлен с помощью метода "append"</p>');*/


    /*79*/
    /*   $('body').append('<p id="newparagraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, necessitatibus.</p>');
     $('#newparagraph').css({
     'background-color': '#000',
     'color': '#fff'
     });*/
    /*end*/

    /*   $('img').each(function () {
     //проверяем каждую картинку по ширине если ее ширина больше 400px
     //то скрываем ее
     if ($(this).width() < 400) {
     $(this).fadeOut(3000);
     }
     });*/

    /*80*/
    /*$('img[title*=т]').each(function () {
     if ($(this).height() > 50 && $(this).height() < 100) {
     $(this).css({
     'border': '1px solid #ff0000'
     });
     }
     });*/
    /*end*/

    /*var myDiv = $('#div_for_img').clone(); //склонировали эл-т
     $('#my_form').after(myDiv);

     var myForm = $('my_form').remove(); //удалили форму (она сохранится в переменной)
     $('#moto_table').before(myForm); //вставили удаленную форму*/

    //$('img[width=200], a[href*=documents]').fadeOut(5000);


    /*EVENT*/

    /*var myMoto = document.getElementById('img_1');
     function motoClick() {
     alert('Ширина данной картинки: ' + myMoto.width + ' px');
     }
     myMoto.onclick = motoClick;*/

    /*$('#forheader img').click(function () {
     alert('Вы кликнули по шапке мазафака')
     });

     $(window).scroll(function () {
     alert('Произошло событие прокрутки страницы мазафака')
     });
     */

    /*$('#my_form').hide();
     $('#div_for_img img').click(function () {
     var moto = $(this).clone(); //клонируем тот моцык на который кликнули
     $('#forresults').append(moto);
     })
     */

    /*88-1*/
    /*$('#moto_models li').click(function () {
     var txt = $(this).text();
     $('#moto_table tbody').append('<tr><td>' + txt + '</td><td>' + 'цена' + '</td></tr>')
     });*/
    /*end*/

    /*88-2*/
    /*var motoTable = $('#moto_table tr');
     motoTable.mouseover(function () {
     $(this).css({
     'background-color': '#1F233C',
     'color': '#fff'
     })
     });
     motoTable.mouseout(function () {
     $(this).css({
     'background-color': '',
     'color': ''
     })
     });*/
    /*end*/

    /*88-2-Jenya*/
    /*var motoTable = $('#moto_table tr');
     motoTable.mouseover(function () {
     $(this).addClass('myColor')
     });
     motoTable.mouseout(function () {
     $(this).removeClass('myColor')
     });*/
    /*end*/

    /*$('#moto_table tr').hover(function () {
     $(this).addClass('myColor');
     }, function () {
     $(this).removeClass('myColor')
     });*/

    /* $('#myFormHide').toggle(function () {
     $('#my_form').fadeOut(1000);
     $(this).text('Развернуть форму')
     }, function () {
     $('#my_form').fadeIn(1000);
     $(this).text('Свернуть форму')
     })*/

    /*89*/
    /*$('#my_button').hover(function () {
     $(this).css({
     'background-color': '#32375D',
     'color': '#fff'})
     }, function () {
     $(this).css({
     'background-color': '',
     'color': ''})
     });

     $('#moto_table tr').toggle(function () {
     $(this).css({
     'background-color': '#1F233C',
     'color': '#fff'})
     }, function () {
     $(this).css({
     'background-color': '',
     'color': ''})
     });*/

    /*end*/

    /*$('#div_for_img').click(function (e) {
     alert('Координата щелчка по оси Х: ' + e.screenX);
     //от экрана монитора (также screen Y)
     })

     $('#div_for_img').click(function (e) {
     alert('Координата щелчка по оси Х: ' + e.pageX);
     //от экрана браузера (также screen Y)
     })

     $('#div_for_img').click(function (e) {
     alert('Была ли нажата клавиша alt: ' + e.altKey);
     //нажата ли клавиша alt при нажатии мыши (shiftKey, ctrlKey)
     })

     $('#div_for_img').click(function (e) {
     var myObj = e.target;
     alert('Id объета: ' + myObj.id);
     //узнать id объекта по которому кликнули
     })*/

    /*90*/
    /*$('#div_for_img img').toggle(function (e) {
     if (e.shiftKey){
     $(this).css({'border':'4px solid #cc0000'})
     }else {
     $(this).css({'border':'4px solid #333'})
     }
     }, function (e) {
     $(this).css({'border':'none'})
     });*/
    /*end*/

    /* $('#superlink').click(function (e) {
     e.preventDefault();
     $('#forresults').text('Вместо перехода по ссылке добавили этот текст')
     })*/

    /*91*/
    /*$('#my_button').click(function (e) {
     var answer = confirm('Вы подтверждаете правильность ввода данных?');
     if (answer == false) {
     e.preventDefault()
     }
     });*/
    /*end*/

    /*$('#my_form :text').fadeOut(1000);
     $('#my_form :checked').fadeOut(1000);
     $('#my_form :checkbox:checked').fadeOut(1000); //скрыть только отмеченные чекбоксы
     $('#my_form :radio:checked').fadeOut(1000); //скрыть только отмеченные радио кнопки
     $('#my_form #motoSelect :selected').fadeOut(1000); //скрыть выбранный эл-т списка*/

    /*//в всплыв окне появися то что вы написали в textArea
     $('#checkButton').click(function () {
     alert($('#textArea').val())
     }) */

    /*//выбранный эл-т
     $('#checkButton').click(function () {
     alert($('#motoSelect :selected').val())
     })*/

    /*$('#checkButton').click(function () {
     alert($('#my_form :radio:checked').val())
     })*/

    /*$('#checkButton').click(function () {
     //выбрали все отмеченные чекбоксы и у каждого:
     $(':checkbox:checked').each(function () {
     //вывели значение
     alert($(this).val())
     })
     })*/


    //SUBMIT FOCUS

    /*$('#my_form').submit(function (e) {
     if($('#email').val() == ''){
     e.preventDefault();
     alert('Вы не ввели e-mail!')
     }
     })*/

    $('#email').focus(function () {
        $(this).addClass('onFocus')
    }).blur(function () {
        $(this).removeClass('onFocus')
    });

    $('#motoSelect').change(function () {
        //вернет то что выбрал пользователь
        var choiceUser = $('#motoSelect :selected').val();
        if (choiceUser == 1) {
            $('#daysSelect').html('<option value="1">1</option><option value = "2"> 2 </option>');
        } else if (choiceUser == 2) {
            $('#daysSelect').html('<option value="1">1</option><option value = "2"> 2 </option><option value="3">3</option><option value = "4">4</option>');
        } else if (choiceUser == 3) {
            $('#daysSelect').html('<option value="1">1</option>');
        } else {
            $('#daysSelect').html('<option value="1">1</option><option value = "2"> 2 </option><option value="3">3</option>');
        }
    });

    $('#motoSelect').change(function () {
        var choiceUs = $('#motoSelect :selected').val();
        if (choiceUs == 3) {
            $('#bag').attr('disabled', 'disabled');
            $('label[for=bag]').css({'color': 'red'})
        } else {
            $('#bag').attr('disabled', false);
            $('label[for=bag]').css({'color': ''})
        }
    })

    /*97 + 98*/
    var emailDef = $('#email');
    var regEx = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;

    emailDef.focus(function () {
        if ($(this).val() == $(this).attr('defaultValue')) {
            $(this).val('');
        }
    });
    emailDef.blur(function () {
        var userEmail = $(this).val();
        //если пользоват ничего не вводит то вставляем то что было по умолчанию
        //также если пользоват ввел некорректное значение потом стер его то у него после ввода останется красное поле нужно заменить его на серый цвет
        if (userEmail == '') {
            $(this).val($(this).attr('defaultValue')).css('border', '1px solid #ccс');
        }
        //если введено то что не совпадает с рег выраж то ставим красную рамку
        else if (userEmail.search(regEx) == -1) {
            $(this).css('border', '1px solid #cc0000')
        }
        //если совпало с рег выраж то добавить рамку зеленую
        else {
            $(this).css('border', '1px solid #00cc00')
        }
    });

    /*//заблокировать кнопку после 1 щечка
    $('#my_button').click(function () {
        $(this).attr('disabled', 'disabled');
        $(this).attr('value', 'Отправляем данные...');
    });
    /!*end*!/*/


}); //конец ready




































