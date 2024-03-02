import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </>
  );
}

export default App;
