import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  booksData: [],
  status: 'idle',
  error: null,
};

const BOOKS_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/neTvlShlUagV28v2Fadm';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(`${BOOKS_URL}/books`);
  return response.data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const book = action.payload;
      state.booksData.push(book);
    },
    removeBook: (state, action) => {
      const deleteBookId = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.booksData = state.booksData.filter((book) => book.item_id !== deleteBookId);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeed';
        const loadedBooks = action.payload;

        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        for (const id in loadedBooks) {
          const bookObj = loadedBooks[id][0];
          bookObj.item_id = id;
              // Check if the book with the same item_id already exists in booksData
          const existingBookIndex = state.booksData.findIndex(book => book.item_id === id);
            
          if (existingBookIndex === -1) {
            state.booksData.push(bookObj);
          } else {
            // Update the existing book with the new data
            state.booksData[existingBookIndex] = bookObj;
          }
        }
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllBooks = ((state) => state.books.booksData);

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
