/*
 /!*1*!/
 var arr1 = [1, 2, 3, 4, 5];
 var newArr = [];
 arr1.forEach(function (elem) {
 newArr.push(elem * elem);
 });
 console.log(newArr);
 // почему не нужен return
 //почему нельзя объявить newArr внутри функции

 /!*2*!/
 var arr2 = [1, 2, 3, 4, 5];
 var sum2 = 0;
 arr2.forEach(function (elem) {
 sum2 += elem;
 });
 console.log(sum2);

 /!*3*!/
 var arr3 = [1, 2, 3, 4, 5];
 var newArr = arr3.map(function (elem) {
 return elem * elem;
 });
 console.log(newArr);

 /!*4*!/
 var arr4 = [1, 2, 3, 4, 0, 5];
 var check = arr4.every(function (elem) {
 if (elem > 0) {
 return true;
 } else {
 return false;
 }
 });
 console.log(check);
 /!*lol так писать нельзя (return 'all elem in array > 0';)
 * методд возвращает только true false*!/

 /!*5*!/
 /!*every — возвращает true, если !для каждого элемента! массива колбек возвращает значение приводимое к true.
 some — возвращает true, если !хотя бы для одного элемента! массива колбек возвращает значение приводимое к true.*!/
 var arr5 = [1, 2, 3, 4, -56, 0, 5];
 var check5 = arr5.some(function (elem) {
 if (elem < 0) {
 return true;
 } else {
 return false;
 }
 });
 console.log(check5);

 /!*6*!/
 /!*Метод возвращает новый массив, в который войдут только те элементы, для которых переданная функции вернула true.*!/
 var arr6 = [-2, 5, 1, -5, 12, -1, 1, 3, 4, -1, 7];
 var arrPositive = arr6.filter(function (elem) {
 if (elem > 0) {
 return true
 } else {
 return false
 }
 });
 console.log(arrPositive);

 /!*7*!/
 var arr7 = [1, 2, 586, 3, 4, -56, 0, 5, 12, 362];
 var evenArr = arr7.filter(function (elem) {
 if (elem % 2 == 0) {
 return true
 } else {
 return false
 }
 });
 console.log(evenArr);

 /!*8*!/
 var arr8 = ['Оставьте', 'в', 'нем', 'только', 'те', 'строки', ',', 'длина'];
 function func8(elem) {
 if (elem.length > 5) {
 return true
 }
 }
 var newArr8 = arr8.filter(func8);
 console.log(newArr8);

 /!*9*!/
 var arr9 = [1, 2, [3, 4], 5, [6, 7], 'string', ('1,2,3')];
 function func9(elem) {
 if (Array.isArray(elem)) {
 return true
 }
 }
 var arrInArr = arr9.filter(func9);
 console.log(arrInArr);

 /!*10*!/
 var arr10 = [-2, 5, 1, -5, -12, -1, 1, 3, 4, -1, 7];
 var cnt = 0;
 function func10(elem) {
 if (elem < 0) {
 cnt++;
 return true;
 } else {
 return false;
 }
 }
 arr10.filter(func10);
 console.log(cnt);

 /!*11*!/
 // массив.reduce(function(промежуточный результат, элемент, индекс, массив) {
 //     return новый промежуточный результат;
 // }, начальное значение);

 var arr11 = [1, 2, 3, 4, 5, 6];
 var sum = arr11.reduce(function (sumElem, elem) {
 return sumElem + elem;
 }, 0/!*начальное значение*!/);
 console.log(sum);

 /!*12*!/

 /!*function func12(elem) {
 if (elem != 0) {
 res += elem;
 }else {

 }}*!/
 var arr12 = [1, 2, 3, 5, 0, 4, 5, 6];
 var sum12 = 0;
 arr12.reduce(function (res, elem) {
 if (elem != 0) {
 return res + elem;
 } else {
 sum12 = res;
 }
 }, 0);
 /!*for(var i = 0; i < arr12.length; i++){
 if(arr12[i] != 0){
 console.log(sum12);
 break;
 }
 }*!/
 console.log(sum12);

 /!*15*!/
 var arr15 = [1, 2, 3, 5, 0, 4, 1, 1, 0];
 var cnt15 = 0;
 arr15.reduceRight(function (res, elem) {
 if(res < 10){
 cnt15++;
 return res + elem;
 }
 }, 0);
 console.log(cnt15);
 */

/*16*/
var arr16 = [-2, 5, 1, -5, -12, -1, 1, 3, 4, -1, 7, 121, 9, 0, -61, 144];

var filterPositive = arr16.filter(function (elem) {
    if (elem >= 0) {
        return true;
    }
});
console.log(filterPositive);
var squareArr = filterPositive.map(function (el) {
    return Math.sqrt(el);
});
console.log(squareArr);
