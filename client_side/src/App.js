import "./App.css";
import Main from "./components/Main";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProductRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Subscription from "./components/subscription"
import SellProperty from "./components/SellProperty";

function App() {  
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
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Addproperty" element={<SellProperty/>} />
        </Routes>
      </UserAuthContextProvider>
    </Router>
  );
}
export default App;
