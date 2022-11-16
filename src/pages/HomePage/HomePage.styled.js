import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  width: 100%;
  padding: 10px;
  border: 1px solid;
  border-radius: 10px;
  list-style: none;
  text-decoration: none;
  box-shadow: 0px 0px 20px 1px blanchedalmond;
  &:hover {
    color: orangered;
  }
`;
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  > img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
