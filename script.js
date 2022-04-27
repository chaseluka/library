const container = document.querySelector('.container');
const tbody = document.querySelector('tbody');
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
    const row = document.createElement('tr');
    tbody.appendChild(row);
    
    const tdTitle = document.createElement('td');
    const tdAuthor = document.createElement('td');
    const tdPages = document.createElement('td');
    const tdRead = document.createElement('td');
    
    tdTitle.textContent = newBook.title;
    tdAuthor.textContent = newBook.author;
    tdPages.textContent = newBook.pages;
    tdRead.textContent = newBook.read;

    row.appendChild(tdTitle);
    row.appendChild(tdAuthor);
    row.appendChild(tdPages);
    row.appendChild(tdRead);

    library.push(newBook);
}

btn.addEventListener('click', addBooktoLibrary);


function on() {
    document.getElementById("form").style.display = "block";
};

function off() {
    document.getElementById("form").style.display = "none";
};