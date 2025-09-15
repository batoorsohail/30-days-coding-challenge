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
  bookContainer.classList.add('book-container');

  const bookName = document.createElement('p');
  bookName.textContent += book.title;
  bookName.classList.add('book-name');
  bookContainer.appendChild(bookName);

  const authorName = document.createElement('p');
  authorName.textContent += book.author;
  authorName.classList.add('author-name');
  bookContainer.appendChild(authorName);

  const removeBtn = document.createElement('button');
  removeBtn.textContent += "Remove";
  removeBtn.classList.add('remove-btn');
  bookContainer.appendChild(removeBtn);

  booksSection.appendChild(bookContainer);
});