const myLibrary = [];
const addBookButton = document.querySelector(".addabook");
const dialog = document.querySelector("dialog");
const submitForm = document.querySelector("form");
const griddy = document.querySelector(".griddy");

//Creates the book object
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    let result = "";
    if (this.read == "yes") {
      return (result = `${title} by ${author}, ${pages} pages, read it`);
    } else {
      return (result = `${title} by ${author}, ${pages} pages, not read yet`);
    }
  };
}

//form that opens when you press add a book button
addBookButton.addEventListener("click", () => {
  dialog.showModal();
});
//Adds book to library
function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

//Adding inputted book to library
function doit() {
  let title = document.querySelector("#title");
  let author = document.querySelector("#author");
  let pages = document.querySelector("#pages");

  if (document.querySelector("#read").checked) {
    let read = document.querySelector("#read");
    addBookToLibrary(title.value, author.value, pages.value, read.value);
    dialog.close();
    submitForm.reset();
  } else {
    let read = document.querySelector("#not-read");
    addBookToLibrary(title.value, author.value, pages.value, read.value);
    dialog.close();
    submitForm.reset();
  }
  for (let i = 0; i < myLibrary.length + 1; i++) {
    let card = document.createElement("div");
    card.classList.add("card");

    let a = document.createElement("h2");
    a.textContent = `Title: ${myLibrary[i].title}`;

    let b = document.createElement("h3");
    b.textContent = `By: ${myLibrary[i].author}`;

    let c = document.createElement("p");
    c.textContent = `Pages: ${myLibrary[i].pages}`;

    let d = document.createElement("p");
    d.textContent = `Read? ${myLibrary[i].read}`;
    card.appendChild(a);
    card.appendChild(b);
    card.appendChild(c);
    card.appendChild(d);
    griddy.appendChild(card);
  }
}
submitForm.addEventListener("submit", function (e) {
  e.preventDefault();
  doit();
});
console.log(myLibrary);
