//стр 38 раб тетр
var read = require("readline-sync");
var age = read.question("Ваш возраст: ");
var output = "";
if (age >= 18 && age < 60){
    output = "Вам еще работать и работать";
}
else if (age > 59){
    output = "Вам пора на пенсию";
}
else if(age >= 1 && age <= 17){
    output = "Не опоздайте в школку";
}
else {
    output = "Некорректный возраст";
}
console.log(output);