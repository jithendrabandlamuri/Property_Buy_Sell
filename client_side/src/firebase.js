import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/auth";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBp55M63LDOD4WUc5GD3phwQk8jj9NsfzY",
  authDomain: "login-32fea.firebaseapp.com",
  projectId: "login-32fea",
  storageBucket: "login-32fea.appspot.com",
  messagingSenderId: "846855944805",
  appId: "1:846855944805:web:a82886cd4786d00451648c",
  measurementId: "G-LTE818Q6N8"
});

const app = firebase;
export const storageRef = firebase.storage().ref();
export const db = firebase.firestore();
export const auth = firebase.auth();
export default app;
