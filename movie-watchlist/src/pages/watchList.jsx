import { useState, useEffect } from "react";
import { getWatchlist } from "../utils/watchlistStorage";
import MediaCard from "../components/MediaCard";

export default function Watchlist() {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(getWatchlist());
  }, []);

  const handleUpdate = () => {
    setList(getWatchlist()); // refresh after remove
  };

  return (
    <div className="container">
      <h2>My Watchlist</h2>

      {list.length === 0 && <div>No items in watchlist</div>}

      <div className="grid">
        {list.map(item => (
          <MediaCard key={item.id} item={item} onClick={handleUpdate} />
        ))}
      </div>
    </div>
  );
}
