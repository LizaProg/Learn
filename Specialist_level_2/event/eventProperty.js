    СВОЙСТВА СОБЫТИЯ
Любой источник
 type //(тип события клик скролл)
 target (W3C DOM) / srcElement (IE) //(ссылка на объект в котором произошло событие)
 currentTarget (W3C DOM) / srcElement (IE)//(текущий элемент в котором событие произошло)

Источник мышь
 button //(какя клавиша нажата)
 altKey, ctrlKey, shiftKey //(вместе с кликом мышки были нажаты alt ctrl key)
 clientX, clientY //(Координаты курсора в момент клика (относительно окна))

Источник клавиатура
 keyCode

    ОТМЕНА ВСПЛЫТИЯ СОБЫТИЯ


    Получение ссылки на событие
     function foo(e){
        e = e || event;
    }

    W3C DOM
     e.stopPropagation();

    IE
     e.cancelBubble = true;


    КРОССБРАУЗЕРНАЯ ФУНКЦИЯ
     function addEvent(el, e, handler){
        if (el.addEventListener) {
            el.addEventListener(e, handler);
        } else if (element.attachEvent) {
            el.attachEvent('on' + e, handler);
        } else {
            el['on' + e] = handler; }
    }
     addEvent(element, 'click', function(e){...});