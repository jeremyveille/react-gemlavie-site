import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyArSpB7Y1JIRjO4Mgx6MUaTXrwekDVeI2E",
  authDomain: "react-gemlavie-site.firebaseapp.com",
  projectId: "react-gemlavie-site",
  storageBucket: "react-gemlavie-site.firebasestorage.app",
  messagingSenderId: "1092155825417",
  appId: "1:1092155825417:web:1c5897029e9e65d82f07d8"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
