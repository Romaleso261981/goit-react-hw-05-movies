import { useEffect, useState } from 'react';
import * as Api from '../../api/movies-api';
import { CastList, CastItem} from './Cast.styled';
import placeHolderPerson from './../../img/portrait_placeholder.png';
import PropTypes from 'prop-types';


export const Cast = ({ id }) => {
  const [cast, setCast] = useState(null);
  useEffect(() => {
    Api.fetchMovieCast(id).then((p) => setCast(p));
  }, [id]);

  return (
    <>
      {cast && (
        <CastList>
          {cast.map(({ name, character, profile_path, id }) => (
            <CastItem key={id}>
                {profile_path && (
                  <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} />
                )}
                {!profile_path && (
                  <img src={placeHolderPerson} alt={name} />
                )}
                  <p>{name}</p>
                  <p>Character: {character}</p>
            </CastItem>
          ))}
        </CastList>
      )}
    </>
  );
};

export default Cast;

Cast.propTypes = {
    id: PropTypes.string.isRequired,
  }

  