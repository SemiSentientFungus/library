myLibrary = []

function Book(title, author, pages, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(object){
    myLibrary.push(object)
}

const book1 = new Book('Lord of the Rings', 'J RR Tolkien', 2600, false)
const book2 = new Book('Wheel of Time', 'Robert Jordan', 2500, true)

addBook(book1)
addBook(book2)

myLibrary.forEach(element => {
    console.table(element)
});