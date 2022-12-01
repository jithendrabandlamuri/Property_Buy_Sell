import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import "react-phone-number-input/style.css";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [MobileNum, setMobileNum] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();



  //submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div class="container-fluid d-flex justify-content-center intro-section">
        <div class="row ">
          <div className="flex ">
            <div class="content">
              <div class="brand-wrapper">
                <h1>RentLo</h1>
              </div>
              <div class="intro-content-wrapper">
                <h1 class="intro-title">Welcome to website !</h1>
                <p class="intro-text">Choose your future Home here...!</p>
                {/* <a href="#!" class="btn btn-read-more">Read more</a> */}
              </div>

            </div>

            <div className="p-4 SLbox">
              <h2 className="mb-3">Signup</h2>
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
                <Form.Group className="mb-3" controlId="formBasicMobile">
                  <Form.Control
                    type="mobile"
                    placeholder="MobileNum"
                    onChange={(e) => setMobileNum(e.target.value)}
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" type="Submit">
                    Sign up
                  </Button>
                </div>
                <div id="recaptcha-container" ></div>
              </Form>
              <div className="p-4 box mt-3 text-center">
                Already have an account? <Link to="/">Log In</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
