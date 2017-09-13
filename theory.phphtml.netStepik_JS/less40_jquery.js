$(function () {
    /*1*/
    /*$('#up').click(function () {
        $('#point').slideUp(1000)
    });
    $('#down').click(function () {
        $('#point').slideDown(1000)
    });*/

    /*2*/
    /*$('#down').prop('disabled', true);
    $('#up').text('Close');
    $('#up').click(function () {
        $('#point').slideToggle(1000);
        if($('#up').html() == 'Close'){
            $('#up').html('Open')
        }else {
            $('#up').html('Close')
        }
    })*/

    /*3*/
    /*$('#up').click(function () {
        $('#point').fadeOut(1000)
    });
    $('#down').click(function () {
        $('#point').fadeIn(1000)
    });
    $('#dark').click(function () {
        $('#point').fadeTo("slow" , 0.2);
    });
    $('#light').click(function () {
        $('#point').fadeTo("slow" , 1);
    })*/

    /*4*/
    $('#up').text('Up');
    $('#up').click(function () {
        $('#point').fadeToggle(2000, function () {
            if ($('#up').html() == 'Up') {
                $('#up').html('Down')
            } else {
                $('#up').html('Up')
            }
        });
    });

    /*9*/
    $('#square').click(function f9() {
        /*$(this).animate({marginLeft: '+=100px'}, 500);*/

        var marginL = parseInt($(this).css('marginLeft'));
        /*$(this).css('marginLeft', marginL + 100 + 'px');*/
        $(this).animate({marginLeft: marginL + 100 + 'px'}, 1000);
    });


});
