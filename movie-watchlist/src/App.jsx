import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home.jsx";
import Watchlist from "./pages/watchList.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="container" style={{ marginBottom: '16px' }}>
        <Link to="/" style={{ marginRight: '12px' }}>Home</Link>
        <Link to="/watchlist">Watchlist</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </BrowserRouter>
  );
}
