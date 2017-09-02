var d = new Date(); // текущее время и дата
console.log(d);

var dat = new Date(1234567890000); //указываем время
console.log(dat);

var dat1 = new Date(2014, 11); //указываем дату и время (0 это ЯНВАРЬ!)
console.log(dat1);

var da = new Date();
var n = da.getDay(); //возвращает день недели указанной даты по местному времени, где 0 соответствует воскресенью.
console.log(n);

var date = new Date();
var v = date.toTimeString() //возвращает время из указанной даты
console.log(v);

var date1 = new Date();
var w = date1.toDateString() //возвращает дату из указанного времени
console.log(w);


