import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from '../seed';
//we need to somehow seed the database

const config = {
    apiKey: "AIzaSyBP03f5pJ9d7yMRILVztrYO3tYkBsXQiN0",
    authDomain: "movieflix-3fe2a.firebaseapp.com",
    projectId: "movieflix-3fe2a",
    storageBucket: "movieflix-3fe2a.appspot.com",
    messagingSenderId: "625683164891",
    appId: "1:625683164891:web:de7769f9429a4929f8e6fe"};


const firebase = Firebase.initializeApp(config);
//seedDatabase(firebase);
export {firebase};