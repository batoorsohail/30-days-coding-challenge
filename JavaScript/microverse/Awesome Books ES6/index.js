import Books from "./modules/books.js";
import { showHomePage, showAddBookPage } from "./modules/navbar.js";
import { date } from "./modules/date.js";

const booksSection = document.querySelector('.books-section');
const inputTitle = document.querySelector('.input-title');
const inputAuthor = document.querySelector('.input-author');
const submitBtn = document.querySelector('.submit-btn');
const dateSection = document.querySelector('.date-section');

const book = new Books(inputTitle, inputAuthor);

submitBtn.addEventListener('click', () => book.addBook());

const dateText = document.createElement('p');
dateText.textContent = date;
dateSection.appendChild(dateText);

book.renderBooks();