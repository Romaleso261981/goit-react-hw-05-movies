import { useEffect, useState } from 'react';
import { Outlet} from "react-router-dom";
import { fetchPopularMovies } from '../../api/movies-api';
import {CardMovie} from '../MoviesPage/MoviesPage'
import {currenUrl} from '../../api'

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies().then(data => setMovies(data));
  }, []);

  if (!movies) {
    return;
  }

  return (
    <>
      <h2>Trending today</h2>
        <CardMovie>
                {movies.map(({ id, original_title, poster_path }) => {
                    return <CardMovie
                        key={id}
                        state={currenUrl}
                        id={id}
                        title={original_title}
                        poster={poster_path} />
            })}
            <Outlet />
        </CardMovie>
    </>
  );
};
export default HomePage;

