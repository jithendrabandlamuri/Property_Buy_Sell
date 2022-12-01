import "./App.css";
import Main from "./components/Main";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProductRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SellProperty from "./components/SellProperty";
import UserProperties from "./components/UserProperties";
import Subscription from "./components/Subscription"
import React,{useState} from 'react'
import PhoneSignUp from "./components/PhoneSignUp";
import PropertyDetails from "./components/PropertyDetails"
import SellerView from "./components/SellerView";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [location, setLocation] = useState("");
  const [flatType, setFlatType] = useState("");
  const [budget, setBudget] = useState("");
  const [navLocation, setNavLocation] = useState("");
  const [userid, setuserid] = useState("");
  const [propertyV, setPropertyV] = useState('Sell');
  console.log(propertyV);

  return (
    <Router>
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/userMain"
            element={
              <ProtectedRoute>
                <Main setIsAuth={setIsAuth} isAuth={isAuth}/>
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Home 
          location={location} setlocation={setLocation}
          flatType={flatType} setFlatType={setFlatType}
          budget={budget} setBudget={setBudget}
          navLocation={navLocation} setNavLocation={setNavLocation}
          propertyV={propertyV} setPropertyV={setPropertyV}
          userid={userid} setuserid={setuserid}
          />} />
          <Route path="/subscription" element={<Subscription setIsAuth={setIsAuth} isAuth={isAuth}/>} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} setNavLocation={setNavLocation}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/phonesignup" element={<PhoneSignUp/>}></Route>
          <Route path="/Addproperty" element={<SellProperty setIsAuth={setIsAuth} isAuth={isAuth}/>} />
          <Route path="/userproperties" element={<UserProperties  setIsAuth={setIsAuth} isAuth={isAuth}/>} />
          <Route path="/propertydetails" element={<PropertyDetails  userid={userid} setNavLocation={setNavLocation}/>} />
          <Route path="/sellerview" element={<SellerView  setIsAuth={setIsAuth} isAuth={isAuth}/>} />
        </Routes>
      </UserAuthContextProvider>
    </Router>
  );
}
export default App;
