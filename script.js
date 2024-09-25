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
    }
}


