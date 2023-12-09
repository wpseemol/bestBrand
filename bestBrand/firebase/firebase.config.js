import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCkoKt3H0MfcAT_9POoaI6L1p_vkd5hbgI',
    authDomain: 'bestbrand-9f85c.firebaseapp.com',
    projectId: 'bestbrand-9f85c',
    storageBucket: 'bestbrand-9f85c.appspot.com',
    messagingSenderId: '973756438681',
    appId: '1:973756438681:web:5256bf3f065a2e50a5c008',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
