import { Link } from 'react-router-dom';
import { imageDefaultLink } from '../../api/imageDefaultLink';
import PropTypes from 'prop-types';
import  defaultImg  from '../../img/poster.jpg';


export function CardMovie({ state, id, title, poster }) {    
    return (<li key={id}>
                    <Link to={`/movies/${id}`} state={state}>
                        <img src={poster ? `${imageDefaultLink}${poster}` : defaultImg} alt={title} />
                        <h3>{title}</h3>
                    </Link>
            </li>)
}

CardMovie.propTypes = {
    state: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string
}