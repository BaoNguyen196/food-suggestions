import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE,
  authDomain: 'food-suggestions-3758a.firebaseapp.com',
  projectId: 'food-suggestions-3758a',
  storageBucket: 'food-suggestions-3758a.appspot.com',
  messagingSenderId: '446399715949',
  appId: '1:446399715949:web:cadb45c1408a2561743d64',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db };
