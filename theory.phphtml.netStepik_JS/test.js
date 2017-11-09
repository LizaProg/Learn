/*
/!*


var ctx = document.getElementById('canvas').getContext('2d');
for (var i = 1; i <= 10; i++) {
    ctx.moveTo(40, 10*i + 40);
    ctx.lineTo(150, 10*i + 40);
}
for (var i = 1; i <= 10; i++) {
    ctx.moveTo(10*i + 40, 40);
    ctx.lineTo(10*i + 40, 150);
}
ctx.stroke();*!/

function getCourse(year) {
    var date = new Date(2017, 9, 5);
    var currMonth = date.getMonth() + 1;
    var currYear = date.getFullYear();
    var courseStudent;
    if(currMonth >= 9){
         courseStudent = currYear - year + 1;
    }else {
        courseStudent = currYear - year;
    }
    return courseStudent;
}

console.log(getCourse(2015));*/


/*var elem = document.createElement('div');
elem.style.width = 100 + 'px';
elem.style.height = 100 + 'px';
elem.style.border = '1px solid red';
document.body.appendChild(elem);*/

/*
$('li').each
(
    function(index, value)
    {
        $(this).html(($(this).html())+(index+1));

    }
);*/


function num() {
    for (var i = 0; i < r.length; i++) {
        r[i] = i;
    }
}