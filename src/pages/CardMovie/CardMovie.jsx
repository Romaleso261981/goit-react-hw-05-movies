import PropTypes from 'prop-types';
import {SearchBar} from '../../components/SearchBar/SearchBar'


export function CardMovie() {    
    return (<SearchBar />)
}

CardMovie.propTypes = {
    state: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string
}

export default CardMovie;