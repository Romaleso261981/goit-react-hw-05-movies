import axios from 'axios';

const API = axios.create({
  baseURL: 'http://185.233.118.244:8080/user',
  mode: 'cors',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },

  // baseURL: "http://localhost:8080/user",
});

// axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '3290f7c502e8a1167263be702b28bdfc';

export const fetchPopularMovies = async () => {
  const bodyRequest = {
    month: '03',
    type: 'done',
    year: 2023,
  };
  console.log('fetchPopularMovies');
  // const options = { signal: controller.signal };
  const response = await API.get(`/api/finances/`, { params: bodyRequest });
  console.log(response.data);
  return response.data.results;
};

export const fetchMovieReviews = async (id, controller) => {
  const options = { signal: controller.signal };
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}`,
    options
  );
  return response.data;
};

export const fetchMovieCast = async (id, controller) => {
  const options = { signal: controller.signal };
  const response = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}`,
    options
  );
  return response.data;
};

export const fetchMovieDetails = async (query, controller) => {
  const options = { signal: controller.signal };
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`,
    options
  );
  return response.data.results;
};

export const fetchMovieById = async (id, controller) => {
  const options = { signal: controller.signal };
  const response = await axios.get(`movie/${id}?api_key=${API_KEY}`, options);
  return response.data;
};

export const fetchGenres = async controller => {
  const options = { signal: controller.signal };
  const response = await axios.get(
    `genre/movie/list?api_key=${API_KEY}`,
    options
  );
  return response.data.results;
};
