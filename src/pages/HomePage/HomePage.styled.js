import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    color: #000;
    font-size: 1.2rem;
    text-decoration: none;
    &:hover {
        color: orangered;
    }
`;