let user = [];
let userComments = [];

function saveUserInput(indexBook) {
    saveUserName(indexBook);
    saveUserCommentInput(indexBook);
}

function saveUserName(indexBook) {
    let userNameInputRef = document.getElementById(`inputUserName${indexBook}`);
    let userName = userNameInputRef.value;

    if (userName == "") {
        alert("Bitte gib deinen Namen ein");
        return;
    }
    user.push(userName);
    saveToLocalStorage()
    userNameInputRef.value = "";
}

function saveUserCommentInput(indexBook) {
    let userCommentInputRef = document.getElementById(`inputUserComment${indexBook}`);
    let userComment = userCommentInputRef.value;

    if (userComment == "") {
        alert("Bitte gib einen Kommentar ein");
        return;
    }

    userComments.push(userComment);
    saveToLocalStorage()
    userCommentInputRef.value = "";
}
