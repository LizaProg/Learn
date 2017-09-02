function User(name, age) {
    this.name = name;
    this.age = age;
    this.admin = false;
    /*this.say = function (w) {
        console.log(this.name, ":", w)
    };*/
}

User.prototype.say = function (w) {
    console.log(this.name, ":", w)
};

var u = new User('John', 25);

for (var i in u){
    if(u.hasOwnProperty(i))
        console.log(i, ":", u[i]);
} //hasOwnProperty использоуется для определения того, содержит ли объект указанное свойство в качестве собственного свойства объекта

/*
var u1 = new User("Nikolay", 22);
console.log(u1);
console.log(u1.constructor); //какой констрктор
var u2 = new User("Viktor", 25);
u2.admin = true;
console.log(u2);
*/


//сделать чтобы у числа был метод pow
var n = 6;
Number.prototype.pow = function (x) {
    return Math.pow(this.valueOf(), x)
};
console.log(n.pow(3));























