function getBookHtmlTemplate(indexBook) {
    return ` <div id="content">
                <div id="title_book"><h2>${books[indexBook].name}</h2></div>

                <div id="book_img"><img src="./assets/img/icon/book.png" alt="book" /></div>

                <div class="price_like">
                    <div class="price">${books[indexBook].price.toFixed(2).replace(".",",")}€</div>
                    <div class="like">${books[indexBook].likes}<img class="heart_liked" src="./assets/img/icon/red_heart.png" alt="liked" /> 
                    <img class="heart_liked, d_none" src="./assets/img/icon/white_heart.png" alt="none Liked" /></div>
                </div>

                <div id="book_info"><span>Author : ${books[indexBook].author} Erscheinungsjahr : ${books[indexBook].publishedYear} Genre : ${books[indexBook].genre}</span></div>

                <h3>Kommentare</h3>
                <div id="commentsForBook${indexBook}" class="comment_section"></div>

                 <div id="addComments" class="add-comment">
                    <div class="iput_field">
                        <input id="inputUserName" type="text" placeholder="Leser Name" />
                        <input id="inputUserComment" type="text" placeholder="Kommentar" />
                        <button class="save_button">Speicher</button>
                    </div>

                    
                   
                </div>
            </div>`;
            
}

function getCommentToHtml(indexBook,indexComment) {
    return `<div id="comment" class="user_name">${books[indexBook].comments[indexComment].name}</div>
                     <div class="comment_field">${books[indexBook].comments[indexComment].comment}</div>`;
}

