let library = [];

function Book(title) {
    this.title = title
}

function addBooktoLibrary(){
    const newBook = new Book(prompt('Title'));
    library.push(newBook);
    console.log(library);
}

addBooktoLibrary();

