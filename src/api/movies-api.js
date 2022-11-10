import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '0d3c19a06e728eab3e881b744ba766c6';

export const fetchPopularMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
}

export const fetchMovieReviews = async (id) => {
  const response = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`);
  return response.data.results;
}

export const fetchMovieCast = async (id) => {
  const response = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
  return response.data.cast;
}

export const fetchMovieDetails = async (query) => {
  const response = await axios.get(`search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`);
  return response.data.results;
}

export const fetchMovieById = async (id) => {
  const response = await axios.get(`movie/${id}?api_key=${API_KEY}`);
  return response.data;
}

export const fetchGenres = async () => {
  const response = await axios.get(`genre/movie/list?api_key=${API_KEY}`);
  return response.data.results;
}