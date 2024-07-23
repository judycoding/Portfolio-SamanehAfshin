const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const isbnInput = document.getElementById("isbn");
const lists = document.getElementById("lists");
const form = document.getElementById("book-form");
const mainContainer= document.getElementById("mainContainer");
// const alertMessage = document.getElementById("alert-message");

//Book Class: Represent a Book
class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI Class: Handle UI Tasks
class UI{
     static displayBooks(){
        const books = Store.localgetBooks();
        books.forEach((book)=>{UI.addBookToList(book)});
    }

     static addBookToList(book){
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.title}<td/>
            <td>${book.author}<td/>
            
            <td class="tdDelete"><a href="#" class="btn btn-danger btn-sm delete">X</a><td/>
        
            `;
            lists.appendChild(row);
        }

     static deleteBook(el){
        if(el.classList.contains("delete")){
            el.parentElement.parentElement.remove();
        }
       }

     static showAlert(message, className){
            const div = document.createElement("div");
            div.className = `alert alert-${className}`;
            div.appendChild(document.createTextNode(message));
            mainContainer.insertBefore(div, form);
            //vanish in 3 seconds
            setTimeout(() => div.remove(), 3000);
        }
    
     static clearFields(){
        titleInput.value = "";
        authorInput.value = "";
        isbnInput.value = "";
    }


}
  
//Store Class: Handles Storage
 class Store{
    static localgetBooks(){
        let books;
        if(localStorage.getItem("books") === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem("books"));
        }
        return books;   
    }

    static localAddBook(book){
        const books = Store.localgetBooks();
        books.push(book);
        localStorage.setItem("books", JSON.stringify(books));
    }

    static localremoveBook(isbn){
        const books = Store.localgetBooks();
        books.forEach((book,index)=>{
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });

        localStorage.setItem("books", JSON.stringify(books));
    } 
}




// Event: Display Books
// document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: Add a Book
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = titleInput.value;
    const author = authorInput.value;
    const isbn = isbnInput.value;

    if(title==="" || author==="" || isbn===""){
        UI.showAlert("please fill in all fields", "danger")
    } else{
    //Instantiaie book
    const book = new Book(title, author, isbn);

    //Add book to UI
    UI.addBookToList(book);

    //Add book to Store
    // Store.localAddBook(book);

    // Show success message
    // UI.showAlert("Product Added", "success");


    //Clear Fields
    UI.clearFields();
    }
});




//Event: Remove a Book
lists.addEventListener("click", (e)=>{
    //Remove Book From UI
    UI.deleteBook(e.target);
    //Remove Book From Store
    // Store.localremoveBook(e.target.parentElement.previousElementSibling.textContent);

    // UI.showAlert("Product removed", "success");
    
});





       
  

   
        
    








