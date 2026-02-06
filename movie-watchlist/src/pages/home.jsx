import { useState, useEffect } from "react";
import { searchMulti } from "../api/tmdb";
import useDebounce from "../hooks/useDebounce";
import MediaCard from "../components/MediaCard";
import MediaModal from "../components/MediaModal";

const sampleItems = [
  { id: 1, title: "Inception", poster_path: "/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg", release_date: "2010-07-16", vote_average: 8.3 },
  { id: 2, title: "The Matrix", poster_path: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", release_date: "1999-03-31", vote_average: 8.1 },
  { id: 3, title: "Interstellar", poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", release_date: "2014-11-07", vote_average: 8.6 },
  { id: 4, title: "Stranger Things", poster_path: "/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg", first_air_date: "2016-07-15", vote_average: 8.4 }
];

export default function Home() {
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query);
  const [results, setResults] = useState(sampleItems);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (!debounced) return setResults(sampleItems);

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
