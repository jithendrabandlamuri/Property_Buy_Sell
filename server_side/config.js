const firebase=require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyCBN7nA448-dwOYbLqs9E-sLp0Y0LHNTrs",
    authDomain: "mock-project-f70b1.firebaseapp.com",
    projectId: "mock-project-f70b1",
    storageBucket: "mock-project-f70b1.appspot.com",
    messagingSenderId: "879827012697",
    appId: "1:879827012697:web:2dcb70f99a33ec6164f548",
    measurementId: "G-3N2G9Y41EM"
  };
  firebase.initializeApp(firebaseConfig)
  const db=firebase.firestore()
  const user=db.collections("users")
  module.exports=user;