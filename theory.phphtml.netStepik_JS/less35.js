/*1*/
/*let [elem1, elem2, ...arr] = ['lorem', 'ipsum', 'dolores', 'write', 'consumer', 'lovely'];
 console.log(elem1);
 console.log(elem2);
 console.log(arr);*/

/*2*/
/*var arr2 = ['lorem', 'ipsum', 'dolores', 'write', 'consumer', 'lovely'];
for (var i = 0; i < arr2.length; i++) {
    var lastElem = arr2[arr2.length - 1];
    var lastButOneElem = arr2[arr2.length - 2];
    if (arr2[i] == lastElem) {
        var elem1_2 = arr2[i];
    }
    if (arr2[i] == lastButOneElem) {
        var elem2_2 = arr2[i];
    }
}
console.log(elem1_2);
console.log(elem2_2);*/

/*
 /!*2(with ES6)*!/
 let array = ['lorem', 'ipsum', 'dolores', 'write', 'consumer', 'lovely'];
 let reverseArr = array.reverse();
 let[el1, el2] = reverseArr;
 console.log(el1);
 console.log(el2);*/

/*/!*3*!/
 let [, el2] = ['lorem', 'ipsum', 'dolores', 'write', 'consumer', 'lovely'];
 console.log(el2);*/

/*4*/
/*let [, el2 = 'bbb', el3 = 'eee'] = ['lorem', 'ipsum', 'dolores', 'write'];
 console.log(el2);
 console.log(el3);*/

/*5*/
/*let human = {
    name: 'Петр',
    surname: 'Петров',
    age: '20 лет'
};
let{name, surname, age} = human;
console.log(name + ' ' + surname + ' ' + age);*/

/*6*/
/*let human = {
    name: 'Петр',
    age: '20 лет'
};

let{name = 'Аноним', surname = 'Анонимович', age = '? лет'} = human;
console.log(name + ' ' + surname + ' ' + age);*/

/*7*/
/*let arr7 = ['lorem', 'ipsum', 'dolores', 'write'];
for(let elArr of arr7){
    console.log(elArr);
}*/

/*9*/
/*let arr = [5, 1, 3];
let res = 0;
for(let val of arr){
    res += val;
}
console.log(res);*/

