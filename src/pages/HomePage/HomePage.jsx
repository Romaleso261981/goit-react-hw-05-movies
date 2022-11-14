import { useEffect, useState } from 'react';
import { StyledLink, List } from './HomePage.styled';
import * as Api from '../../api/movies-api';
import { imageDefaultLink } from '../../api/imageDefaultLink';
import { Container } from '../../components/Container/Container';
import  defaultImg  from '../../img/portrait_placeholder.png';
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
console.log(movies);
    return (
        <Container>
            <h1>Trending now</h1>
            <List> 
            {movies.map(({ id, title, poster_path, state}) => {
                return <StyledLink to={`/movies/${id}`} state={state}>
                        <img src={poster_path ? `${imageDefaultLink}${poster_path}` : defaultImg} alt={title} />
                        <h3>{title}</h3>
                    </StyledLink>
            }
            )}
            </List>
        </Container>
    )
}
export default HomePage;

HomePage.propTypes = {
    movies: PropTypes.array.isRequired
}