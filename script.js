function init() {
    renderBooks();
}

function renderBooks() {
    let contentRef = document.getElementById("books");
    contentRef.innerHTML = "";

    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        contentRef.innerHTML += getBookHtmlTemplate(indexBook);
        renderComments(indexBook);
    }
}

function renderComments(indexBook) {
    let commentRef = document.getElementById(`commentsForBook${indexBook}`);

    for (let indexComment = 0; indexComment < books[indexBook].comments.length; indexComment++) {
        commentRef.innerHTML += getCommentToHtml(indexBook, indexComment);
        renderUserComment(indexBook);
    }
}

function renderUserComment(indexBook) {
    let commentRef = document.getElementById(`commentsForBook${indexBook}`);
    let newComment = getUserCommentToHtml();
    commentRef.innerHTML += newComment;
    userData.newComment.push(newComment);
    saveToLocalStorage();
    
}

//To-Do Likes müssen nach einen Refresh gespeichert bleiben sowie auch das Herz mit der letzten Farbe.
//To-Do Kommentare müssen nach einen Refresh noch stehen.
