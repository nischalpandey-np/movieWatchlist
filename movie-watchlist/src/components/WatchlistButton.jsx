import { useState } from "react";
import { getWatchlist, saveWatchlist } from "../utils/watchlistStorage";

export default function WatchlistButton({ item, onToggle }) {
  const [saved, setSaved] = useState(
    getWatchlist().some(i => i.id === item.id)
  );

  const toggle = () => {
    let list = getWatchlist();
    if (saved) {
      list = list.filter(i => i.id !== item.id);
    } else {
      list.push(item);
    }
    saveWatchlist(list);
    setSaved(!saved);
    onToggle?.();
  };

  return <button className="btn" onClick={toggle}>{saved ? "Remove" : "Watchlist"}</button>;
}
