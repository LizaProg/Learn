/*1*/
var jsonName = '["Коля", "Вася", "Петя"]';
var arrName = JSON.parse(jsonName);
console.log(arrName[2]);

/*2*/
var obj = {a: 'aaa', b: 'bbb'};
var json = JSON.stringify(obj, ["a", "b"]);
console.log(json);

