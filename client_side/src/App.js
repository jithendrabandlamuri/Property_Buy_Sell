import "./App.css";
import Main from "./components/Main";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {db} from './firebase';
import { collection, doc } from "firebase/firestore";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProductRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import NavbarComponent from "./components/NavbarComponent";

import Subscription from "./components/subscription"
import { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
function App() {
  // const [users,setUsers] = useState([]);
  // const userCollectionRef = collection(db,"properties");

  // useEffect(()=>{
  //   const getUsers = async()=>{
  //     const data = await getDocs(userCollectionRef);
  //     setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
  //     console.log(users);
  //   };
  //   getUsers();
  // },[]);
  
  return (
    <Router>
      <NavbarComponent />
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Main />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route exact path='/about' element={< About />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserAuthContextProvider>
    </Router>
  );
}
export default App;
