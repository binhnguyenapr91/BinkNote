//Register Functions

//window.localStorage.clear();
const REGISTRATION_SUCCESS_STRING = "Registration successful!";

function registerNewUser() {
    let user = new User();
    let newUserName = document.getElementById("username").value;
    let newUserPassword = document.getElementById("password").value;
    let newUserEmail = document.getElementById("email").value;
    let newUser = user.createUser(newUserName, newUserPassword, newUserEmail);
    console.table(newUser);
    addObjectToLocalStorage(newUser);
    alert(REGISTRATION_SUCCESS_STRING);
    navigateToLogin();
}

//Add a Object to Local Storage
function addObjectToLocalStorage(userNeededToAdd) {
    let newIndexInLocalStorage = window.localStorage.length + 1;
    window.localStorage.setItem(newIndexInLocalStorage.toString(), JSON.stringify(userNeededToAdd));
    //console to check
    console.table(localStorageInfo());
}

//Return all Object in LocalStorage
function localStorageInfo() {
    console.log("LocalStorage's Length: " + window.localStorage.length);
    let beginObjectIndex = 1;
    let objectInLocalStorage = [];
    while (beginObjectIndex <= window.localStorage.length) {
        objectInLocalStorage.push(JSON.parse(window.localStorage.getItem(beginObjectIndex.toString())));
        beginObjectIndex++;
    }
    return objectInLocalStorage;
}
