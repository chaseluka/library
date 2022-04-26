const container = document.querySelector('.container');
const btn = document.getElementById('btn');
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
    const newBook = new Book(
        document.getElementById('title').value, 
        document.getElementById('author').value, 
        document.getElementById('pages').value,
        document.getElementById('read').checked
        );
    const div = document.createElement('div');
    div.textContent = newBook.info();
    container.appendChild(div);
    library.push(newBook);
}

btn.addEventListener('click', addBooktoLibrary);


function on() {
    document.getElementById("form").style.display = "block";
};

function off() {
    document.getElementById("form").style.display = "none";
};
off();