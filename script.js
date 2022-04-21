const container = document.querySelector('.container');
let library = [];


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return (title + ' by ' + author + ', ' + pages + ' pages, ' + read);
    }
}

function addBooktoLibrary(){
    for(let i = 0; i < 2; i++){
        const newBook = new Book(prompt('Title'), prompt('Author'), prompt('Pages'), prompt('Read'));
        const div = document.createElement('div');
        div.textContent = newBook.info();
        container.appendChild(div);
        library.push(newBook);
    }
    console.log(library);
}

addBooktoLibrary();
