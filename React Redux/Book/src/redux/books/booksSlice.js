import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  booksData: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
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
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
