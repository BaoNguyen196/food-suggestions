// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.API_KEY_FIREBASE,
  authDomain: 'food-suggestions-3758a.firebaseapp.com',
  projectId: 'food-suggestions-3758a',
  storageBucket: 'food-suggestions-3758a.appspot.com',
  messagingSenderId: '446399715949',
  appId: '1:446399715949:web:cadb45c1408a2561743d64',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log('firebaseConfig: ', firebaseConfig);
export default app;
