let myLibrary = [];

function Book(name, author, pages, read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read || false;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function showOff() {
    myLibrary.forEach(book => {
        console.table(book.name, book.author, book.pages, book.read);
    });
}

const book1 = new Book("Wheel of time: Eye of the World", "Robert Jordan", 782, true);
addBookToLibrary(book1)

const book2 = new Book("Lord of the Ring Fellowship of the Ring", "JRR Tolkien", 432);
addBookToLibrary(book2)

showOff()