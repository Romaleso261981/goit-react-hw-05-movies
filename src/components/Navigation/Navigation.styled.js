import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// export const Container = styled.div`
// max-width: 960px;
// margin: 0 auto;
// padding: 0 16px;
// `;


export const Link = styled(NavLink)`
max-width: 960px;
margin: 0 auto;
padding: 0 16px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  > nav {
    display: flex;
  }
`;

// .navigation{  
//   margin-bottom: 20px;
//   }
  
//   .navLink{
//       display: inline-block;
//       text-align: center;
//       text-decoration: none;
//       width: 100px;
//       padding: 10px 0;
//       border: 1px solid var(--brand-color);
//       border-radius: 5px;
//       box-shadow: 0px 0px 10px 1px var(--brand-color);
//   }
  
//   .navLink:not(:first-child){
//       margin-left: 20px;
//   }
  
//   .navLink:hover,
//   .navLink:focus{
//       box-shadow: inset 0px 0px 7px 1px var(--brand-color);
//       box-shadow: inset 0px 0px 5px 1px var(--brand-color);
//   }