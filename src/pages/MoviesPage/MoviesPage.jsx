import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import * as Api from '../../api/movies-api';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Container } from '../../components/Container/Container';
import defaultImg from '../../img/portrait_placeholder.png';
import { imageDefaultLink } from '../../api/imageDefaultLink';
import { StyledLink, List } from './MoviesPage.styled';
import PropTypes from 'prop-types';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const handleSearch = value => {
    setSearchParams({ query: value });
  };

  useEffect(() => {
    const controller = new AbortController();
    const query = searchParams.get('query') ?? '';
    if (query) {
      Api.fetchMovieDetails(query, controller).then(movies => setMovies(movies));
      return () => {
        controller.abort();
      };
    }
  }, [searchParams]);

 
  return (
    <Container>
      <SearchBar onSearch={handleSearch} />
      {movies.length > 0 && (
        <List>
          {movies.map(({ id, title, poster_path }) => (
            <li key={id}>
              <StyledLink to={`${id}`} state={{ from: location }}>
                <img
                  src={
                    poster_path
                      ? `${imageDefaultLink}${poster_path}`
                      : defaultImg
                  }
                  alt={title}
                />
                <h3>{title}</h3>
              </StyledLink>
            </li>
          ))}
        </List>
      )}
    </Container>
  );
};

export default MoviesPage;

MoviesPage.propTypes = {
  search: PropTypes.string,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};
