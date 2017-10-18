function basicFunc() {
    /*1*/
    /*var elem = document.getElementById('elem');
    function func() {
        console.log(this.value);
    }
    func.call(elem);*/

    /*2*/
    /*var elem = document.getElementById('elem');

    function func(surname, name) {
        console.log(this.value + ', ' + surname + ' ' + name);
    }

    func.call(elem, 'Ivanov', 'Ivan');*/

    /*3*/
    /*var elem = document.getElementById('elem');

    function func(surname, name) {
        console.log(this.value + ', ' + surname + ' ' + name);
    }

    func.apply(elem, ['Ivanov', 'Ivan']);*/

    /*4*/
    /*var elem = document.getElementById('elem');

    function func(surname, name) {
        console.log(this.value + ', ' + surname + ' ' + name);
    }
    var funcBind = func.bind(elem);

    funcBind('Ivanoff', 'Ivan');
    funcBind('Petroff', 'Petr');*/

    /*Example*/
    /*function showFullName() {
        console.log(this.firstName + " " + this.lastName);
    }

    var user = {
        firstName: "Василий",
        lastName: "Петров"
    };
    showFullName.call(user);*/

    /*Example*/
    var user = {
        firstName: "Василий",
        surname: "Петров",
        patronym: "Иванович"
    };

    function showFullName(firstPart, lastPart) {
        console.log(this[firstPart] + " " + this[lastPart]);
    }

    showFullName.call(user, 'firstName', 'patronym');
    showFullName.call(user, 'firstName', 'surname');


    /*Example*/

    // Определим функцию от трех переменных
    function greet(gender, age, name) {
        // if a male, use Mr., else use Ms.
        var salutation = gender === "male" ? "Mr. " : "Ms. ";

        if (age > 25) {
            return "Hello, " + salutation + name + ".";
        }
        else {
            return "Hey, " + name + ".";
        }
    }

// C помощью bind() мы можем получать функции от меньшего числа переменных
    var greetAnAdultMale = greet.bind(null, "male", 45);
    greetAnAdultMale("John Hartlove"); // "Hello, Mr. John Hartlove."

    var greetAYoungster = greet.bind(null, "", 16);
    greetAYoungster("Alex"); // "Hey, Alex."
    greetAYoungster("Emma Waterloo"); // "Hey, Emma Waterloo."


    /*Example*/
    /*заимствование методов массива, например:*/

    var data = {0: "Martin", 1: 78, 2: 67, 3: ["Letta", "Marieta", "Pauline"], length: 4};

    var newArray = Array.prototype.slice.call(data, 0);
    console.log(newArray); // ["Martin", 78, 67, Array[3]]

    /*console.log(Array.prototype.indexOf.call(data, "Martin") === -1 ? false : true); // true*/

    /*console.log(data.indexOf("Martin") === -1 ? false : true);*/
    console.log(Array.prototype.reverse.call(data));
    console.log(Array.prototype.pop.call(data));
    console.log(data);

    console.log(Array.prototype.push.call(data, "Jackie"));
    console.log(data); // {0: Array[3], 1: 67, 2: 78, 3: "Jackie", length: 4}

    /*Example*/

    /*Если нужно получить список переданных параметров в виде массива:*/
    function doSomething() {
        var args = Array.prototype.slice.call(arguments);
        console.log(args);
    }

    doSomething("Water", "Salt", "Glue"); // ["Water", "Salt", "Glue"]

    /*Example*/

    /*об интересной особенности функции apply() - возможности применять функцию к массиву аргументов. Эта особенность позволяет создавать функции от произвольного числа аргументов, например:*/
    function welcomeStudents() {
        var args = Array.prototype.slice.call(arguments),
            lastItem = args.pop();

        console.log("Welcome " + args.join(", ") + ", and " + lastItem + ".");
    }

    welcomeStudents.apply(null, students);

    /*Example*/
    /*Создайте аналогичную функцию sumArgs(), которая будет суммировать все свои аргументы:*/
    function sumArgs() {
        // скопируем reduce из массива
        arguments.reduce = [].reduce;
        return arguments.reduce(function (a, b) {
            return a + b;
        });
    }

    console.log(sumArgs(4, 5, 6)); // 15

}
