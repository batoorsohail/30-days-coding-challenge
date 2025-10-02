import Books from "./modules/books.js";
import { showHomePage, showAddBookPage } from "./modules/navbar.js";

const booksSection = document.querySelector('.books-section');
const inputTitle = document.querySelector('.input-title');
const inputAuthor = document.querySelector('.input-author');
const submitBtn = document.querySelector('.submit-btn');

const book = new Books(inputTitle, inputAuthor);

submitBtn.addEventListener('click', () => book.addBook());

book.renderBooks();