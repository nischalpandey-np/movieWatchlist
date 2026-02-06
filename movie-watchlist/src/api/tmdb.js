const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE = "https://api.themoviedb.org/3";

export const searchMulti = async (q) => {
  const res = await fetch(
    `${BASE}/search/multi?api_key=${API_KEY}&query=${q}`
  );
  if (!res.ok) throw new Error();
  return res.json();
};
