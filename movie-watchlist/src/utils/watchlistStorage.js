const KEY = "watchlist";

export const getWatchlist = () =>
  JSON.parse(localStorage.getItem(KEY)) || [];

export const saveWatchlist = (list) =>
  localStorage.setItem(KEY, JSON.stringify(list));
