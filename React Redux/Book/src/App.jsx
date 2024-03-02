import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<CategoriesPage />} />
    </Routes>
  );
}

export default App;
