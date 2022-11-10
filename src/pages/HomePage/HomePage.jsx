import { useEffect, useState } from 'react';
import { StyledLink } from './HomePage.styled';
import * as Api from '../../api/movies-api';
import PropTypes from 'prop-types';

export const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        Api.fetchPopularMovies().then(movies => setMovies(movies))
        
    }
    , []);

    if (!movies) {
        return;
      }

    return (
        <>
         <h1>Trending now</h1>
            <ul> 
            {movies.map(({ id, title }) => {
                return <li key={id}>
                    <StyledLink to={`/movies/${id}`}>{title}</StyledLink>
                </li>
            }
            )}
            </ul>
        </>
    )
}
export default HomePage;

HomePage.propTypes = {
    movies: PropTypes.array
}