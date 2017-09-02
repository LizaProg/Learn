function greeting(name) {
    var string = "hello " + name;
    return string;
}

function plus(x, y) {
    return x + y;
}

var a = plus(4, 5);
console.log(a);

var cat = {
    name: "Ivan",
    say: function () {
        return this.name + " says Mew";
    }
};

cat.say();


// var b = greeting("Liza");
