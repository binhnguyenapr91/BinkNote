const CONFIRM_UPDATE_STRING = "Are you sure to update this note?";
const CONFIRM_DELETE_STRING = "Are you sure to delete this note?";
const DIFFERENCE_INDEX_AND_KEY = 1;
const NOTE_PROCESSED_AREA = "noteContainer0";

let activeUser = loadUserLoggedIn();
//console to check
console.table(window.localStorage);
console.table(activeUser);
let keyOfActiveUser = getKeyOfActiveUser(activeUser.username);
//console to check
console.log("Key of active user:" + keyOfActiveUser);
document.getElementById("accountName").innerHTML = activeUser.username + "/" + activeUser.email;
document.getElementById("boardName").innerHTML = "Board Name: " + board.getBoardName();

//Function get key of active user in Local Storage
function getKeyOfActiveUser(username) {
    let arrUser = [];
    let index = DIFFERENCE_INDEX_AND_KEY;
    while (index <= window.localStorage.length) {
        arrUser.push(JSON.parse(window.localStorage.getItem(index.toString())));
        index++;
    }
    for (let j = 0; j < arrUser.length; j++) {
        if (username === arrUser[j].username) {
            return j + DIFFERENCE_INDEX_AND_KEY;
        }
    }
}

//Load Note of active user to the board
function loadBoard() {
    let listNotes = activeUser.board.note;
    for (let index = 0; index < listNotes.length; index++) {
        let html = "<div class=\"noteItem\" id=\"" + (index) + "\" draggable=\"true\" ondragstart=\"drag(event)\">\n" +
            "                        <div class=\"noteTitle\">" + listNotes[index].noteTitle + "</div>\n" +
            "                        <div class=\"noteContent\">" + listNotes[index].noteContent + "</div>\n" +
            "                    </div>";
        document.getElementById("noteContainer" + (index + 1)).innerHTML = html;
    }
}

//Save to Board to active User
function saveBoard() {
    activeUser.board = board;
    //console to check
    console.table(board);
    console.table(activeUser);
    updateDataToLocalStorage(keyOfActiveUser, activeUser);
}

//Actions CRUD with note
//CREATE ok

function createNewNote() {
    let note = new Note();
    let inputNoteTile = document.getElementById("txtNoteTitle").value;
    let inputNoteContent = document.getElementById("txaInputNoteContent").value;

    note.setNoteTitle(inputNoteTile);
    note.setNoteContent(inputNoteContent);
    note.createNote();
    board.addNewNote(note);
    let idOfNote = board.note.length;
    let html = "<div class=\"noteItem\" id=\"" + (idOfNote) + "\" draggable=\"true\" ondragstart=\"drag(event)\">\n" +
        "                        <div class=\"noteTitle\">" + note.getNoteTitle() + "</div>\n" +
        "                        <div class=\"noteContent\">" + note.getNoteContent() + "</div>\n" +
        "                    </div>";

    document.getElementById(NOTE_PROCESSED_AREA).innerHTML = html;
    resetForm();
    //console to check
    console.table(board);
    return note;
}

//READ ok
function readNote() {
    let x = document.getElementById(NOTE_PROCESSED_AREA);
    let title = x.querySelector(".noteTitle").innerHTML;
    let content = x.querySelector(".noteContent").innerHTML;
    document.getElementById("txtNoteTitle").value = title;
    document.getElementById("txaInputNoteContent").value = content;
}

//UPDATE ok
function updateNote() {
    if (confirm(CONFIRM_UPDATE_STRING)) {
        let x = document.getElementById(NOTE_PROCESSED_AREA);
        let title = document.getElementById("txtNoteTitle").value;
        let content = document.getElementById("txaInputNoteContent").value;
        let idOfSelectedNote = getIDOfSelectedNote();
        let arrayNoteInBoard = board.getNote();
        arrayNoteInBoard[parseInt(idOfSelectedNote) - DIFFERENCE_INDEX_AND_KEY].setNoteTitle(title);
        arrayNoteInBoard[parseInt(idOfSelectedNote) - DIFFERENCE_INDEX_AND_KEY].setNoteContent(content);
        console.table(arrayNoteInBoard);
        x.querySelector(".noteTitle").innerHTML = title;
        x.querySelector(".noteContent").innerHTML = content;
        resetForm();
        //console to check
        console.table(activeUser);
    }
}

//DELETE ok
function deleteNote() {
    if (confirm(CONFIRM_DELETE_STRING)) {
        let idOfSelectedNote = getIDOfSelectedNote();
        board.deleteNote((parseInt(idOfSelectedNote) - DIFFERENCE_INDEX_AND_KEY));
        document.getElementById(NOTE_PROCESSED_AREA).innerHTML = "";
        //console to check
        console.table(activeUser);
    }
}

//Other functions
//reset form
function resetForm() {
    document.getElementById("txtNoteTitle").value = "";
    document.getElementById("txaInputNoteContent").value = "";
}

//Get the ID of selected Note
function getIDOfSelectedNote() {
    let idOfSelectedNote = document.getElementsByClassName("noteItem")[0].id;
    return idOfSelectedNote;
}
