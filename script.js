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

function populate(array){
    for (element of array){
        const div = document.createElement('div')
        div.classList.add('book-element')

        const title = document.createElement('div')
        title.classList.add('book-title')
        title.innerHTML = element.title
        div.append(title)

        const author = document.createElement('div')
        author.classList.add('book-author')
        author.innerHTML = element.author
        div.append(author)

        const pages = document.createElement('div')
        pages.classList.add('book-pages')
        pages.  innerHTML = element.pages
        div.append(pages)

        const read = document.createElement('button')
        if (element.read == true){
            read.classList.add('book-read')
            read.innerHTML = "Read"
        }
        else{
            read.classList.add('book-unread')
            read.innerHTML = "Unread"
        }
        
        div.append(read)

        //add book to grid
        grid.append(div)
    }
}

const book1 = new Book('Lord of the Rings', 'J RR Tolkien', 2600, false)
const book2 = new Book('Wheel of Time', 'Robert Jordan', 2500, true)
const book3 = new Book('Guards! Guards!', 'Sir Terry Pratchett', 600, true)


addBook(book1)
addBook(book2)
addBook(book3)

const grid = document.querySelector('.library-grid')

populate(myLibrary)