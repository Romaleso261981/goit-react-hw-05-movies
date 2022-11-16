import { useEffect, useState } from 'react';
import { StyledLink, List } from './HomePage.styled';
import * as Api from '../../api/movies-api';
import Notiflix from 'notiflix';
import { imageDefaultLink } from '../../api/imageDefaultLink';
import { Container } from '../../components/Container/Container';
import defaultImg from '../../img/portrait_placeholder.png';
import PropTypes from 'prop-types';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      const controller = new AbortController();
      Api.fetchPopularMovies(controller).then(movies => setMovies(movies)).catch(error => {
        Notiflix.Notify.failure(`Ошибка запроса: ${error.message}`, { position: "top-center", autoClose: 2000 } ); 
    });
      return () => {
        controller.abort();
      };
    } catch (error) {
      console.log((error));
    }
    
      
  }, []);

  if (!movies) {
    return;
  }

  return (
    <Container>
      <h1>Trending now</h1>
      <List>
        {movies.map(({ id, title, poster_path, state }) => {
          return (
            <StyledLink key={id} to={`/movies/${id}`} state={state}>
              <img
                src={
                  poster_path ? `${imageDefaultLink}${poster_path}` : defaultImg
                }
                alt={title}
              />
              <h3>{title}</h3>
            </StyledLink>
          );
        })}
      </List>
    </Container>
  );
};
export default HomePage;

HomePage.propTypes = {
  movies: PropTypes.array,
};
