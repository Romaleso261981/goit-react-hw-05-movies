import { Link } from 'react-router-dom';
import { imageDefaultLink } from 'services/imageDefaultLink';
import  defaultImg  from '../../img/portrait_placeholder.png';


export function CardMovie({ state, id, title, poster }) {    
    return (<li key={id}>
                    <Link to={`/movies/${id}`} state={state}>
                        <img src={poster ? `${imageDefaultLink}${poster}` : defaultImg} alt={title} />
                        <h3>{title}</h3>
                    </Link>
            </li>)
}

