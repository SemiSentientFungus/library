function Book(title, author, pages, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

myLibrary = []

const book = new Book('Blank title', 'Blank Author', 'Blank Pages', false)


const btn = document.querySelector('#submit');

function formWipe() {
    document.getElementById("myForm").reset();
}

btn.addEventListener('click', () => {
    //set book object to values from the book
    book.title = document.getElementById('title').value;
    book.author = document.getElementById('author').value;
    book.pages = document.getElementById('pages').value;


    // push book object to my library array
    myLibrary.push(book);

    //reset form
    formWipe();
})

