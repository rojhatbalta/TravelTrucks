import { Routes, Route } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import HomePage from "./pages/HomePage";
import TrackDetailsPage from "./pages/TrackDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/catalog/:id" element={<TrackDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
