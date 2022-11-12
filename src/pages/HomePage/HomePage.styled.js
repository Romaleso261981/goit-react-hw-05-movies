import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #000;
  font-size: 1.2rem;
  text-decoration: none;
  &:hover {
    color: orangered;
  }
`;
export const Container = styled.ul`
  padding-left: 15px;
  padding-right: 15px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    .container {
      width: 768px;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media screen and (min-width: 1200px) {
    .container {
      width: 1200px;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;
