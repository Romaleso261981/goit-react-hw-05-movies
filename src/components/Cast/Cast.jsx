import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { imageDefaultLink } from '../../api/imageDefaultLink';
import * as api from '../../api/movies-api';
import placeholderImage from '../../img/portrait_placeholder.png';
import { CastList, CastItem } from './Cast.styled';

function Cast() {
  const [data, setData] = useState(null);
  const movieId = useParams().movieId;

  useEffect(() => {
    const controller = new AbortController();
    api.fetchMovieCast(movieId, controller).then(response => setData(response.cast));
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    data && (
      <CastList>
        {data.map(response => {
          return (
            <CastItem key={response.id}>
              <div>
                <img
                  src={
                    response.profile_path
                      ? `${imageDefaultLink}${response.profile_path}`
                      : placeholderImage
                  }
                  alt={response.name}
                />
                <h3>{response.name}</h3>
                <p>{response.character}</p>
              </div>
            </CastItem>
          );
        })}
      </CastList>
    )
  );
}

export default Cast;
