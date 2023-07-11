import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

import 'firebase/compat/firestore';
import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyDfKWK8JaGsUJvalD-_3T3CkrnlHH1LJm0",
    authDomain: "weatherapp-a8623.firebaseapp.com",
    projectId: "weatherapp-a8623",
    storageBucket: "weatherapp-a8623.appspot.com",
    messagingSenderId: "745791615391",
    appId: "1:745791615391:web:a7adbf4eb263913e4b8daa",
    measurementId: "G-07MF09V0M9"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const db = getFirestore(app)
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore()

export default db