import styled from 'styled-components';

export const CastList = styled.ul`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export const CastItem = styled.li`
  max-width: 300px;
  margin-right: 15px;
  margin-bottom: 25px;
  > p {
    font-size: 16px;
    font-weight: 700;
  }
  > img {
    width: 100%;
  }
  > h3 {
    font-size: 14px;
  }
`;
