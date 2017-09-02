function buttonClick(button) {
    alert("Произошло нажатие на кнопку. Имя кнопки: " + button.name + ", значение: " + button.value + ".")
}

var counter = 0;
function onMouseCounter(element) {
    counter++;
    element.innerHTML = "На этот текст было наведено: " + counter + " раз";
}

//color square
var el = document.getElementById('box');
el.onclick = function () {
    this.style.backgroundColor = "yellow";
};

//day/night
var buttons = document.getElementsByTagName('button');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        if (this.id === 'day') {
            document.body.className = 'day';
        } else if (this.id === 'night') {
            document.body.className = 'night';
        }
    }
}