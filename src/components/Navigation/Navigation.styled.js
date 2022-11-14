import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  width: 100px;
  padding: 10px 0;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 1px blanchedalmond;
  &.active {
    color: white;
    box-shadow: inset 0px 0px 7px 1px #5878f667;
    box-shadow: inset 0px 0px 5px 1px #5878f667;
  }
`;

// .navigation{
//   margin-bottom: 20px;
//   }

//   .navLink:not(:first-child){
//       margin-left: 20px;
//   }


