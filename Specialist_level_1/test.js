// //
// //
// // var a1 = {
// //     name: "Ivan",
// //     age: 24,
// //
// //     whoAmI: function () {
// //         var my = this;
// //         return my.name + " " + my.age;
// //     },
// //
// //     whenDie: function () {
// //         return "Die in " + this.dieIn();
// //     },
// //     dieIn: function () {
// //         return 90 - this.age;
// //     }
// // };
// //
// // console.log(a1.whoAmI());
// // console.log(a1.whenDie());
//
//
// var o = {
//     param: 10,
//
//     method1: function () {
//         var res = this.param + 5;
//         return res;
//     },
//
//     method: function () {
//         var self = this;
//
//         function test() {
//             console.log(self.param);
//         }
//
//         test();
//     }
// };
//
// o.method();
// console.log(o.method1());
// //
// // var pow2Plus100 = function (a) {
// //     var result = Math.pow(a, 2) + 100;
// //     return result;
// // };
// //
// // var plus9 = function (x) {
// //     var result = x + 9;
// //     return result;
// // };
// // console.log(plus9(1));
// //
// // console.log(pow2Plus100(9));
//
//
// var power = function (a, b) {
//     var result = 1;
//
//     for (var i = 0; i < b; i++) {
//         result = result * a;
//     }
//
//     return result;
// };
//
// // console.log(power(2, 0));
//
// var num = 10;
//
// {
//     var t = 10;
// }
//
// var plus = function (y, z, u) {
//     var res = y + z + u;
//     return res;
// };
// console.log(plus(1, 1, 5));
//
//
// console.log(t);
//var o = {
//     param: 10,
//
//     method1: function () {
//         var res = this.param + 5;
//         return res;
//     },
//
//     method: function () {
//         var self = this;
//
//         function test() {
//             console.log(self.param);
//         }
//
//         test();
//     }
// };
//
// o.method();
// console.log(o.method1());


var cat = {
    name: "Boris",
    energy: 100,

    getName: function () {
        var myName = "My name is " + this.name;
        return myName;
    },

    run: function () {
        if (this.energy < 50) {
            return "I tired, mew :( my energy is " + this.energy + " need > 50";
        } else {
            this.energy = this.energy - 50;
            return "I run, mew";
        }
    },

    mew: function () {
        if (this.energy < 10) {
            return "I tired, mew :( my energy is " + this.energy + " need > 10";
        } else {
            this.energy = this.energy - 10;
            return "Mew-mew-mew";
        }
    },

    eat: function () {
        this.energy = this.energy + 100;
        return "Yum-yum-yom my energy is " + this.energy;
    },

    sleep: function () {
        this.energy = this.energy + 200;
        return "ZZZZZ my energy is " + this.energy;
    },

    addEnergy: function (x) {
        this.energy = this.energy + x;
        return "Thanks God my energy is " + this.energy;
    },

    die: function () {
        this.energy = 0;
        return "Bue-bue mew x_x";
    },
};
console.log(cat.getName());
console.log(cat.run());
console.log(cat.run());
console.log(cat.run());
console.log(cat.sleep());
console.log(cat.eat());
console.log(cat.run());
console.log(cat.run());
console.log(cat.mew());
console.log(cat.mew());
console.log(cat.run());
console.log(cat.run());
console.log(cat.run());
console.log(cat.mew());
console.log(cat.run());
console.log(cat.run());
console.log(cat.run());
console.log(cat.addEnergy(100));
console.log(cat.die());
