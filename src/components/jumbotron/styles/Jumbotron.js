import styled from 'styled-components/macro';

//macro gives me component name in Debugging tool instead of system generated component name in the className

export const Item = styled.div`
display: flex;
border-bottom: 8px solid #222;
padding: 40px 3%;
color: white;
overflow:hidden;
`;


export const Inner = styled.div` 
 display: flex; 
 align-items: center;
 justify-content: space-between;
 flex-direction: ${({ direction }) => direction };
   /* this props we are receiving from jumbo.data */
 max-width: 1200px;
 margin: auto;
 width: 100%;

 @media(max-width: 1000px)
 {
     flex-direction:column;
 }
`;

export const Container = styled.div``;
export const Pane = styled.div`
width: 50%;

@media (max-width: 1000px)
{
    width: 100%;
    padding: 0 40px;
    text-align: center;
}

`;
export const Title = styled.h1 `
font-size: 50px;
line-height: 1.1;
margin-bottom: 8px;

@media (max-width: 600px)
{
 font-size: 35px;
}


`;
export const SubTitle = styled.h2 `
font-size: 26px;
font-weight: normal;
line-height: normal;

@media(max-width: 600px)
{
    font-size: 18px;
}


`;
export const Image = styled.img `
max-maxWidth: 80%;
height:auto;
`;


