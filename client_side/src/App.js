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
import React, { useState } from 'react'
import PhoneSignUp from "./components/PhoneSignUp";
import Sidebar from './AdminComponent/Sidebar.js';
import AdminBuyerView from './AdminComponent/AdminBuyerView.js';
import AdminSellerView from './AdminComponent/AdminSellerView.js';
import Subscription from "./components/Subscription"
import PropertyDetails from "./components/PropertyDetails"
import SellerView from "./components/SellerView";
import BuyerView from "./components/BuyerView";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [location, setLocation] = useState("");
  const [flatType, setFlatType] = useState("");
  const [budget, setBudget] = useState("");
  const [navLocation, setNavLocation] = useState("");
  const [userid, setuserid] = useState("");
  const [propertyV, setPropertyV] = useState('Sell');
  const [subscriber, setSubscriber] = useState();

  console.log(propertyV);

  return (
    <Router>
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/userMain"
            element={
              <ProtectedRoute>
                <Main setIsAuth={setIsAuth} isAuth={isAuth} 
                location={location} setlocation={setLocation}
                flatType={flatType} setFlatType={setFlatType}
                budget={budget} setBudget={setBudget}
                navLocation={navLocation} setNavLocation={setNavLocation}
                propertyV={propertyV} setPropertyV={setPropertyV}
                userid={userid} setuserid={setuserid}/>
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
          <Route path="/signup" element={<Signup setNavLocation={setNavLocation}/>} />
          <Route path="/phonesignup" element={<PhoneSignUp/>}></Route>
          <Route path="/Addproperty" element={<SellProperty setIsAuth={setIsAuth} isAuth={isAuth}/>} />
          <Route path="/userproperties" element={<UserProperties  setIsAuth={setIsAuth} isAuth={isAuth}/>} />
          <Route path="/propertydetails" element={<PropertyDetails  userid={userid} setNavLocation={setNavLocation}  isAuth={isAuth} setIsAuth={setIsAuth}  subscriber={subscriber} setSubscriber={setSubscriber}/>} />
          <Route path="/sellerview" element={<SellerView  setIsAuth={setIsAuth} isAuth={isAuth}/>} />
          <Route path="/buyerview" element={<BuyerView  setIsAuth={setIsAuth} isAuth={isAuth}/>} />
          <Route path="/adminsellerview" element={<AdminSellerView />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/adminbuyerview" element={<AdminBuyerView />} />
        </Routes>
      </UserAuthContextProvider>
    </Router>

  );
}
export default App;
