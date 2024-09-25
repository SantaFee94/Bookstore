function getBookHtmlTemplate(indexBook) {
    let likeStatus = books[indexBook].liked ? "like_red_heart" :  "none_like_white_heart";

    return ` <div id="content">
                <div id="title_book"><h2>${books[indexBook].name}</h2></div>

                <div id="book_img"><img src="./assets/img/icon/book.png" alt="book" /></div>

                <div class="price_like">
                    <div class="price">${books[indexBook].price.toFixed(2).replace(".",",")}€</div>
                    <div class="like">${books[indexBook].likes} <div id="liked${indexBook}" class="${likeStatus}" onclick="addOrRemoveLike(${indexBook})"><img src="./assets/img/icon/red_heart.png" alt=""></div></div>
                </div>

                <div id="book_info"><span>Author : ${books[indexBook].author} Erscheinungsjahr : ${books[indexBook].publishedYear} Genre : ${books[indexBook].genre}</span></div>

                <h3>Kommentare</h3>
                <div id="commentsForBook${indexBook}" class="comment_section"></div>

                 
                    <div class="iput_field">
                        <input id="inputUserName${indexBook}" type="text" placeholder="Leser Name" />
                        <input id="inputUserComment${indexBook}" type="text" placeholder="Kommentar" />
                        <button onclick="saveUserInput(${indexBook})" class="save_button">Speichern</button>
                    </div>

                    
                   
                </div>
            </div>`;
            
}

function getCommentToHtml(indexBook,indexComment) {
    return `<div id="comment" class="user_name">${books[indexBook].comments[indexComment].name}</div>
                     <div class="comment_field">${books[indexBook].comments[indexComment].comment}</div>`;
}

