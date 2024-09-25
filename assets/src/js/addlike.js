function addOrRemoveLike(indexBook) {
    if (!books[indexBook].liked) {
        books[indexBook].likes += 1;
        books[indexBook].liked = true;
    } else {
        books[indexBook].likes -= 1;
        books[indexBook].liked = false;
    }

    document.getElementById(`liked${indexBook}`).classList.toggle("like_red_heart");
    document.getElementById(`liked${indexBook}`).classList.toggle("none_like_white_heart");

    renderBooks();
}
