let userData = {
    user: [],
    userComments: [],
    newComment: [],
};

function saveUserInputData(indexBook) {
    let userNameInputRef = document.getElementById(`inputUserName${indexBook}`);
    let userCommentInputRef = document.getElementById(`inputUserComment${indexBook}`);
    let userName = userNameInputRef.value;
    let userComment = userCommentInputRef.value;

    if (userName == "") {
        alert("Bitte gib  einen Namen ein");
        return;
    }
    if (userComment == "") {
        alert("Bitte gib ein Komentar ein");
    }

    books[indexBook].comments.push({ comment: userComment, name: userName });

    saveToLocalStorage();
    userNameInputRef.value = "";
    userCommentInputRef.value = "";

    renderBooks();
}
