import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { addBook, addNewBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();

  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [bookCategory, setBookCategory] = useState('');

  const onBookChanged = (e) => (setBookName(e.target.value));
  const onAuthorChanged = (e) => (setAuthorName(e.target.value));
  const onCategoryChanged = (e) => (setBookCategory(e.target.value));

  const onSubmitAddBook = (e) => {
    e.preventDefault();

    const newBook = {
      item_id: nanoid(),
      title: bookName,
      author: authorName,
      category: bookCategory || 'Fiction',
    };

    dispatch(addBook(newBook));
    dispatch(addNewBook(newBook));

    setBookName('');
    setAuthorName('');
    setBookCategory('Fiction');
  };

  return (
    <section className="pt-20 pb-20">
      <form onSubmit={onSubmitAddBook} className="flex justify-center gap-10">
        <input type="text" placeholder="Book Name" value={bookName} onChange={onBookChanged} className="px-[6px] py-[4px]" required />
        <input type="text" placeholder="Author name" value={authorName} onChange={onAuthorChanged} className="px-[6px] py-[4px]" required />
        <select name="category" value={bookCategory} onChange={onCategoryChanged}>
          <option value="Fiction">Fiction</option>
          <option value="Comedy">Comedy</option>
          <option value="Nonfiction">Nonfiction</option>
          <option value="Drama">Drama</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white font-bold px-5 py-[4px]">Add Book</button>
      </form>
    </section>
  );
};

export default AddBook;
