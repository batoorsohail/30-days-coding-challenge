import { useSelector, useDispatch } from 'react-redux';
import { removeBook, selectAllBooks, deleteBook } from '../redux/books/booksSlice';

const Book = () => {
  const books = useSelector(selectAllBooks);

  const dispatch = useDispatch();

  const onDeleteBook = (book) => {
    dispatch(removeBook(book.item_id));
    dispatch(deleteBook(book.item_id));
  };

  return (
    <section className="flex justify-center flex-wrap gap-20 pt-20">
      {books.map((book) => (
        <div className="flex flex-col bg-white py-5 px-10 rounded-md gap-5 w-1/5" key={book.item_id}>
          <p className="text-2xl font-bold">{book.title}</p>
          <p className="text-xl font-bold">{book.author}</p>
          <p className="text-xl">{book.category}</p>
          <button type="button" onClick={() => onDeleteBook(book)} className="bg-red-600 text-white font-bold py-2 px-5 rounded-md">Delete</button>
        </div>
      ))}
    </section>
  );
};

export default Book;
