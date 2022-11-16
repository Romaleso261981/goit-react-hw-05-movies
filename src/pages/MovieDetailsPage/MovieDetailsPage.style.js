import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  width: 500px;
  height: auto;
`;
export const Button = styled(NavLink)`
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
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: fit-content;
  margin-left: 30px;
`;

export const Title = styled.h2`
  font-weight: 700;
`;

export const Label = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

export const OverviewText = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const Path = styled(NavLink)`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  margin-left: 140px;
  margin-bottom: 20px;
  width: 100px;
  padding: 10px 0;
  border-radius: 5px;
  background-color: whitesmoke;
  box-shadow: 0px 0px 10px 1px blanchedalmond;
  &.active {
    color: black;
    background-color: orange;
  }
`;
