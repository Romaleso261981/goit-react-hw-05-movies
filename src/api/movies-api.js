import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '3290f7c502e8a1167263be702b28bdfc';
  
export const fetchPopularMovies = async (controller) => {
  const options = {signal: controller.signal };
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`, options);
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

export const fetchMovieDetails = async (query, controller) => {
  console.log("fetchMovieDetails");
  const options = {signal: controller.signal };
  const response = await axios.get(`search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`, options);
  return response.data.results;
}

export const fetchMovieById = async (id, controller) => {
  console.log("fetchMovieById");
  const options = {signal: controller.signal };
  const response = await axios.get(`movie/${id}?api_key=${API_KEY}`, options);
  return response.data;
}

export const fetchGenres = async () => {
  const response = await axios.get(`genre/movie/list?api_key=${API_KEY}`);
  return response.data.results;
}