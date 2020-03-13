function Board(boardName) {
    this.boardName = boardName;
    this.note = [];

    this.setBoardName = function (boardName) {
        this.boardName = boardName;
    };

    this.getBoardName = function () {
        return this.boardName
    };

    this.getNote = function () {
        return this.note;
    };
    this.addNewNote = function (note) {
        this.note.push(note);
    };
    this.deleteNote = function (indexOfNote) {
        this.note.splice(indexOfNote,1,"[deleted,deleted");
    };
    this.createBoard = function (boardName) {
        return new Board(this.boardName = boardName);
    }
}


// let board = new Board("Sunny");
// document.getElementById("boardName").innerHTML = "Board Name: " + board.getBoardName();

let board = new Board("Sunny");
