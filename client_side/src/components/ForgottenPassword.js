import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { auth } from "firebase/app";
import firebase from "../firebase";


const ForgottenPassword = () => {

  var auth = firebase.auth();
  var email = email.val();

  if (email !== "") {

    auth.sendPasswordResetEmail(email).then(function () {
      window.alert("email has been sent to given mail id");

    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode);
      console.log(errorMessage);
    })
  } 
  else {
    window.alert("enter the email");
  }
  return (
    <>

      <div className="p-4 SLbox">
        <h2 className="mb-3">Enter the email for the verification</h2>
        <Form >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              OnSendTheLink
            </Button>
          </div>
        </Form>
        <hr />
      </div>
    </>
  );
}

export default ForgottenPassword