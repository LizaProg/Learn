/*custom object*/

function User(name, age) {
    this.name = name;
    this.age = age;
    this.admin = false;
}
User.prototype.say = function (w) {
    console.log(this.name, ":", w);
};

var u1 = new User("John", 25);
u1.admin = true;
console.log(u1);

var u2 = new User("Mike", 33);
console.log(u2);

console.log(u1.constructor);

/**/
var x1 = new Object();    //  new Object object
var x2 = new String();    //  new String object
var x3 = new Number();    //  new Number object
var x4 = new Boolean();   //  new Boolean object
var x5 = new Array();     //  new Array object
var	x6 = new RegExp();    //  new RegExp object
var x7 = new Function();  //  new Function object
var x8 = new Date();      //  new Date object

/**/
var accept = ['gmail', 'yandex', 'yahoo'];
var re = new RegExp(accept.join('|'), "i");

/**/
function func() {
    return Array.prototype.slice.call(arguments);
}

/**/
Number.prototype.pow = function (x) {
    return Math.pow(this.valueOf(), x);
};