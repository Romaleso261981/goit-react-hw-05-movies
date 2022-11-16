import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { imageDefaultLink } from '../../api/imageDefaultLink';
import Notiflix from 'notiflix';
import * as api from '../../api/movies-api';
import { CardReview, AuthorReview, Avatar } from './ReviewsStyled';

function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    api.fetchMovieReviews(movieId, controller).then(data => setReviews(data.results)).catch(error => {
        Notiflix.Notify.failure(`Ошибка запроса: ${error.message}`, { position: "top-center", autoClose: 2000 } ); 
    });;
    return () => {
      controller.abort();
    };
  }, [movieId]);

 
  return reviews?.length > 0 ? (
    <ul>
      {reviews.map(
        ({ id, author, content, author_details: { avatar_path: avatar } }) => {
          return (
            <li key={id}>
              <CardReview>
                <AuthorReview>
                  <Avatar
                    src={
                      avatar?.slice(1, 6) === 'https'
                        ? avatar.slice(1, avatar.length)
                        : `${imageDefaultLink}${avatar}`
                    }
                    alt={author}
                  />
                  <h3>{author}</h3>
                </AuthorReview>
                <p>{content}</p>
              </CardReview>
            </li>
          );
        }
      )}
    </ul>
  ) : (
    <div>No reviews</div>
  );
}

export default Reviews;
