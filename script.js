const container = document.querySelector('.container');
const btn = document.getElementById('btn');
let library = [];


function Book(title, author, pages, year, publisher, isbn) {
    this.title = title
    this.author = author
    this.pages = pages
    this.year = year
    this.publisher = publisher
    this.isbn = isbn
    this.info = function(){
        return (title + ' by ' + author + ', ' + pages + ' pages, ' + year + ' published by ' + publisher + ', ' + isbn);
    }
}

function addBooktoLibrary(){
    const newBook = new Book(
        document.getElementById('title').value, 
        document.getElementById('author').value, 
        document.getElementById('pages').value,
        );
    const div = document.createElement('div');
    div.textContent = newBook.info();
    container.appendChild(div);
    library.push(newBook);
}

btn.addEventListener('click', addBooktoLibrary);