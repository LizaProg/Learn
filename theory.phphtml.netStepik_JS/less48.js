/*1*/
var str = 'aaab aba bbaaa aab';
console.log(str.replace(/aaa(?=b)/g, '!'));

/*2*/
var str1 = 'aaab abaw bbaaa aab aaas';
console.log(str1.replace(/aaa(?!b)/g, '!'));

/*3*/
var str2 = '1, 3, 5, 7'.replace(/\d+/g, function (curr) {
    return curr * curr;
});
console.log(str2);

/*4*/
var str3 = "2aaa'3'bbb'4''321'23'".replace(/\d+(?=')/g, function (curr) {
    return curr * 2;
});
console.log(str3);

/*5*/

var str4 = "то есть из 'текст' нужно сделать 'тскет' 'проверка' ".replace(/[а-яА-ЯЁё]+(?=')/g, function (curr) {
    return curr.split('').reverse().join('');

});
console.log(str4);

/*6*/
var str5 = '23+ 35=1+1 =; 15 +1=l'.replace(/(\d+)(\s+)?\+(\s)?(\d+)(\s+)?=/g, function (all, curr1, curr2, curr3, curr4) {
    var sum = parseInt(curr1) + parseInt(curr4);
    return all + sum + ' ';
});
console.log(str5);

/*7*/
console.log('Task 7 ' + /^19\d\d|20\d\d|2100$/.test('2101'));
//1900-2100

/*8*/
console.log('Task 8 ' + /^(0\d|1\d|20|21|22|23):(0\d|1\d|2\d|3\d|4\d|5\d)$/.test('23:59'));
//console.log('Task 8 ' + /^([0-2][0-9]):([0-5][0-9])$/.test('29:41'));
//'12:59', '23:41', '00:12', '00:00', '09:15'

/*10*/
console.log('Task 10 '+'containing two identical following one after another letters'.replace(/([a-zA-Z])\1{2,}/g , ''));