//Login functions
const WRONG_INFO_LOGIN_STRING = "Wrong username or password! Please try again!";
const WELCOME_STRING = "Welcome to Bink-Note: ";
const IF_NOT_LOGIN_STRING = "Need to Login!";
const ACTIVE_SESSION_KEY = "active";

function login() {
    let inputUsername = document.getElementById("username").value;
    let inputPassword = document.getElementById("password").value;
    if (checkLogin(inputUsername, inputPassword) === true) {
        alert(WELCOME_STRING + inputUsername);
        sessionStorage.setItem(ACTIVE_SESSION_KEY, inputUsername);
        navigateToMain();
    } else {
        alert(WRONG_INFO_LOGIN_STRING);
    }
}

function checkLogin(inputUsername, inputPassword) {
    let arrUser = [];
    let index = 1;
    let status = false;
    while (index <= window.localStorage.length) {
        arrUser.push(JSON.parse(window.localStorage.getItem(index.toString())));
        index++;
    }
    for (let j = 0; j < arrUser.length; j++) {
        if (inputUsername === arrUser[j].username) {
            if (inputPassword === arrUser[j].password) {
                status = true;
            }
        }
    }
    return status;
}

//Log out function
function logOut() {
    sessionStorage.clear();
    navigateToLogin();
}

//Check session if user is logged in or not
function checkSession() {
    let recentSession = sessionStorage.getItem(ACTIVE_SESSION_KEY);
    if (recentSession != null) {
        return recentSession;
    } else {
        alert(IF_NOT_LOGIN_STRING);
        navigateToLogin();
    }
}



