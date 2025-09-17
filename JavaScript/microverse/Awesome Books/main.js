const booksSection = document.querySelector('.books-section');
const inputTitle = document.querySelector('.input-title');
const inputAuthor = document.querySelector('.input-author');
const submitBtn = document.querySelector('.submit-btn');

const books = JSON.parse(localStorage.getItem('books')) || [];

const addNewBook = () => {
  const title = inputTitle.value;
  const author = inputAuthor.value;

  if (!title || !author) return;

  books.push({ title, author });
  localStorage.setItem('books', JSON.stringify(books));
  console.log(books);

  inputTitle.value = "";
  inputAuthor.value = "";

  renderBooks();
}

submitBtn.addEventListener('click', addNewBook);

const renderBooks = () => {
  booksSection.innerHTML = "";

  if (books.length === 0) {
    const text = document.createElement('p');
    text.textContent = "No books added";
    booksSection.appendChild(text);
  } else {
    books.forEach((book, index) => {
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

      removeBtn.addEventListener('click', () => {
        books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(books));
        renderBooks();
      });

      bookContainer.appendChild(removeBtn);

      booksSection.appendChild(bookContainer);
    });
  }
};

renderBooks();
