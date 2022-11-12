import { useEffect, useState } from 'react';
import {Container } from './HomePage.styled';
import * as Api from '../../api/movies-api';
import PropTypes from 'prop-types';
import placeholderImg from '../../img/poster.jpg';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    Api.fetchPopularMovies().then(movies => setMovies(movies));
  }, []);

  if (!movies) {
    return;
  }

  return (
    <>
      <h1>Trending now</h1>
      <Container>
        {movies.map(({ id, title, poster_path }) => {
          console.log(movies);
          return (
              <li key={id}>
              <img src={poster_path ? 
           `https://image.tmdb.org/t/p/w300${poster_path}` 
           : placeholderImg} alt={title} 
           />
            </li>
          );
        })}
      </Container>
    </>
  );
};
export default HomePage;

HomePage.propTypes = {
  movies: PropTypes.array,
};
