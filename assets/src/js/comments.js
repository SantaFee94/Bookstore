let user = [];
let comments = [];

function saveUserName() {
    let userNameInputRef = document.getElementById("inputUserName");
    let userName = userNameInputRef.value;

    if (userName === "") {
        alert("Bitte gib deinen Namen ein");
        return;
    }

    user.push(userName);

    userNameInputRef.value = "";
}

function saveUserCommend() {
    let userCommentInputRef = document.getElementById("inputUserComment");
    let userComment = userCommentInputRef.value;

    if (userComment == "") {
        alert("Bitte gib deinen Kommentar ein");
        return;
    }
    comments.push(userComment);
    userCommentInputRef.value = "";
}


