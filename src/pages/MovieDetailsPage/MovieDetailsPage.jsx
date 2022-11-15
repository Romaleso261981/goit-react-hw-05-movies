import { NavLink, useParams, useLocation} from 'react-router-dom';
import { useState, useEffect} from 'react';
import * as Api from './../../api/movies-api';
import {Image, Label, OverviewText, Wrapper, Description, Title, Path, Button } from './MovieDetailsPage.style';
import placeholderImg from './../../img/poster.jpg';
import PropTypes from 'prop-types';

const INIT_STATE = {
  title: '',
  poster_path: '',
  vote_average: '',
  overview: '',
  genres: [],
  };

export const MovieDetailsPage = () => {
   const { movieId } = useParams();
   const [movie, setMovie] = useState(INIT_STATE);
   const location = useLocation();

   useEffect(() => {
      Api.fetchMovieById(movieId).then(setMovie).catch('error');
    }
    , [movieId]);


    const { title, poster_path, vote_average, overview, genres} = movie;
    const movieGenres = genres.map(genre => genre.name).join(', ');
    const backLinkHref = location.state?.from?? '/';
  
    return (
      <>
      <Path to={backLinkHref}>Go Back</Path>
      <>
    <Wrapper>
      <Image src={poster_path ? 
          `https://image.tmdb.org/t/p/w300${poster_path}` 
          : placeholderImg} alt={title} 
          />
      <Description>
          <Title>{title}</Title>
          <Label>User score: {vote_average *10} %</Label>
          <Label>Overview</Label>
          <OverviewText>{overview}</OverviewText>
          <Label>Genres</Label>
          <p>{movieGenres}</p>
      </Description>
      </Wrapper>
       <ul>
        <Button>
        <NavLink to="cast" state={{ from: backLinkHref }}>Cast</NavLink>
        </Button>
        <Button>
          <NavLink to="reviews" state={{ from: backLinkHref }}>Reviews</NavLink>
        </Button>
      </ul> 
       </>
    
</>
    )
}
export default MovieDetailsPage;

MovieDetailsPage.propTypes = {
  id: PropTypes.string,
}