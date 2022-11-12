import { useEffect, useState } from 'react';
import * as Api from '../../api/movies-api';
import PropTypes from 'prop-types';


export const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    Api.fetchMovieReviews(id).then((p) =>setReviews(p));
  }, [id]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <div>
                <div>
                  <h3>Author: {author}</h3>
                  <p>{content}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>There is no reviews yet!</p>
      )}
    </>
  );
};

export default Reviews;

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
}