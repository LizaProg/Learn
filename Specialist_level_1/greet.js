function say(greet) {
    return function (name) {
        return greet + ", " + name + "!";
    };
}

var en = say("Hello");
console.log(en("John"));
console.log(en("Mike"));

var ru = say("Привет");
console.log(ru("Вася"));
console.log(ru("Петя"));