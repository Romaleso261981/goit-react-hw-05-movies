import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { imageDefaultLink } from '../../api/imageDefaultLink';
import * as api from '../../api/movies-api';
import {CardReview, AuthorReview, Avatar} from './ReviewsStyled'


function Reviews () {
    const [reviews, setReviews] = useState(null);
    const {movieId} = useParams();

    useEffect(() => {
      api.fetchMovieReviews(movieId).then((data) => setReviews(data.results));
    }, [movieId])   
  
  console.log(reviews);
    
    return  (reviews?.length > 0
            ? <ul>
            {reviews.map(({ id, author, content, author_details: { avatar_path: avatar } }) => {     
                    console.log(avatar)
                    return <li key={id}>
                                <CardReview >
                                    <AuthorReview>
                                        <Avatar src={avatar?.slice(1, 6) === "https"
                                            ? avatar.slice(1, avatar.length)
                                            : `${imageDefaultLink}${avatar}`}
                                            alt={author} />
                                        <h3>{author}</h3>
                                    </AuthorReview>
                                    <p>{content}</p>
                                </CardReview>
                            </li>
                })}
            </ul>
            : <div>No reviews</div>)       
}

export default Reviews;