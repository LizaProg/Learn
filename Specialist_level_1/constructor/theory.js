var s = "Hello"; //это примитивный тип у него нет методов
console.log(s.length);
//var tmp = new String(s) (интерпритатор создает временный объект и туда попадает s )
//tmp.length далее обращается к этой временной переменной
// delete tmp потом ее удаляет


/*var o1 = {};
 var o2 = new Object(); разница между литералом и конструктором никакой!!!*/

//КОГДА ЖЕ НУЖЕН КОНСТРУКТОР???

/*var a = new Array(5);
 var a = [];
 если используя констрктор передаем только 1 значение (new Array(4)) то создается массив длинной которую передали
 */

/*
 var accept = ['gmail', 'yandex', 'yahoo'];
 var re = new RegExp (accept.join('|'), "i");
 чтобы из массива сделать регулярное выражение
 */
