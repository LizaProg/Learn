/*1*/
'aa aba abba abbba abbbba abbbbba'.replace(/ab{2,4}a/g, '!');

/*2*/
'aa aba abba abbba abbbba abbbbba'.replace(/ab{1,3}a/g, '!');

/*3*/
'aa aba abba abbba abbbba abbbbba'.replace(/ab{4,}a/g, '!');

/*4*/
'a1a a2a a3a a4a a5a aba aca'.replace(/a\da/g, '!');

/*5*/
'a1a a22a a333a a4444a a55555a aba aca'.replace(/a\d+a/g, '!');

/*6*/
'a1a a22a a333a a4444a a55555a aba aca aa'.replace(/a\d*a/g, '!');

/*7*/
'avb a1b a2b a3b a4b a5b abb acb'.replace(/a\Db/g, '!');

/*8*/
'ave a#b a2b a$b a4b a5b a-b acb'.replace(/a\Wb/g, '!');

/*9*/
'ave a#a a2a a$a a4a a5a a-a aca'.replace(/\s/g, '!');

/*10*/
'aba aea aca aza axa'.replace(/a[bex]a/g, '!');

/*11*/
'aba aea aca aza axa a.a a+a a*a'.replace(/a[b.+*]a/g, '!');
//aba, a.a, a+a, a*a

/*12*/
'avb a1b a2b a3b a4b a5b abb acb'.replace(/a[3-7]b/g, '!');

/*14*/
'ala aka aja aca aha aia'.replace(/a[a-fj-z]a/g, '!');

/*16*/
console.log('aba aea aca aza axa a-a a#a'.replace(/a[^ex ]a/g, '!'));

/*17*/
'wйw wяw wёw wqw'.replace(/w[а-яА-ЯЁё]w/g, '!');

/*18*/
'aAXa aeffa aGha aza ax23a a3sSa'.replace(/a[a-z]+a/g, '!');

/*20*/
'aAXa aeffa aGha aza ax23a a3sSa'.replace(/a[a-z\d]+a/g, '!');

/*21*/
'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ'.replace(/[а-яА-ЯЁё]+/g, '!');

/*22*/
console.log('aaa aaa aaa'.replace(/^aaa/g, '!'));

/*23*/
console.log('aaa aaa aaa'.replace(/aaa$/g, '!'));

console.log('aaa'.replace(/^a+$/g, '!')); //вернет '!' (буква 'a' повторяется один или более раз, заменить всю строку на '!' только если она состоит из одних букв 'a')

/*24*/
console.log('aeeea aeea aea axa axxa axxxa auua'.replace(/a(e+|x+)a/g, '!'));

/*25*/

console.log('aeeea aeea aea axa axxa axxxa'.replace(/a(e{2}|x+)a/g, '!'));

/*26*/
console.log('a\\a abc'.replace(/a\\a/g, '!'));

/*27*/
console.log('a\a a\\a a\\\a'.replace(/a(\\\\{3})a/g, '!'));

/*28*/
console.log("bbb /aaa\ bbb /ccc\".replace(//g, \'!\'));
// replace(//g, '!')
