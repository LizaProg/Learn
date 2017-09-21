/*1*/
var a = 'ahb acb aeb aeeb adcb axeb';
a.replace(/a.b/g, '!');

/*2*/
'aba aca aea abba adca abea'.replace(/a..a/g, '!');

/*3*/
'aba aca aea abba adca abea'.replace(/ab.a/g, '!');

/*4*/
'aa aba abba abbba abca abea'.replace(/ab+a/g, '!');

/*5*/
'aa aba abba abbba abca abea'.replace(/ab*a/g, '!');

/*6*/
'aa aba abba abbba abca abea'.replace(/ab?a/g, '!');

/*7*/
'aa aba abba abbba abca abea'.replace(/ab*a/g, '!');

/*8*/
'ab abab abab abababab abea'.replace(/(ab)+/g, '!');

/*9*/
'a.a aba aea'.replace(/a\.a/g, '!');

/*10*/
'2+3 223 2223'.replace(/2\+3/g, '!');

/*11*/
'23 2+3 2++3 2+++3 345 567'.replace(/2\++3/g, '!');

/*12*/
'23 2+3 2++3 2+++3 345 567'.replace(/2\+*3/g, '!');

/*13*/
'*+ *q+ *qq+ *qqq+ *qqq qqq+'.replace(/\*q+\+/g, '!');

/*14*/
'aba accca azzza wwwwa ajkhja'.replace(/a.+?a/g, '!');


