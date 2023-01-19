 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";
 import { getAuth } from "firebase/auth";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY_FIRESTORE,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN_FIRESTORE,
    databaseURL: process.env.REACT_APP_DATABASE_URL_FIRESTORE,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: "887807068877",
    appId: "1:887807068877:web:c424cae35d25c2a7147784",
    measurementId: "G-HDPVF3SW4N"  
 };

 // Initialize Firebase
 
 const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
 export const auth = getAuth(app);
  
 // Export firestore database
 // It will be imported into your react app whenever it is needed
