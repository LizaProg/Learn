/*1*/
/*class User{
    getFullName(){
        return this.name + ' ' + this.surname;
    }
}

class Worker extends User{
    getSalary(){
        return this.rate * this.days;
    }
}

var worker = new Worker;
worker.name = 'Vasya';
worker.surname = 'Ivanov';
worker.rate = 10;
worker.days = 20;
console.log(worker.getFullName());
console.log(worker.getSalary());*/

/*2*/
class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return this.name + ' ' + this.surname;
    }
}

class Worker extends User {
    constructor(name, surname, rate, days) {
        super(name, surname);
        this.rate = rate;
        this.days = days;
    }

    getFullName() {
        return super.getFullName() + '!';
    }

    getSalary() {
        return this.rate * this.days;
    }
}

var worker = new Worker('Vasya', 'Ivanov', 30, 10);

console.log(worker.getFullName());
console.log(worker.getSalary());