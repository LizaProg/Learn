/*1*/
console.log('aaa@bbb eee7@kkk'.replace(/([a-zA-Z0-9]+)@([a-zA-Z0-9]+)/g, '$2@$1'));

/*2*/
console.log('a1b2c3'.replace(/a([0-9]+)b([0-9]+)c([0-9]+)/g, 'a$1$1b$2$2c$3$3'));
console.log('a1b2c3'.replace(/(\d)/g, '$1$1'));

/*3*/
console.log(/^[a-zA-Z0-9]+\W?[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test('lizazakh9@gmail.com'));
//mymail@mail.ru, my.mail@mail.ru, my-mail@mail.ru, my_mail@mail.ru, mail@mail.com, mail@mail.by, mail@yandex.ru.

/*4*/
var str = 'maybe my e-mail is lizazakh9@gmail.com but it is not accurately';
var email = str.match(/[a-zA-Z0-9]+(\.-_)?[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
console.log(email[0]);

/*5*/
var domen = 'my-site.com';
var check = /^[a-zA-Z0-9]+\W?[a-z0-9]+\.[a-z]{2,3}$/.test(domen);
console.log(check);
//site.ru, site.com, my-site.com

/*6+7*/
/*!!!!!!!!!разобраться с -_ в середине*/
var domen2 = 'http://site-kh.ru';
var check2 = /^https?:(\/{2})[a-zA-Z0-9]+(\.-_)?\.[a-z]{2,3}$/.test(domen2);
console.log('Task 6 ' + check2);
//http://site.ru, http://site.com.

/*8*/
var domen3 = 'ptth://site.ru';
var check3 = /^https?/.test(domen3);
console.log('Task 8 ' + check3);

/*9+10*/
var fileName = 'index_ho8_MY.php';
console.log('Task 9 ' + /\.(txt|html|php|jpeg|jpg)$/.test(fileName));
//txt, html или php.

/*11*/
var str1 = 'o123456789111';
console.log('Task 11 ' + /^[0-9]{1,12}$/.test(str1));

/*12*/
var str2 = '11lorem 12 ipsum 1 d1olores1';
var check4 = str2.match(/[0-9]+/g);
var res = 0;
for (var i = 0; i < check4.length; i++){
    res += parseInt(check4[i]);
}
console.log(res);

/*13*/
var domen4 = 'https://sitej.com';
var check5 = domen4.replace(/^(https?:\/{2})([a-zA-Z0-9]+(\.-_)?)\.([a-z]{2,3})$/g, '<a href="$1$2\.$4">$2.$4</a>');
console.log('Task 13 ' + check5);
//http://site.ru, http://site.com на <a href="http://site.ru">site.ru</a>

/*14*/
var str3 = 'С       помощью replace замените все повторяющиеся   , пробелы на        один    .';
var check6 = str3.replace(/\s+/g, ' ');
console.log(check6);

// replace(//g, '!')
