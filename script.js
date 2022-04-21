let library = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBooktoLibrary(){
    for(let i = 0; i < 2; i++){
        const newBook = new Book(prompt('Title'), prompt('Author'), prompt('Pages'), prompt('Read'));
        library.push(newBook);
    }
    console.log(library);
}

addBooktoLibrary();

function displayBook(){
    let books = library.length;

    for(let i = 0; i <= books; i++){
        console.log(library[0 + i]);
    }
}

displayBook();