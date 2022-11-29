import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const NavbarComponent = () => {

  const location = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha (Orissa)",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
  ];
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Form.Select>
              <option>Location</option>
              {
                location.map(data => (
                  <option value={data}>{data}</option>
                ))
              }
            </Form.Select>
            <Link className='nav-link' to="/login">Login</Link>
            <Link className='nav-link' to="/subscription">subscription</Link>
            <Link className='nav-link' to="/Addproperty">AddProperty</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
