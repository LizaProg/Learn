$(function () {
    $("#date").datepicker({
        dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        firstDay: 1
    }).datepicker("option", "dateFormat", "dd.mm.yy");

    $('#setDay').click(function () {
        $('#date').datepicker('setDate', '11.05.1998');
    });
    $('#open').click(function () {
        $('#date').datepicker('show');
    });
    $('#close').click(function () {
        $('#date').datepicker('hide');
    })

});

