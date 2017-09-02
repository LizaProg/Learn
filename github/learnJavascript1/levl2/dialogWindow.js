
function demoOpen(p){
    window.open();
} //OPen открывает новое окно

var w
function demoOpen(p){
    w = window.open("", "x");
}
function demoClose(){
    w.close();
} //закрыть окрытое окно

function demoOpen(p){
    w = window.open("", "x", p);
    //w.blur();
}//заблюрить окно(не в фокусе)



