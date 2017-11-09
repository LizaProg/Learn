function onload() {

    /*1*/
    /*class Elem {
        constructor(selector) {
            this.elem = document.querySelector(selector);
        }

        html(text) {
            this.elem.innerHTML = text;
            return this;
        }

        attr(name, value){
            this.elem.setAttribute(name, value);
            return this;
        }
    }

    var elem = new Elem('#test');
    elem.html('!').attr('title', 'Hi!').attr('class', 'www');*/

    /*2*/
    /*class Rectangle {
        constructor(width, height) {
            //создаем эл-т див
            this.elem = document.createElement('div');

            this.elem.style.width = width + 'px';
            this.elem.style.height = height + 'px';
            this.elem.style.border = '1px solid red';
            this.elem.style.margin = 10 + 'px';

            //помещаем див с представленными размерами в конце страницы
            document.body.appendChild(this.elem);
        }

        setWidth(val){
            this.elem.style.width = val + 'px';
        }

        setHeight(val){
            this.elem.style.height = val + 'px';
        }
    }

    var rect1 = new Rectangle(100, 150);
    var rect2 = new Rectangle(200, 100);

    rect1.setWidth(200);
    rect2.setHeight(150);*/

    /*4*/
    /*class Rectangle {
        constructor(width, height) {
            //создаем эл-т див
            this.elem = document.createElement('div');

            this.setWidth(width);
            this.setHeight(height);
            this.elem.style.border = '1px solid red';
            this.elem.style.margin = 10 + 'px';

            //помещаем див с представленными размерами в конце страницы
            document.body.appendChild(this.elem);
        }

        setWidth(val){
            this.elem.style.width = val + 'px';
        }
        getWidth(){
            return parseInt(this.elem.style.width);
        }

        setHeight(val){
            this.elem.style.height = val + 'px';
        }
        getHeight(){
            return parseInt(this.elem.style.height);
        }
    }

    var rect1 = new Rectangle;
    var rect2 = new Rectangle;

    rect1.setWidth(200);
    rect1.setHeight(50);
    rect2.setWidth(100);
    rect2.setHeight(150);
    console.log(rect1.getWidth());
    console.log(rect2.getHeight());*/

    /*TASK 1*/

    /*class myJquery {
        constructor(selector) {
            this.elem = document.querySelector(selector);
        }

        html(text) {
            this.elem.innerHTML = text;
            return this;
        }

        append(text) {
            this.elem.innerHTML = this.elem.innerHTML + ' ' + text;
            return this;
        }

        prepend(text) {
            this.elem.innerHTML = text + ' ' + this.elem.innerHTML;
            return this;
        }

        attr(val, name) {
            this.elem.setAttribute(val, name);
            return this;
        }
    }

    var elem = new myJquery('#task-1');
    elem.html('Hello').append('!').prepend('?').attr('class', 'zzz');

    var elem2 = new myJquery('#task-2');
    elem2.append('ogog').attr('style','color: red');
    */

    /*TASK 2*/

    /*class myJquery {
        constructor(selector) {
            this.elem = document.querySelectorAll(selector);
        }

        html(text) {
            for (var i = 0; i < this.elem.length; i++) {
                this.elem[i].innerHTML = text;
            }
            return this
        }

        append(text) {
            for (var i = 0; i < this.elem.length; i++) {
                this.elem[i].innerHTML = this.elem[i].innerHTML + ' ' + text;
            }
            return this;
        }

        prepend(text) {
            for (var i = 0; i < this.elem.length; i++) {
                this.elem[i].innerHTML = text + ' ' + this.elem[i].innerHTML;
            }

            return this;
        }

        attr(val, name) {
            for (var i = 0; i < this.elem.length; i++) {
                this.elem[i].setAttribute(val, name);
            }
            return this;
        }
    }

    var elem1 = new myJquery('.uuu');
    elem1.html('Hello').append('!!!').prepend('???').attr('class', 'zzz');
}
*/


    class Rectangle {
        constructor(width, height, background) {
            this.elem = document.createElement('div');

            this.setWidth(width);
            this.setHeight(height);
            this.setBackground(background);
            this.elem.style.border = '1px solid red';
            this.elem.style.margin = '10px';

            document.body.appendChild(this.elem);
        }

        setWidth(width) {
            this.elem.style.width = width + 'px';
        }
        getWidth(){
            /*return this.elem.style.width; с px!*/
            return parseInt(this.elem.style.width);
        }
        setHeight(height){
            this.elem.style.height = height + 'px';
        }
        getHeight(){
            return parseInt(this.elem.style.height);
        }
        setBackground(background){
            this.elem.style.background = background;
        }
        getBackground(){
            return this.elem.style.background;
        }


    }

    var rect1 = new Rectangle(100, 100, 'green');
    rect1.setWidth(200);
    console.log(rect1.getWidth());
    var rect2 = new Rectangle(50, 100);
    rect2.setHeight(50);
    console.log(rect2.getHeight());
    rect2.setBackground('red');
    console.log(rect2.getBackground());


}
