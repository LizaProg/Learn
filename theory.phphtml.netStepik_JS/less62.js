/*
/!*class Worker {
    constructor(name, surname, rate, days){
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    getName() {
        return this._name
    }

    getSurname() {
        return this._surname
    }

    getRate(){
        return this._rate;
    }

    setRate(rate){
        this._rate = rate;
    }

    getDays(){
        return this._days;
    }

    setDays(days){
        this._days = days;
    }

    _getSalary(rate, days){
        return (this._rate * this._days);
    }
    
}

var workerKuzma = new Worker('Kuzma', 'Korovin', 5000, 20);
var workerVasiliy = new Worker('Vasiliy', 'Petuhov', 7000, 10);

console.log(workerKuzma.getName());
console.log(workerKuzma.getSurname());
console.log(workerKuzma.getRate());
console.log(workerKuzma.getDays());

console.log(workerKuzma.getName()+' is salary '+workerKuzma._getSalary() + ' Вr');
console.log(workerVasiliy.getName()+' is salary '+workerVasiliy._getSalary()+ ' Вr');

console.log('Sum of their incomes: ' + (workerKuzma._getSalary() + workerVasiliy._getSalary())+ ' Вr');

workerVasiliy.setRate(8000);
console.log(workerVasiliy.getName()+ ' increase rate: ' + workerVasiliy.getRate());

workerKuzma.setDays(18);
console.log(workerKuzma.getName() + ' decrease days: ' + workerKuzma.getDays());

console.log('Sum of their incomes: ' + (workerKuzma._getSalary() + workerVasiliy._getSalary())+ ' Вr');*!/

/!*4*!/

class MyString {
    constructor(str) {
        this._str = str;
    }

    reverse() {
        return this._str.split('').reverse().join('');
    }

    ucFirst() {
        return this._str.charAt(0).toUpperCase() + this._str.slice(1);
    }

    setStr(str) {
        this._str = str;
    }

    ucWords() {
        var arr = this._str.split(' ');
        var res = '';
        for (var i = 0; i < arr.length; i++) {
            var curent = arr[i][0].toUpperCase() + arr[i].slice(1);
            if (i == (arr.length - 1)) {
                res = res + curent;
            } else {
                res = res + curent + ' ';
            }

        }
        return res;
    }
}

var myStr = new MyString('abc');
console.log(myStr.reverse());
console.log(myStr.ucFirst());
myStr.setStr('abc kds ksl');
console.log(myStr.ucWords());

*/

/*function ucWords(str) {
    /!*var arr = str.split('');
    var res = '';
    for (var i = 0; i < arr.length; i++) {
        var curr = arr[i];
        var next = arr[i + 1];
        var testC = /\w/.test(curr);
        var testN = /\w/.test(next);
        if (testC == true && testN == true) {
            res = res + curr;
        } else if (testC == true && testN == false) {
            res = res + curr;
        } else (testC == false && testN == false)
        {
            res = res + ' ';
        }
    }
    return res;*!/

    /!*var arr = str.split('');
    var res = '';
    for (var i = 0; i < arr.length; i++) {
        var curr = arr[i];
        var next = arr[i + 1];
        if (curr != ' ' && next != ' ') {
            res = res + curr;
        } else if (curr != ' ' && next == ' ') {
            res = res + curr;
        } else (curr == ' ' && next == ' ')
        {
        res = res + ' ';
        }
    }
    return res*!/

   return str.replace(/\s{2,}/g, ' ');
}

console.log(ucWords('abc    hkk ih'));*/


/*5*/
class Validator {

    isEmail(str) {
        var regExp = /^[a-zA-Z0-9]+\W?[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(str);
        if(regExp){
            return true
        }else {
            return false
        }
    }

    isDomain(str) {
        var regExp = /^[a-zA-Z0-9]+\W?[a-z0-9]+\.[a-z]{2,3}$/.test(str);
        if(regExp){
            return true
        }else {
            return false
        }
    }

    isDate(str) {
        var regExp = /^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)\d\d$/.test(str);
        if(regExp){
            return true
        }else {
            return false
        }
    }

    isPhone(str) {
        return /^(\+[7])?[8]?\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(str);

    }
}

var validator = new Validator;

console.log(validator.isEmail('phphtml@mailru'));
console.log(validator.isDomain('phphtml.z'));
console.log(validator.isDate('12.01.1990'));
console.log(validator.isPhone('8(904)817-68-92'));
