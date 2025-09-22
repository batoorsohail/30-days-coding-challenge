const booksSection = document.querySelector('.books-section');
const inputTitle = document.querySelector('.input-title');
const inputAuthor = document.querySelector('.input-author');
const submitBtn = document.querySelector('.submit-btn');

class Books {
  constructor(title, author) {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.title = title;
    this.author = author
  }

  renderBooks() {
    booksSection.innerHTML = "";

    if (this.books.length === 0) {
      const text = document.createElement('p');
      text.textContent = "No books added";
      booksSection.appendChild(text);
    } else {
      this.books.forEach((book, index) => {
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
          this.removeBook(index);
        });

        bookContainer.appendChild(removeBtn);

        booksSection.appendChild(bookContainer);
      });
    }
  }

  addBook() {
    const title = inputTitle.value;
    const author = inputAuthor.value;

    if (!title || !author) return;

    this.books.push({ title, author });
    localStorage.setItem('books', JSON.stringify(this.books));

    inputTitle.value = "";
    inputAuthor.value = "";

    this.renderBooks();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.renderBooks();
  }
};

const book = new Books(inputTitle, inputAuthor);

submitBtn.addEventListener('click', () => book.addBook());

book.renderBooks();
