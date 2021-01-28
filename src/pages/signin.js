import React, {useContext, useState} from 'react';
import {HeaderContainer} from '../containers/header';
import {FooterContainer} from '../containers/footer';
import {Form} from '../components';
import * as ROUTES from '../constants/route';
import {useHistory} from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';



export default function Signin()
{

    const {firebase} = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    //check if input email and password are valid
    //email and password are correct

    const isInvalid = password === '' || emailAddress === '';
    const handleSignIn = (event) => {
         event.preventDefault();
                       
        firebase
        .auth()
        .signInWithEmailAndPassword(emailAddress,password)
        .then(()=> //push to browse page
             {
                 history.push(ROUTES.BROWSE);
             })
        .catch((error) => 
         {
             setEmailAddress(''); //setEmailAddress to empty. firebase returns with error message
             setPassword('');
             setError(error.message);
         });
    };

    return <> <HeaderContainer>
               <Form>
                   <Form.Title>Sign In</Form.Title>
                   {error  && <Form.Error> {error} </Form.Error>}
                  <Form.Base onSubmit ={handleSignIn} method ="POST">
                      <Form.Input
                      placeholder = "Email Address"
                      value ={emailAddress}
                      onChange = {({target})=> setEmailAddress(target.value)}
                      />
                      <Form.Input
                      type="Password"
                      placeholder = "Password"
                      value = {password}
                      autoComplete="off"
                      onChange = {({target})=> setPassword(target.value)}
                      />
                      <Form.Submit disabled={isInvalid} type="submit"> Sign In </Form.Submit>
                  </Form.Base>
                  <Form.Text>
                    New to Netflix ? <Form.Link to="/signup"> Sign up now.</Form.Link>
                  </Form.Text>
                    <Form.TextSmall>
                    This page is protected by Google reCAPTCHA to ensure you are not robot. Learn more.
                  </Form.TextSmall>
               </Form>
            </HeaderContainer>
            <FooterContainer/>
            </>
}