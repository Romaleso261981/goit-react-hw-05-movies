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
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
  background-color: antiquewhite;
  @media screen and (min-width: 380px) {
    .List {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (min-width: 768px) {
    .List {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media screen and (min-width: 1200px) {
    .List {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;
