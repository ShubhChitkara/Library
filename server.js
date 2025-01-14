const myLibrary = [];
const addabookbtn=document.querySelector(".addabook");
addabookbtn.addEventListener("click",addBookToLibrary(book));
//combines the book data into object
function createBook(booktitle,bookauthor,booklength,bookreadstatus){
    const book={
        title:booktitle,
        author:bookauthor,
        noofpages:booklength,
        readstatus:bookreadstatus
    };
}
//form that opens when you press add a book button
function bookdetails(){
    const forms=document.createElement("form");
    const name=forms.createElement("input");
    name.type="text";


//call function createBook in this function and then call function addBookToLibrary 
}
//adds the book object to array
function addBookToLibrary(book) {
    myLibrary.push(book);
   
}
  

console.log(myLibrary)
