import { NavLink, useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import * as Api from './../../api/movies-api';
import {
  Image,
  Label,
  OverviewText,
  Wrapper,
  Description,
  Title,
  Path,
  Button,
} from './MovieDetailsPage.style';
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
    const controller = new AbortController();
    Api.fetchMovieById(movieId, controller).then(setMovie).catch('error');
    return () => {
      controller.abort();
    };
  }, [movieId]);

  const { title, poster_path, vote_average, overview, genres, id } = movie;
  const movieGenres = genres.map(genre => genre.name).join(', ');
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <Path to={backLinkHref}>Go Back</Path>
      <>
        <Wrapper>
          <Image
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : placeholderImg
            }
            alt={title}
          />
          <Description>
            <Title>{title}</Title>
            <Label>User score: {vote_average * 10} %</Label>
            <Label>Overview</Label>
            <OverviewText>{overview}</OverviewText>
            <Label>Genres</Label>
            <p>{movieGenres}</p>
          </Description>
        </Wrapper>
        <ul>
          <Button>
            <NavLink
              to={`/movies/${id}/cast`}
              state={{ from: backLinkHref }}
            >
              Cast
            </NavLink>
          </Button>
          <Button>
            <NavLink
              to={`/movies/${id}/Reviews`}
              state={{ from: backLinkHref }}
            >
              Reviews
            </NavLink>
          </Button>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </>
    </>
  );
};
export default MovieDetailsPage;

MovieDetailsPage.propTypes = {
  id: PropTypes.string,
};
