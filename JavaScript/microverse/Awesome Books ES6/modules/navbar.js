const formSection = document.querySelector('.form-section');
const booksContainer = document.querySelector('.books-container');
const homePage = document.getElementById("home");
const addBookPage = document.getElementById("add-book");

export const showHomePage = homePage.addEventListener('click', () => {
  formSection.style.display = 'none';
  booksContainer.style.display = 'flex';
})

export const showAddBookPage = addBookPage.addEventListener('click', () => {
  formSection.style.display = 'flex';
  booksContainer.style.display = 'none';
})