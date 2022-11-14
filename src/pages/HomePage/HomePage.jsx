import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { fetchPopularMovies } from '../../api/movies-api';
import { CardMovie } from '../../pages/MoviesPage/MoviesPage';
// import PropTypes from 'prop-types';
import Containers from '../../components/Container/Container';
import { Link } from 'react-router-dom';
import  defaultImg  from '../../img/poster.jpg';

export const HomePage = () => {
//   const { pathname, search } = useLocation();
//   const currenUrl = `${pathname}${search}`;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies().then(data => setMovies(data));
  }, []);

  if (!movies) {
    return;
  }

  return (
    <Containers>
      <CardMovie>
              {movies.map(({ id, original_title, poster_path, state }) => {
                  console.log(id, original_title, poster_path, state)
                  return <li key={id}>
                    <Link to={`/movies/${id}`} state={state}>
                        <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : defaultImg} alt={original_title} />
                        <h3>{original_title}</h3>
                    </Link>
            </li> })}
      </CardMovie>
      <h2>Trending today</h2>
    </Containers>
  );
};
export default HomePage;

// HomePage.propTypes = {
//   movies: PropTypes.array,
// };
