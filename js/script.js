// Book Class: Represent a Book
class book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
// UI Class: Handle UI Tasks

// Store Class: Handles Storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) =>{

    // Prevent actual submit
    e.preventDefault();

    // Get form values
    const title = docuemnt.querySelector('#title').value;
    const author = docuemnt.querySelector('#author').value;
    const isbn = docuemnt.querySelector('#isbn').value;

    // Validate
    if (title === '' || author === '' || isbn === '') {
        UI.showAlert('Please Fill in all Fields', 'danger');
    }else{

        // Instatiate Book
        const book = new Book(title,author,isbn);

        // Add Book to UI
        UI.addBookToList(book);

        // Add Book to Store
        StorageEvent.AddBook(book);

        // Show Success Message
        UI.showAlert('Book Added','success');

        // Clear Fields
        UI.clearFields();
    }
})
// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
    // Remove Book from UI
    UI.deleteBook(e.target);

    // Remove Book from Store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    //Show info Message
    UI.showAlert('Book Removed', 'info');

});