import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD0GLT_6u0SjHNIWdty2E6O2BMcj_Grn2o",
    authDomain: "sdnewsletter-26ea1.firebaseapp.com",
    databaseURL: "https://sdnewsletter-26ea1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sdnewsletter-26ea1",
    storageBucket: "sdnewsletter-26ea1.appspot.com",
    messagingSenderId: "691749954693",
    appId: "1:691749954693:web:0bb58d4ee35d7cd10975ec"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);