import styled from 'styled-components';


export const CastList = styled.ul`
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    width: 950px;
    `;


export const CastItem = styled.li`
    max-width: 300px;
    margin-right: 15px;
    margin-bottom: 25px;
    > img {
        max-width: 300px;
    }
     > p{
        font-size: 16px;
        font-weight: 700;
     }
    `;