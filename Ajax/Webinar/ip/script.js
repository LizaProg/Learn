window.onload = function () {
    document.querySelector('#shop_id').onclick = function () {
        ajaxGet();
    }
};
function ajaxGet() {
    var request = new XMLHttpRequest();
    //request.readyState // 0 - запрос создан
    //request.readyState // 1 - запрос открыт
    //request.readyState // 2 - запрос отправлен
    //request.readyState // 3 - частично пришел ответ
    //request.readyState // 4 - полностью пришел ответ

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200){
            //responseText - текст который получили в ответе
            var JSON_ip = JSON.parse(request.responseText);
            //console.log(JSON_ip.ip);
            document.querySelector('#myip').innerHTML = JSON_ip.ip;



        }
    };

    request.open('GET', 'http://ip.jsontest.com');
    request.send();
}