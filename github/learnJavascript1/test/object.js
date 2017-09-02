// var cat = {
//     name: "Ivan Petrovich",
//     age: 10,
//     sex: "M",
//     food: {
//         breakfast: "milk",
//         dinner: "fish",
//         evening_dinner: "pizduli"
//     },
//
//     mew: function () {
//         console.log(this.name +  " say mew mew")
//     }
// };
//
// cat.name;

// console.log(cat.name);
// console.log(cat["name"]);
// console.log(cat.food.dinner);


var o = {
    "user name": "John",
    var: 10,
    2: true
};
console.log(o["user name"]);
console.log(o[2]);
console.log(o.var);

//"var" in o есть ли свойство var в объекте о
//"x" in o есть ли свойство x в объекте о
// var o = {x:10}
// delete o.x удалить объект

console.log("var" in o);
console.log("x" in o);

console.log(o);
delete o["user name"];
delete o.var;
console.log(o);





var user = {
    0: "a",
    1: "b",
    2: "c",
};

for (var i = 0; i in user; i++) {
    console.log(i + ": " + user[i]);
    delete user[i];
}
console.log(user);



var usr = {
    "name": "Petr",
    "surname": "Petrovich",
    "age": 48
};

for (var x in usr) {
    console.log(x + ": " + usr[x]);
}

//// repeat

var usr1 = {
    "name": "Oleg",
    "age": 36,
    "admin": true,
    say: function (word) {
        console.log(word + " from " + this.name);
    }
};
usr1.say("Hello");


//Array

var a = [10, "John", true];
console.log(a[1]);









