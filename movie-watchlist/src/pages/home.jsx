import { useState, useEffect } from "react";
import { searchMulti } from "../api/tmdb";
import useDebounce from "../hooks/useDebounce";
import MediaCard from "../components/MediaCard";
import MediaModal from "../components/MediaModal";

export default function Home() {
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (!debounced) return setResults([]);

    setLoading(true);
    setError(false);

    searchMulti(debounced)
      .then(data => setResults(data.results || []))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [debounced]);

  return (
    <div className="container">
      <input
        placeholder="Search movies or TV shows..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      {loading && <div>Loading...</div>}
      {error && <div>Error fetching data</div>}
      {!loading && !results.length && debounced && <div>No results found</div>}

      <div className="grid">
        {results.map(item => (
          <MediaCard
            key={item.id}
            item={item}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>

      <MediaModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}
