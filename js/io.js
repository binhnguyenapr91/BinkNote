//Load User has been logged in and return the key of this user
function loadUserLoggedIn() {
    let currentUser = getObjectFromLocalStorage(searchKeyByUsername(getUsernameOfTheCurrentSession()));
    return currentUser;
}

function searchKeyByUsername(username) {
    let listUsername =[];
    let index = 1;
    while (index<= window.localStorage.length) {
        listUsername.push(JSON.parse(window.localStorage.getItem(index.toString())).username);
        index++;
    }
    return listUsername.indexOf(username)+1;
}

//Get a Object from Local Storage by index
function getObjectFromLocalStorage(index) {
    return JSON.parse(window.localStorage.getItem(index.toString()));
}

//Get username of active user
function getUsernameOfTheCurrentSession() {
    return sessionStorage.getItem(ACTIVE_SESSION_KEY);
}

//Update user data to Local Storage
function updateDataToLocalStorage(key,userNeedToUpdate) {
    window.localStorage.setItem(key,JSON.stringify(userNeedToUpdate));
}