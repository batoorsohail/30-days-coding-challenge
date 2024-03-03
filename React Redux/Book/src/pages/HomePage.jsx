import Book from '../components/Book';
import AddBook from '../components/AddBook';

const HomePage = () => (
  <section className="bg-slate-900 h-screen">
    <Book />
    <AddBook />
  </section>
);

export default HomePage;
