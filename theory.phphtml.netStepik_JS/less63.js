//lesson 1
/*
class User{
    getFullName(){
        return this.name + ' ' + this.surname;
    }
}
var user = new User;
user.name = 'Vasiliy';
user.surname = 'Ivanov';
console.log(user.getFullName());
*/

//lesson 2
/*class User {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
}
    getFullName(){
        return this.name + ' ' + this.surname;
    }
}
var user = new User('ivan', 'ivanov');
console.log(user.name);
user.name = 'igor';
console.log(user.getFullName());*/

//lesson3 (геттеры)
//для того чтобы name surname не были доступны снаружи
/*
class User {
    constructor(name, surname){
        this._name = name;
        this._surname = surname;
    }
    getName(){
        return this._name
    }
    getSurname(){
        return this._surname
    }
    getFullName(){
        return this._name + ' ' + this._surname;
    }
}
var user = new User('ivan', 'ivanov');

console.log(user.getName());
console.log(user.getSurname());
console.log(user.getFullName());
*/


/*//lesson 4
class User {
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }

    getName() {
        return this._name
    }

    getSurname() {
        return this._surname
    }

    getFullName() {
        return this._name + ' ' + this._surname;
    }

    setAge(age) {
        if (age > 0 && age < 105) {
            this._age = age;
        }
    }

    getAge() {
        return this._age;

    }
}

var user = new User('ivan', 'ivanov');
user.setAge(108);
console.log(user.getAge());*/

//дуыыщт5
//lesson 4
class User {
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }

    getName() {
        return this._name
    }

    getSurname() {
        return this._surname
    }

    getFullName() {
        return this._name + ' ' + this._surname;
    }

    setAge(age) {
        if (this._checkAge(age)) {
            this._age = age;
        }
    }

    _checkAge(age){
        if (age > 0 && age < 105) {
            return true;
        }else {
            return false;
        }
    }

    getAge() {
        return this._age;
    }

}

var user = new User('ivan', 'ivanov');

user.setAge(30);
console.log(user._checkAge());
console.log(user.getAge());



