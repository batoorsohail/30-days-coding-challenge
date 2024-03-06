import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  booksData: [],
  status: "idle",
  error: null
};

const BOOKS_URL = "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oiExl0Oo4RSaCgGm5QD0"

export const fetchBooks = createAsyncThunk("books/fetchBooks", async() => {
  const response = await axios.get(`${BOOKS_URL}/books`)
  console.log(response.data);
})

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
      .addCase(fetchBooks.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "succeed";
        const loadedBooks = action.payload;
        state.booksData = state.booksData.concat(loadedBooks);
        console.log(state.booksData);
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  }
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
