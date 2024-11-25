import { initializeApp } from "firebase/app";
import  { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAQuTq3KMngpYQItXoy__htT5bIKJXmT9s",
  authDomain: "shopping-c2378.firebaseapp.com",
  projectId: "shopping-c2378",
  storageBucket: "shopping-c2378.firebasestorage.app",
  messagingSenderId: "768663128844",
  appId: "1:768663128844:web:faada31f8c9e004442d729"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

auth.languageCode = 'vi';