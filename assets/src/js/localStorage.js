function saveToLocalStorage() {
    localStorage.setItem("user", JSON.stringify(userData.user));
    localStorage.setItem("comment", JSON.stringify(userData.userComments));
    localStorage.setItem("newComment", JSON.stringify(userData.newComment));
}

function getFromLocalStorage() {
    userData.user = JSON.parse(localStorage.getItem("user")) || [];
    userData.userComments = JSON.parse(localStorage.getItem("comment")) || [];
    userData.newComment = JSON.parse(localStorage.getItem("newComment")) || [];
}
