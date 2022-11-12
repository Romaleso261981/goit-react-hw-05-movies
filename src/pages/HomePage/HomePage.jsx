import { useEffect, useState } from 'react';
import { NavLink} from 'react-router-dom';
import * as Api from '../../api/movies-api';
import PropTypes from 'prop-types';
import placeholderImg from '../../img/poster.jpg';
import Containers from '../../components/Container/Container';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    Api.fetchPopularMovies().then(movies => setMovies(movies));
  }, []);

  let activeClassName = {
    color: '#2196f3',
    };
    
  if (!movies) {
    return;
  }

  return (
    <>
          <h1>Trending now</h1>
          <NavLink
            to={`/movies/rev`}
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            <p>Reviews</p>
          </NavLink>
      <Containers>
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
      </Containers>
    </>
  );
};
export default HomePage;

HomePage.propTypes = {
  movies: PropTypes.array,
};
