import WatchlistButton from "./WatchlistButton";

export default function MediaCard({ item, onClick }) {
  const img = item.poster_path
    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
    : "";

  return (
    <div className="card" onClick={onClick}>
      {img && <img src={img} alt={item.title || item.name} />}
      <div className="card-body">
        <h4>{item.title || item.name}</h4>
        <WatchlistButton item={item} />
      </div>
    </div>
  );
}
