/*описать функцию getDate которая
получает в качестве аргумента дату в виде строки в формате описанном в лаб 5-2
возвращает объект типа Date соответстующий переданной дате*/



function getDate(str){
    var f = str.match(/^(\d\d?)-(\d\d?)-(\d{4})$/);
    if (!f)
        throw new Error('Неправильная дата!');
    return new Date(f[3], f[2]-1, f[1]);
}
try {
    var d = getDate("21-10-2014");
    console.log(d.toString());
}
catch(e5){
    console.log(e.message);
}
