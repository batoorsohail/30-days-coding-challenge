import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from '../components/Book';
import AddBook from '../components/AddBook';
import { fetchBooks } from '../redux/books/booksSlice';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch])

  return (
    <section className="bg-[#cfcfcf] h-[90vh]">
      <Book />
      <AddBook />
    </section>
  );
};

export default HomePage;
