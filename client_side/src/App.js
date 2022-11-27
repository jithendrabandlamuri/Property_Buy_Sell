import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NavbarComponent from "./components/NavbarComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <NavbarComponent/>
      <Routes>
        <Route path="/" element=<Home/> />
        <Route path="/about" element =<About/> />
        <Route exact path='/about' element={< About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
