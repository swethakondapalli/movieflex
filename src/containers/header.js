import React from 'react';
import {Header} from '../components';
import { Logo } from '../components/Header/styles/header';
import * as ROUTES from '../constants/route';
import logo from '../logo.png';


export function HeaderContainer({children, ...restProps})
{
   return(<Header>
          <Header.Frame>
           <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo}/>
           <Header.ButtonLink to= {ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>                  
        </Header.Frame>   
           {children} 
    </Header>
             
    )
}