"use strict";

// 5. Создать функцию, генерирующую шахматную доску...

let app = {
    run() {
        let board = this.createBoard();
    },
    /**
     * Метод получает доступ к div`у шахматной доски, циклично вызывает функцию создания
     * клетки(createCell) передавая ей цифры(row), буквы(col), или цвет клетки(colour),
     * полученную клетку добавляет на доску.
     */
    createBoard() {
        let board = document.querySelector('.chess-board');
        let colour = 'white';
        let row = [8, 7, 6, 5, 4, 3, 2, 1];
        let col = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        for (let i = 0; i < 8; i++) {
            board.append(this.createCell(`${row[i]}`));
            for (let j = 0; j < 8; j++) {
                board.append(this.createCell(`${colour}`));
                colour = this.changeColour(colour);
            }
            colour = this.changeColour(colour);
        }
        for (let i = 0; i < col.length; i++) {
            board.append(this.createCell(`${col[i]}`));
        }
    },
    /**
     * Метод создает клетку(div) с полученными:
     * цветом(добавляет класс .cell и .white или .black) если длина переданного параметра > 1,
     * или цифрой/буквой (добавляется в innerText).
     * @param nameOrColour строка с цветом('black'/'white') или одним символом из списков row или col.
     * @returns {HTMLDivElement} возвращает клетку(div) с классами .cell и .white или .black или
     * переданным символом в innerText.
     */
    createCell(nameOrColour) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        if (nameOrColour.length > 1) {
            cell.classList.add(nameOrColour);
        } else {
            cell.innerText = nameOrColour;
        }
        return cell;
    },
    /**
     * Метод меняет цвет на противоположный, возвращает 'white' получив 'black', и наоборот.
     * @param colour строка ('white' или 'black')
     * @returns {string} строка ('black' или 'white')
     */
    changeColour(colour) {
        if (colour == 'white') {
            return 'black';
        } else {
            return 'white';
        }
    },
};

app.run();
