import axios from "axios";

export const getTopRated = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}`
  );

  return response.data.results;
};

export const getNowPlaying = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}`
  );

  return response.data.results;
};

export const getPopular = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`
  );

  return response.data.results;
};

export const getMovie = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`
  );

  return response.data;
};
