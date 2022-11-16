import styled from 'styled-components';

export const Avatar = styled.img`
   width: 70px;
    height: 70px;
    border-radius: 50%;
    background-repeat: no-repeat;
    
    background-size: cover;
`;
export const AuthorReview = styled.div`
     display: flex;
    align-items: center;
    > h3 {
    margin-left: 20px;
}
> p {
text-align: left;
}
`;
export const CardReview = styled.div`
margin-top: 50px;
border: 1px solid grey;
padding: 10px;
border-radius: 5px;
`;

