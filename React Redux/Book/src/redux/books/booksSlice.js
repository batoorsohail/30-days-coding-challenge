import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const book = action.payload;
      state.books.push(book);
    },
    removeBook: (state, action) => {
      const deleteBookId = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.books = state.books.filter((book) => book.id !== deleteBookId);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
