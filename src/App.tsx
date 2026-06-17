import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash";
import ArtPortfolio from "./pages/ArtPortfolio";
import Home from "./pages/Home";
import PhotoAlbum from "./pages/PhotoAlbum";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art" element={<ArtPortfolio />} />
        <Route path="/photos" element={<PhotoAlbum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
