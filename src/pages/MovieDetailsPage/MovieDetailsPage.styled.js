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
  display: block;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ccc;
  text-decoration: none;
  width: fit-content;
    &:hover {
    background-color: #orange;
  `;