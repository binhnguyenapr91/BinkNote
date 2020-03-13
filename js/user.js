function User(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.board;

    this.getUsername = function () {
        return this.username;
    };
    this.setUsername = function (username) {
        this.username = username;
    };
    this.getPassword = function () {
        return this.password;
    };
    this.setPassword = function (password) {
        this.password = password;
    };
    this.getEmail = function () {
        return this.email;
    };
    this.setEmail = function (email) {
        this.email = email;
    };

    this.getBoard = function () {
        return this.board;
    };
    this.addNewBoard = function (board) {
        this.board = board;
    };

    this.getUser = function () {
        let user = new User(this.username, this.password, this.email)
        return user;
    };

    this.createUser = function (username, password, email) {
        return new User(this.username = username, this.password = password, this.email = email);
    };

    this.showUser = function () {
        return document.getElementById("accountInfo").innerHTML = "Account:" + this.username + "/ Email:" + this.email;
    };

    this.logOut = function () {
        sessionStorage.clear();
    }
}


// let user1 = new User("binhnguyen", "binh123", "binh@email.com");
// user1.addNewBoard(board);
// document.getElementById("accountName").innerHTML =user1.getUsername() + "/" + user1.getEmail();




