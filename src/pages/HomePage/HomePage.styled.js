import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
display: block;
margin: auto;
  color: #000;
  font-size: 1.2rem;
  text-decoration: none;
  &:hover {
    color: orangered;
  }
`;
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  background-color: azure;
`;

