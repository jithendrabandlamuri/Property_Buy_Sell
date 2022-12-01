import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/auth";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAFzhzoKjWBu0xi_2Ru4viRd4IM50XTO5k",
  authDomain: "mockproject-80d36.firebaseapp.com",
  projectId: "mockproject-80d36",
  storageBucket: "mockproject-80d36.appspot.com",
  messagingSenderId: "297517157251",
  appId: "1:297517157251:web:8b0ad2082abf384ea584b6",
  measurementId: "G-VFTWNWSFNN"
});

const app = firebase;
export const storageRef = firebase.storage().ref();
export const db = firebase.firestore();
export const auth = firebase.auth();
export default app;
