import React from 'react';
import { FaqContainer } from '../containers/accordion';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from '../containers/jumbotron';
import {HeaderContainer}  from '../containers/header';
import OptForm from '../components/optform';
import Feature from '../components/Feature';

export default function Home()
{
  return(
      <>
      <HeaderContainer>  
      <Feature>
        <Feature.Title> Unlimited films, TV programs and more.</Feature.Title>
        <Feature.SubTitle> Watch anywhere, Cancel at any time.</Feature.SubTitle>
        <OptForm>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button> Try it now </OptForm.Button>
        <OptForm.Text>Ready to watch? Enter yur email to create or restart your membership
        </OptForm.Text>
        </OptForm>
      </Feature>       
        </HeaderContainer>  
       <JumbotronContainer />
       <FaqContainer />
       <FooterContainer/>
    
      </>
  )
}