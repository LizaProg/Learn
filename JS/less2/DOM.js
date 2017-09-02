//DOM - объектная молель документа
//каждому тэгу на странице в соответствие ставится свой объект
//св-ва объекта явл атрибутами тэга

//корневой эл-т DOM - дерева - обект document

//доступ к элементам html с помощью метода querySelector
var logo = document.body.querySelector('.logo img');
//после можно изменить значение
logo.src = 'https://image.freepik.com/free-vector/no-translate-detected_634639.jpg';