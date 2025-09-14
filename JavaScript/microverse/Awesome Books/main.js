const booksSection = document.querySelector('.books-section');
const inputTitle = document.querySelector('.input-title');
const inputAuthor = document.querySelector('.input-author');
const submitBtn = document.querySelector('.submit-btn');

const addedBooks = [
  {
    title: "Can't hurt me",
    author: "David Goggins",
  },
  {
    title: "Atomic Habits",
    author: "James Clear"
  }
];

addedBooks.forEach(book => {
  const bookContainer = document.createElement('div');
  const bookName = document.createElement('p');
  bookName.textContent += book.title;
  bookContainer.appendChild(bookName);
  const authorName = document.createElement('p');
  authorName.textContent += book.author;
  bookContainer.appendChild(authorName);
  booksSection.appendChild(bookContainer);
})