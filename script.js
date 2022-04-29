//Collection of variables and arrays for later use.

const tbody = document.querySelector('tbody');
const btn = document.getElementById('btn');

const pages = document.getElementById('pages');
const author = document.getElementById('author');
const title = document.getElementById('title');
const read = document.getElementById('read');
const form = document.getElementById('new-book');

let libraryStorage = '';

//Array storing all books

let library = [];

//Book object constructor for being used infinitely

function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

//Adds a new book to the library array and updates it to the table.

function addBooktoLibrary(){
    const newBook = new book(  //Allow form input to become a new book
        document.getElementById('title').value, 
        document.getElementById('author').value, 
        document.getElementById('pages').value,
        document.getElementById('read').checked //To return a boolean
        );

    //Add new book to the DOM with correct values from newBook
  
    const row = document.createElement('tr');
    row.setAttribute('data-title', `${newBook.title}`);
    tbody.appendChild(row);

    const tdTitle = document.createElement('td');
    const tdAuthor = document.createElement('td');
    const tdPages = document.createElement('td');
    const tdRead = document.createElement('td');
    const tdDelete = document.createElement('td');

    tdDelete.classList.add('delete-book');

    if (newBook.read === true){
        tdRead.textContent = "Read";
        tdRead.classList.add('read');
        tdRead.classList.add('read-status');
    }
    else {
        tdRead.textContent = "Not Read";
        tdRead.classList.add('not-read');
        tdRead.classList.add('read-status');
    }
    
    tdTitle.textContent = newBook.title;
    tdAuthor.textContent = newBook.author;
    tdPages.textContent = newBook.pages;

    row.appendChild(tdTitle);
    row.appendChild(tdAuthor);
    row.appendChild(tdPages);
    row.appendChild(tdRead);
    row.appendChild(tdDelete);

    const img = document.createElement('img'); //Create minus circle
    img.src = 'images/minus-circle.svg';
    tdDelete.appendChild(img);

    tdRead.addEventListener('click', () => changeReadStatus(tdRead));
    
    tdDelete.addEventListener('click', () => deleteBook(tdDelete))
    
    library.push(newBook);  //store newBook into the array

    saveData();
    
}

btn.addEventListener('click', (e) => {
    validateForm(e);
}); 

//Allows form to display when buttons are clicked.

function on() {
    document.getElementById("form").style.display = "block";
};

function off() {
    document.getElementById("form").style.display = "none";
};

//Add or remove classes for displaying read status

function changeReadStatus(tdRead){  
    let bookTitle = tdRead.parentElement.getAttribute('data-title'); //target parent element of title selected given it has a prestablished data-title
    library.forEach((obj) => {  //sort through array and find title that matches from above, and change book.read data accordingly.
        if (obj.title === bookTitle){
            if (obj.read === true){
                obj.read = false;
                tdRead.textContent = "Not Read";
            }
            else if (obj.read === false) {
                obj.read = true;
                tdRead.textContent = "Read";
            }
        }
    })

    tdRead.classList.toggle('read');
    tdRead.classList.toggle('not-read');

    saveData();
}

//Deletes a book from library when minus button is clicked.

function deleteBook (tdDelete){
    let bookTitle = tdDelete.parentElement.getAttribute('data-title'); 
    library = library.filter(obj => {  //filter through array and find all titles, if one matches data-title from above, returns the array without this item.
        return obj.title != bookTitle;
    })
    tdDelete.parentElement.remove(); //Removes from display
    saveData();
}

//clear form after submission

function resetForm(){
    pages.value = '';
    author.value = '';
    title.value = '';
    read.checked = false;
    read.value = false;
}

//Validate the form. Display errors if requirements are not met, and add book to library if all conditions are met.

function validateForm (e){
    const titleError = document.querySelector('.title-error');
    const authorError = document.querySelector('.author-error');
    const pagesError = document.querySelector('.pages-error');
    
    

    if (title.value === '' || title.value == null){
        titleError.style.display = 'block';
    }
    else {
        titleError.style.display = 'none';
    }
    if (author.value === '' || author.value == null){
        authorError.style.display = 'block';
    }
    else {
        authorError.style.display = 'none';
    }

    let pageNum = parseInt(pages.value); //covert to a num to test conditional below.

    if (pageNum > 10000) {
        pagesError.style.display = 'block';
    }
    else {
        pagesError.style.display = 'none';
    }

    if (title.value !== '' && author.value !== '' && pageNum < 10001){
        addBooktoLibrary();
        off();
        resetForm();
    }

    else {
        e.preventDefault();
    }

    
}

//Save data to local storage

function saveData(){
    libraryStorage = JSON.stringify(library);
    localStorage.setItem('MyBooks', libraryStorage);
}


//Retrieve data from local storage upon page reload

function retrieveData() {
    if (localStorage.getItem('MyBooks') === null){
        library = [];
    }
    else {
        let retrieveStorage = JSON.parse(localStorage.getItem('MyBooks'));
        library = retrieveStorage;
        console.log(retrieveStorage);
    }
}
retrieveData();