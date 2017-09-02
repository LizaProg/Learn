try {
    var x = 1;
    console.log(x*y);
}
catch (e){
    console.log(e.name, e.message);
}
console.log("The end");

/*как выдавать ошибку*/

try {
    var x = 1, y = 1;
    if (y==0)
        throw new Error ("На 0 делить нельзя!");
    if (y==1)
        throw new Error ("На 1 делить нельзя!");
    console.log(x/y);
}
catch (e){
    console.log(e.name, e.message);
}
console.log("The end");