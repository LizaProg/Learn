window.onload = function () {
    const empty = ' ';

    const x = 'X';
    const o = 'O';

    var player = x;

    var board = [
        [empty, empty, empty],
        [empty, empty, empty],
        [empty, empty, empty]
    ];

    var addListeners = function () {
        var tds = document.getElementsByTagName('td');
        for (var i = 0; i < tds.length; i++) {
            tds[i].onclick = function () {
                /*console.log(this.getAttribute('data-row'));
                console.log(this.getAttribute('data-col'));*/

                var indexRowNum = Number(this.getAttribute('data-row'));
                var indexColNum = Number(this.getAttribute('data-col'));

                board[indexRowNum][indexColNum] = player;

                if (player === x) {
                    player = o;
                } else {
                    player = x;
                }
                render();
                addListeners();
            };
        }
    };


    window.render = function () {
        var status;
        if (player === x) {
            status = "Ходит: X"
        } else {
            status = "Ходит: O"
        }


        var htmlBoard = '';
        for (var j = 0; j < board.length; j++) {
            var row = board[j];
            var htmlRow = '<tr>';
            for (var i = 0; i < row.length; i++) {
                var rowNumber = j;
                var colNumber = i;

                var tdTemplate = '<td data-row=' + rowNumber + ' data-col=' + colNumber + '>';

                if (row[i] === x) {
                    tdTemplate += 'X';
                }
                if (row[i] === o) {
                    tdTemplate += 'O';
                }
                tdTemplate += '</td>';
                htmlRow += tdTemplate;
            }
            htmlRow += '</tr>';
            htmlBoard += htmlRow;
            console.log(htmlRow);
        }
        document.getElementById('status').innerHTML = status;


        var root = document.getElementById('game');
        root.innerHTML = htmlBoard;
    };
    render();
    addListeners();
};

//при нажатии на клетку td ставим класс occupied
// проверяем нет ли у td такого класса
// если есть то выводим "this cell is occupied, please select a different"
//если нет то ставим значок игрока
