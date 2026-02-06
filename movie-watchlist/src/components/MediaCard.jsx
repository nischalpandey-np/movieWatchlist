import WatchlistButton from "./WatchlistButton";

export default function MediaCard({ item, onClick }) {
  const img = item.poster_path
    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
    : "";

  return (
    <div className="card" onClick={onClick}>
      {img ? (
        <img src={img} alt={item.title || item.name} />
      ) : (
        <div className="placeholder">{item.title || item.name}</div>
      )}

      <div className="overlay">
        <div className="title">{item.title || item.name}</div>
        <div className="meta">{item.release_date || item.first_air_date} {item.vote_average ? `· ⭐ ${item.vote_average.toFixed(1)}` : ""}</div>
      </div>

      <div className="card-body">
        <WatchlistButton item={item} onToggle={onClick} />
      </div>
    </div>
  );
}
