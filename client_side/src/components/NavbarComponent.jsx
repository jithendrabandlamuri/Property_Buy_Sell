import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import logo from "../download.jpeg"

const NavbarComponent = () => {

    const location = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "  Assam",
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
                <img src={logo} height="42px" width="41px"></img>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                        <Link className="nav-link" to="/about">
                            About
                        </Link>

                        <Form.Select>
                        <option>Location</option>
                          {
                            location.map(data=>(
                              <option value={data}>{data}</option>
                            ))
                          }
                        </Form.Select>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
