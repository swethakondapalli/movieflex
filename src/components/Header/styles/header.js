import styled from 'styled-components/macro';
import {Link as ReactRouterLink} from 'react-router-dom';

export const Background = styled.div `
display:flex;
flex-direction:column;
background: url(${({ src })=> (src ? '..images/misc/${src}.jpg' : '../images/misc/home-bg.jpg')}) top left/cover no-repeat;
`;
export const Frame = styled.div `
border-bottom: 8px solid #222;`;

export const Container = styled.div `
display: flex;
margin: 0 56px;
height: 64px;
padding: 18px 0;
justify-Content:space-between;
align-items: center;
border-bottom: 8px solid #222;

a{
    display:flex;
    padding: 2px;
    text-align: center;    
}

@media(max-width:1000px)
{
    margin: 0 30px;
}
}
 
`;

export const Logo = styled.img `
 width: 250px;
 height: auto;
 margin-right:40px;

 @media(min-width: 1449px)
 {
     height:45 px;
     widtth:167 px;
 }

`;

export const ButtonLink = styled(ReactRouterLink) `
display: block;
background-color: #e50914;
width: 84px;
height: fit-content;
color:white;
border:0;
font-size:15px;
border-radius: 3px;
padding: 8px, 17px;
cursor:pointer;
text-decoration:none;
box-sizing: border-box;
 

&:hover{
    background-color: #f40612;
}

`;