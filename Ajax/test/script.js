function stGet() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200){
            // 1.преобраз объект в json
            var st_json = JSON.parse(request.responseText);
            console.log(st_json);
            //document.querySelector('#students').innerHTML = st_json;
            // 2.создаем тэг ul
            var container = document.getElementById('students');
            for (var i = 0; i < st_json.length; i++){
                var current = st_json[i];
                var ul = document.createElement('ul');
                var li = document.createElement('li');
                var li2 = document.createElement('li');
                var li3 = document.createElement('li');
                li.innerHTML = 'Имя - ' + current.name;
                li2.innerHTML = 'Возраст - ' + current.age;
                if (current.sex == 'F'){
                    li3.innerHTML = 'Пол - женский';
                }else {
                    li3.innerHTML = 'Пол - мужской'
                }
                ul.appendChild(li);
                ul.appendChild(li2);
                ul.appendChild(li3);
                container.appendChild(ul);
            }
        }
    };
    request.open('GET', 'http://127.0.0.1:5000/students');
    request.send();
}
stGet();