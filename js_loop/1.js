var start = 1;
var finish = 7;
var summ = 0;
for(var i = start; i <= finish; i++){
    if(i % 2 == 0){
        continue
    }else {
        summ += i;
    }
}
console.log(summ);