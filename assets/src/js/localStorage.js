function saveToLocalStorage() {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("comment", JSON.stringify(userComments));
}

function getFromLocalStorage() {
    user = JSON.parse(localStorage.getItem("user")) || [];
    userComments = JSON.parse(localStorage.getItem("comment")) || [];
}
