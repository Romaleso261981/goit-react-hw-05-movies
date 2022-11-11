import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Input = styled.input`
    padding: 5px 10px;
    font-size: 16px;
    outline: 0px solid #e30b5c;
    border-radius: 4px;
    transition: border-color linear 250ms;
     &:focus {
        outline: 0;
        border-color: #e30b5c;
    }
`;

export const StyledLink = styled(NavLink)`
    color: #000;
    font-size: 1.2rem;
    text-decoration: none;
    &:hover {
        color: orangered;
    }
`;

export const SearchContainer = styled.div`
    display: block;
`;