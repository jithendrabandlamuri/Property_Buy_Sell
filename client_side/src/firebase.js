import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/auth";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBDOHbxD-98ekWy7noDrsptiL1J7kqebwY",

  authDomain: "property-buy-sell-c4f9c.firebaseapp.com",

  projectId: "property-buy-sell-c4f9c",

  storageBucket: "property-buy-sell-c4f9c.appspot.com",

  messagingSenderId: "211727460085",

  appId: "1:211727460085:web:dd9613b8b7839b7c7ac7bc",

  measurementId: "G-TD6XM83DSK"
});

const app = firebase;
export const storageRef = firebase.storage().ref();
export const db = firebase.firestore();
export const auth = firebase.auth();
export default app;
