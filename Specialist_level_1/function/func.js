function sayHello(name, sign) {
    name = name || "Guest";
    sign = sign || "!";
    console.log("Hello, " + name + sign );
}
sayHello("John", " ;)");
var n = "Mike";
sayHello(n);
sayHello();