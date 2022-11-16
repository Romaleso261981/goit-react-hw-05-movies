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

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  > img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
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