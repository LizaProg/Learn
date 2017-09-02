/*/!*8(На each)*!/
 /!*$(function () {
 $('li').each(number);
 function number(index, elem) {
 $(elem).html(index + 1);
 }
 });*!/

 /!*3*!/
 /!*$(function () {
 $('h2').css({color: 'blue', fontSize: '30px'})
 });*!/
 /!*5*!/
 $(function () {
 $('h2.test').css('color', 'red');
 });
 /!*6*!/
 $(function () {
 $('p + p').css('color', 'red');
 });
 /!*7*!/
 $(function () {
 $('li.www + li').css('color', 'red');
 });
 /!*8*!/
 /!*$(function () {
 $('h2 i').css('color', 'red');
 });*!/
 /!*9*!/
 $(function () {
 $('h2 > i').css('color', 'red');
 });*/
/*/!*35*!/
 $(function () {
 $('p').each(function () {
 alert($(this).html());
 })
 });
 /!*36*!/
 $(function () {
 $(':header').each(function () {
 alert($(this).html());
 })
 });*/
/*37*/
/*$(function () {
 $('li').each(function (index) {
 $(this).html(index + 1);
 })
 });*/
/*38*/
$(function () {
    $('li').each(function (index) {
        $(this).append(' ' + index)
    });
});

