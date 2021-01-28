import React, {useContext, useState} from 'react';
import {HeaderContainer} from '../containers/header';
import {FooterContainer} from '../containers/footer';
import {Form} from '../components';
import * as ROUTES from '../constants/route';
import {useHistory} from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';



export default function Signup()
{

    const {firebase} = useContext(FirebaseContext);
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    //check if input email and password are valid
    //email and password are correct

    const isInvalid =  firstName === '' || password === '' || emailAddress === '';
    const handleSignUp = (event) => {
                         event.preventDefault();
                         firebase
                        .auth()
                        .createUserWithEmailAndPassword(emailAddress, password)
                        .then((result) => {
                                         result.user
                                           .updateProfile({
                                                displayName: firstName,
                                                photoURL: Math.floor(Math.random()*5)+1,
                                                          })
                                              .then(()=> {history.push(ROUTES.BROWSE)})

                                              }  
                              )     
                        .catch((error) => {
                            setFirstName('');
                            setEmailAddress('');
                            setPassword('');
                            setError(error.message);
                             })
                                   
        
    };

    return <> <HeaderContainer>
               <Form>
                   <Form.Title>Sign Up</Form.Title>
                   {error  && <Form.Error> {error} </Form.Error>}
                  <Form.Base onSubmit ={handleSignUp} method ="POST">
                    <Form.Input
                      placeholder = "First Name"
                      value ={firstName}
                      onChange = {({target})=> setFirstName(target.value)}
                      />
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
                      <Form.Submit disabled={isInvalid} type="submit"> Sign Up </Form.Submit>
                  </Form.Base>
                  <Form.Text>
                    Already a user ? <Form.Link to="/signIn"> Sign In </Form.Link>
                  </Form.Text>
                    <Form.TextSmall>
                    This page is protected by Google reCAPTCHA to ensure you are not robot. Learn more.
                  </Form.TextSmall>
               </Form>
            </HeaderContainer>
            <FooterContainer/>
            </>
}