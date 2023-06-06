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

const table = document.getElementById('myTable')

function makeTable(array){
    array.forEach(object => {
        populate(object)
    });
}

function populate(object){
    var row = table.insertRow()
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)

    cell1.innerHTML = object.title
    cell2.innerHTML = object.author
    cell3.innerHTML = object.pages
    cell4.innerHTML = object.read
}
const book1 = new Book('Lord of the Rings', 'J RR Tolkien', 2600, false)
const book2 = new Book('Wheel of Time', 'Robert Jordan', 2500, true)

addBook(book1)
addBook(book2)

makeTable(myLibrary)