// ЯНВАРЬ ЭТО 0, ФЕВРАЛЬ - 1 И ТД
var d = new Date(2014, 11); // найти по дате время
console.log(d);

var da = new Date();
var n = da.getDay(); //возвращает день недели указанной даты по местному времени, где 0 соответствует воскресенью.
console.log(n);

var date = new Date();
var v = date.toTimeString() //возвращает время из указанной даты
console.log(v);

var date1 = new Date();
var w = date1.toDateString() //возвращает дату из указанного времени
console.log(w);

//методы объекта Date
/*
getFullYear()
getUTCFullYear()
getMonth()  0-11
getDate() 1-31
getHours() 0-24
getMinutes() 0-59
getSeconds() 0-59
getMilliseconds() 0-999
getDay() 0-6
0 - воскресенье!!!
*/


//запись информации
/*
 setFullYear()
 setUTCFullYear()
 setMonth()
 setDate()
 setHours()
 setMinutes()
 setSeconds()
 setMilliseconds()
 setTime() не имеет UTS
*/