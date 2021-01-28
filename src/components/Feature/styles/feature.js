import styled from 'styled-components/macro';

export const Container = styled.div `
display:flex;
flex-direction:column;
border-bottom: 8px solid #222;
texxt-align: center;
padding: 165px 45px;`;

export const Title = styled.h1 `
color:white;
font-size:50px;
font-weight:500;
margin:auto;


@media(max-width: 680px)
{
    font-size: 35px;
}
`;

export const SubTitle = styled.h2 `
color: white;
margin:auto;
`;
