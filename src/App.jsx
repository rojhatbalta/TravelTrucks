import { Routes, Route } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import HomePage from "./pages/HomePage/HomePage";
import TrackDetailsPage from "./pages/TruckDetailsPage/TrackDetailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

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
