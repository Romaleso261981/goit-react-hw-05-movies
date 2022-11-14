import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  margin-right: 20px;
  width: 100px;
  padding: 10px 0;
  border: 1px solid black;
  border-radius: 5px;
  background-color: whitesmoke;
  box-shadow: 0px 0px 10px 1px blanchedalmond;
  &.active {
    color: black;
    background-color: orange;
    box-shadow: inset 0px 0px 7px 1px #5878f667;
    box-shadow: inset 0px 0px 5px 1px #5878f667;
  }
`;
export const Header = styled.div`
  width: 100%;
  padding: 5px 20px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: greenyellow;
  box-shadow: 0px 0px 10px 1px blanchedalmond;
`;

// .navigation{
//   margin-bottom: 20px;
//   }

//   .navLink:not(:first-child){
//       margin-left: 20px;
//   }


