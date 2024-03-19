import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CoinsPage from './pages/CoinsPage';
import CoinDetailsPage from './pages/CoinDetailsPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<CoinsPage />} path="/" />
        <Route element={<CoinDetailsPage />} path="/coins/:coinId" />
      </Routes>
    </>
  );
}

export default App;
