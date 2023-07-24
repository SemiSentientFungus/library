myLibrary = []
let i = 0
function Book(title, author, pages, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(object){
    myLibrary.push(object)
}
const book = new Book('title', 'author', 'pages', false)

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
        read_book(i)
    })
    div.append(read)
    i++
    grid.append(div)
}

/*
function populate(array){
    let i = 0
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
            read.value = i
        }
        else{
            read.classList.add('book-unread')
            read.innerHTML = "Unread"
            read.value = i
        }
        
        div.append(read)
        i++

        //add book to grid
        grid.append(div)
        read.addEventListener('click',() => read_book(read.value))
    }
}

function libraryClear(){
    while(grid.firstChild){
        grid.firstChild.remove()
    }
}

function refreshGrid(){
    libraryClear()
    populate(myLibrary)
}
*/

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
/*
const book1 = new Book('Lord of the Rings', 'J RR Tolkien', 2600, false)
const book2 = new Book('Wheel of Time', 'Robert Jordan', 2500, true)
const book3 = new Book('Guards! Guards!', 'Sir Terry Pratchett', 600, true)


const grid = document.querySelector('.library-grid')

const btn = document.querySelector('.book-add')

btn.addEventListener('click', () => refreshGrid())

populate(myLibrary)

*/

const form = document.querySelector('.myform')

const addBtn = document.querySelector('.book-form')

addBtn.addEventListener('click', () => {
    form.style.display = "block";
});

const formBtn = document.querySelector('.formbutton')

formBtn.addEventListener('click', () => {
    const title = document.getElementById('title')
    const author = document.getElementById('author')
    const pages = document.getElementById('pages')
    const read = /*document.getElementById('readstatus')*/ true

    book = {title, author, pages, read}
}); 