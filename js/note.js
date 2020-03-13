function Note(noteTitle, noteContent) {
    this.noteTitle = noteTitle;
    this.noteContent = noteContent;

    this.getNoteTitle = function () {
        return this.noteTitle;
    };

    this.setNoteTitle = function (noteTitle) {
        this.noteTitle = noteTitle;
    };

    this.getNoteContent = function () {
        return this.noteContent;
    };

    this.setNoteContent = function (noteContent) {
        this.noteContent = noteContent;
    };

    this.createNote = function () {
        return new Note(this.noteTitle, this.noteContent);
    };
}



