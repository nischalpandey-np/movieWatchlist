import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home.jsx";
import Watchlist from "./pages/watchList.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="container nav-content">
          <div className="nav-left">
            <Link to="/" className="nav-link nav-home">🎬 MovieFlix</Link>
          </div>
          <div className="nav-right">
            <Link to="/" className="nav-link">🏠 Home</Link>
            <Link to="/watchlist" className="nav-link">⭐ Watchlist</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </BrowserRouter>
  );
}
