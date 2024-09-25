function saveToLocalStorage() {
    
    localStorage.setItem("books", JSON.stringify(books));
}

function getFromLocalStorage() {
    
    books = JSON.parse(localStorage.getItem("books")) || books;
}
