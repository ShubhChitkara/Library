const myLibrary = [];
const dialog = document.querySelector("dialog");
const addabookbtn = document.querySelector(".addabook");
addabookbtn.addEventListener("click", () => {
  dialog.showModal();
});
const closeButton = document.querySelector(".closemodalbtn");
//form submission
closeButton.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    dialog.close(selectEl.value); // Have to send the select box value here.
  });

//combines the book data into object
function createBook(booktitle, bookauthor, booklength, bookreadstatus) {
  const book = {
    title: booktitle,
    author: bookauthor,
    noofpages: booklength,
    readstatus: bookreadstatus,
  };
}
//form that opens when you press add a book button
function bookdetails() {
  //call function createBook in this function and then call function addBookToLibrary
}
//adds the book object to array
function addBookToLibrary(book) {
  myLibrary.push(book);
}
console.log(myLibrary);

