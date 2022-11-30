import React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import Navbaruser from "./Narbaruser"
const Main = ({ setIsAuth, isAuth }) => {
  const { user } = useUserAuth();
  return (
    <>
      <Navbaruser setIsAuth={setIsAuth} isAuth={isAuth}/>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
    </>
  );
};

export default Main;