import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import RocketsPage from './pages/RocketsPage';
import MissionsPage from './pages/MissionsPage';
import MyProfilePage from './pages/MyProfilePage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<RocketsPage />} />
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="/myProfile" element={<MyProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
