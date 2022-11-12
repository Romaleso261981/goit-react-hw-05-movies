import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import * as Api from '../../api/movies-api'
import SearchBar from '../../components/SearchBar/SearchBar'
import { StyledLink, SearchContainer } from './MoviesPage.styled';
import PropTypes from 'prop-types';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation;
    

    const  hendleSearch = value => {
        setSearchParams({ query: value })
    }

    useEffect(() => {
        const query = searchParams.get('query') ?? '';
        if (query) {
            Api.fetchMovieDetails(query)
            .then(movies => setMovies(movies));
        }
}, [searchParams])


    return (
        <SearchContainer>
             <SearchBar onSearch={hendleSearch} />
        {movies.length > 0 && (
            <ul>
            {movies.map(({id, title}) => (
                <li key={id}>
             <StyledLink to={`${id}`} state={{ from: location }}>
              {title}
            </StyledLink>
                </li> 
            ))}
            </ul>
        )} 
        </SearchContainer>
       
)

};

export default MoviesPage;

MoviesPage.propTypes = {
    search: PropTypes.string,
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string
    }))
}
