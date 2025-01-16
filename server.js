const myLibrary = [];
const addBookButton = document.querySelector('.addabook');
const dialog = document.querySelector('dialog');
const submitForm = document.querySelector('form');


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read

    this.info = function(){
        let result = '';
        if(this.read == 'yes'){
            return result = `${title} by ${author}, ${pages} pages, read it`;
        }else{
            return result = `${title} by ${author}, ${pages} pages, not read yet`;
        }
    }
}

//form that opens when you press add a book button
addBookButton.addEventListener('click',() => {
  dialog.showModal();
});
//Adds book to library
function addBookToLibrary(title, author, pages, read){
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}
//Adding inputted book to library
submitForm.addEventListener('submit', function(e){
  e.preventDefault();
  let title = document.querySelector('#title');
  let author = document.querySelector('#author');
  let pages = document.querySelector('#pages');
  
  if(document.querySelector("#read").checked){
      let read = document.querySelector('#read');
      addBookToLibrary(title.value, author.value, pages.value, read.value);
      dialog.close();
      submitForm.reset();
  }
  else {
      let read = document.querySelector('#not-read');
      addBookToLibrary(title.value, author.value, pages.value, read.value);
      dialog.close();
      submitForm.reset();
  }