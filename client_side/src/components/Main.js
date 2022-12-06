import React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import M2 from "./M2";
import Navbaruser from "./Narbaruser"
import SearchBar from "./SearchBar";
const Main = ({ setIsAuth, isAuth,location, setlocation, flatType, setFlatType, budget, setBudget, navLocation, setNavLocation, propertyV, setPropertyV, userid, setuserid }) => {
  const { user } = useUserAuth();
  return (
    <>
      <Navbaruser setIsAuth={setIsAuth} isAuth={isAuth}/><br/>
      <div className="text-center">
        Hello Welcome <br />
        {user.email}
      </div>
      <SearchBar
          setlocation={setlocation}
          setFlatType={setFlatType}
          setBudget={setBudget} />
      <M2 location={location} flatType={flatType} budget={budget} navLocation={navLocation} propertyV={propertyV} setuserid={setuserid} />
    </>
  );
};

export default Main;