import React,{useState} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const NavbarComponent = ({setNavLocation}) => {

  const location = [
    "a",
    "b"
  ];
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Form.Select defaultValue={'DEFAULT'} onChange={(e) => setNavLocation(e.target.value)}>
              <option value="DEFAULT" disabled >Location</option>
              {
                location.map(data => (
                  <option value={data} key={data}>{data}</option>
                ))
              }
            </Form.Select>
            <Link className='nav-link' to="/login">Login</Link>
            <Link className='nav-link' to="/subscription">Subscription</Link>
            <Link className='nav-link' to="/Addproperty">AddProperty</Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
