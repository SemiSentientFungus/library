myLibrary = []
let i = 0

function Book(title, author, pages, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let book = new Book('title', 'author', 'pages', false)

function addBook(object){
    myLibrary.push(object)
}

function appendDiv(object){
    const grid = document.querySelector('.library-grid')

    const div = document.createElement('div')
    div.classList.add('book-element')

    const title = document.createElement('div')
    title.classList.add('book-title')
    title.innerHTML = object.title
    div.append(title)

    const author = document.createElement('div')
    author.classList.add('book-author')
    author.innerHTML = object.author
    div.append(author)

    const pages = document.createElement('div')
    pages.classList.add('book-pages')
    pages.  innerHTML = object.pages
    div.append(pages)

    const read = document.createElement('button')
    if (object.read == true){
        read.classList.add('book-read')
        read.innerHTML = "Read"
        read.value = i
    }
    else{
        read.classList.add('book-unread')
        read.innerHTML = "Unread"
        read.value = i
    }
    read.addEventListener('click', () => {
        read_book(read.value)
    })
    div.append(read)
    i++
    grid.append(div)
}

function read_book(index){
    const read = document.querySelector('.book-unread')
    if (myLibrary[index].read == true){
        console.log('How did you unread a book?!??')
    }
    else{
        myLibrary[index].read = true
        read.innerHTML = 'Read'
        read.classList.add('book-read')
        read.classList.remove('book-unread')
    }
}

const form = document.querySelector('.myform')

const addBtn = document.querySelector('.book-form')

addBtn.addEventListener('click', () => {
    form.style.display = "block";
});

const formBtn = document.querySelector('.formbutton')

formBtn.addEventListener('click', () => {   
    const bookTitle = document.getElementById('title').value;
    const bookAuthor = document.getElementById('author').value;
    const bookPages = document.getElementById('pages').value;
    const bookRead = document.getElementById('readstatus').checked;
     
    book = {
        title: bookTitle,
        author: bookAuthor,
        pages: bookPages,
        read: bookRead
    }
    appendDiv(book)
    addBook(book)
    form.style.display = "none"
}); 