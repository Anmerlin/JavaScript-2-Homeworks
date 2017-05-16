// Lesson 1 c использованием функционального ООП

'use strict';
/*
 * 1. Класс создания доски разной размерности и цветовой гаммы (доска может быть не тоько квадратной) "Board"
 *
 * elem - элемент в котором будут доска
 * sizeСellBoard - размер ячейки доски
 * blackCell - цвет черного поля 
 * whiteCell - цвет белого поля
 * masCoordVert - массив координат доски по вертикали, например [8,7,6,5,4]
 * masCoordHor - массив координат доски по горизонтали, например [a,b,c,d,e]
 * displayVisCoordVert - отрбражение вертикальной линейки координат
 * displayVisCoordHor - отрбражение горизонтальной линейки координат
 *
 */

function Board(elem, sizeCellBoard, blackCell, whiteCell, masCoordVert, masCoordHor, displayVisCoordVert, displayVisCoordHor) {

    displayVisCoordVert = displayVisCoordVert || true;
    displayVisCoordHor = displayVisCoordHor || true;
    var lenX = masCoordHor.length + displayVisCoordVert * 2,
        lenY = masCoordVert.length + displayVisCoordHor * 2,
        elemClick = ""; // в переменной хранится выделенный div (ячейка доски)

    this.getSelection = function () {
        return elemClick;
    };

    function onClickCell() {

        if (elemClick != "") {
            elemClick.classList.remove('cell-select');
            elemClick.removeAttribute('tabIndex');
        }

        this.classList.add('cell-select');
        this.setAttribute('tabIndex', 0);
        elemClick = this;
        this.focus();
    }

    function onFocusCell() {
        var newDiv = document.getElementById(elem.id + '-pozition');
        newDiv.innerHTML = 'Координаты ячейки шахматной доски: ' + masCoordHor[elemClick.y] + masCoordVert[elemClick.x];
    }

    /*
     * Создаем доску со всеми элементами
     */

    function createBoard() {

        var x, y;

        elem.style.width = (lenX * sizeCellBoard) + 'px';

        for (var i = 0; i < lenY; i++) {
            for (var j = 0; j < lenX; j++) {

                x = i;
                y = j;

                var newDiv = document.createElement('div');
                newDiv.setAttribute('class', 'cell-board');
                newDiv.style.width = sizeCellBoard + 'px';
                newDiv.style.height = sizeCellBoard + 'px';
                newDiv.style.lineHeight = sizeCellBoard + 'px';
                newDiv.id = 'row-' + elem.id + '-' + i + j;

                if (displayVisCoordVert && (j == 0 || j == lenX - 1)) {

                    if (displayVisCoordHor)
                        newDiv.innerHTML = masCoordVert[i - 1] || '';
                    else
                        newDiv.innerHTML = masCoordVert[i] || '';

                } else if (displayVisCoordHor && (i == 0 || i == lenY - 1)) {

                    if (displayVisCoordVert)
                        newDiv.innerHTML = masCoordHor[j - 1] || '';
                    else
                        newDiv.innerHTML = masCoordHor[j] || '';

                } else {

                    if (displayVisCoordHor) x--;
                    if (displayVisCoordVert) y--;

                    newDiv.id = elem.id + '-' + x + y;

                    if ((x + y) % 2 == 0)
                        newDiv.style.backgroundColor = blackCell;
                    else
                        newDiv.style.backgroundColor = whiteCell;

                    newDiv.x = x;
                    newDiv.y = y;
                    newDiv.onfocus = onFocusCell;
                    newDiv.onclick = onClickCell;
                }

                document.getElementById('chessboard').appendChild(newDiv);
            } //end for j
        } //end for i

    };

    this.run = function () {
        createBoard();
    };

};

/* 
 * 2. Класс создания шахматной доски "ChessBoard"
 */

function ChessBoard(elem, sizeCellBoard, blackCell, whiteCell) {
    var rowLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        colNumbers = [8, 7, 6, 5, 4, 3, 2, 1];

    Board.call(this, elem, sizeCellBoard, blackCell, whiteCell, colNumbers, rowLetters, true, true);

};

/*
 * 3. Класссоздания шахматной игры "Chess"
 */

function Chess(elem, chBoard) {
    ChessBoard.call(this, elem, chBoard.sizeCellBoard, chBoard.blackCell, chBoard.whiteCell);

    var parentRun = this.run;
    this.run = function () {
        parentRun();
    }

};

// Определяем значения шахматной доски
var config = {
    sizeCellBoard: 50, // размер ячейки доски
    blackCell: '#000', // цвет черного поля
    whiteCell: '#fff' // цвет светлого поля
};

var elem = document.getElementById('chessboard'),
    nChess = new Chess(elem, config); // создаем шахматы

nChess.run(); // создаем доску
