import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import NavbarComponent from "./NavbarComponent";

const Login = ({ setIsAuth,setNavLocation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();

  const navigate = useNavigate();

  const userCollection = collection(db, "users");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await addDoc(userCollection, {
        email: email,
        password: password
      });
      await logIn(email, password);
      localStorage.setItem("isAuth", true)
      setIsAuth(true)
      navigate("/userMain");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      localStorage.setItem("isAuth", true)
      setIsAuth(true)
      navigate("/userMain");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <NavbarComponent setNavLocation={setNavLocation} />
      <div class="container-fluid d-flex justify-content-center">
        <div class="row ">
          <div class=" intro-section">
            <div class="brand-wrapper">
              <h1>RentLo</h1>
            </div>
            <div class="intro-content-wrapper">
              <h1 class="intro-title">Welcome to website !</h1>
              <p class="intro-text">Choose your future Home here...!</p>
              <a href="#!" class="btn btn-read-more">Read more</a>
            </div>
          </div>
        </div>

        <div className="p-4 SLbox">
          <h2 className="mb-3">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="Submit">
                Log In
              </Button>
              <text>ForgotPassword? <Link to="/forgottenPassword">Reset it</Link></text>
            </div>
          </Form>
          <hr />
          <div>
            <GoogleButton
              className="g-btn"
              type="dark"
              onClick={handleGoogleSignIn}
            />
          </div>
          <div className="p-4 box mt-3 text-center">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;