import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "@firebase/firestore";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBp55M63LDOD4WUc5GD3phwQk8jj9NsfzY",
  authDomain: "login-32fea.firebaseapp.com",
  projectId: "login-32fea",
  storageBucket: "login-32fea.appspot.com",
  messagingSenderId: "846855944805",
  appId: "1:846855944805:web:a82886cd4786d00451648c",
  measurementId: "G-LTE818Q6N8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app);

export default app;
