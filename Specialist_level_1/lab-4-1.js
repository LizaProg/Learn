/*1.cоздать пустой объект book1
  2.добавить объекту свойстсва title, pubYear, price c произвольными значениями
  3.создать объект book2
  4.установите свойства title, pubYear, price с произвоьными значениями в момент создания объекта
  5.выведите свойства объектов в цикле
 */
var book1 = {};
book1.title = "Harry Potter";
book1.pubYear = 2001;
book1.price = 100;

var book2 = {
    title: "bad book",
    pubYear: 2007,
    price: 1500
};

for (var propertyName in book1) {
    console.log("book1[" + propertyName + "]" + book1[propertyName]);
    console.log("book2[" + propertyName + "]" + book2[propertyName]);
}
for (var propertyName in book1){
    var propertyValue = book1[propertyName];
    console.log(propertyName + ": " + propertyValue);
}