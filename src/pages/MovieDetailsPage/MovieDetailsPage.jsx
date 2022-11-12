import {
  NavLink,
  Route,
  Routes,
  useParams,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect, Suspense, lazy } from 'react';
import * as Api from '../../api/movies-api';
import {
  Image,
  Label,
  OverviewText,
  Wrapper,
  Description,
  Title,
  Path,
} from './MovieDetailsPage.styled';
import placeholderImg from '../../img/poster.jpg';
import PropTypes from 'prop-types';

const Cast = lazy(() => import('./../../components/Cast/Cast'));
const Reviews = lazy(() => import('./../../components/Reviews/Reviews'));

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
       Api.fetchMovieById(movieId).then((p) => setMovie(p)).catch('error');
     }
     , [movieId]);
 
 
     const { title, poster_path, vote_average, overview, genres} = movie;
     const movieGenres = genres.map(genre => genre.name).join(', ');
     const backLinkHref = location.state?.from?? '/';
   console.log(poster_path);
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
         <li>
           <NavLink to="cast" state={{ from: backLinkHref }}>Cast</NavLink>
         </li>
         <li>
           <NavLink to="reviews" state={{ from: backLinkHref }}>Reviews</NavLink>
         </li>
       </ul>    
        <Suspense fallback={<h1>LOADING THE ROUTE...</h1>}>
           <Routes>
               <Route path="cast" element={<Cast id={movieId} />} />
               <Route path="reviews" element={<Reviews id={movieId} />} />
           </Routes>
        </Suspense>
        </>
     
 </>
     )
}
 
export default MovieDetailsPage;

MovieDetailsPage.propTypes = {
    id: PropTypes.string,
  }