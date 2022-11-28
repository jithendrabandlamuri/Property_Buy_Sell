import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

const NavbarComponent = () => {
  const location = ["Andhra Pradesh","Arunachal Pradesh","  Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana","Himachal Pradesh" , "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh","Maharashtra" ,"Manipur" , "Meghalaya", "Mizoram", "Nagaland", "Odisha (Orissa)","Punjab" ,"Rajasthan" , "Sikkim", "Tamil Nadu"];
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to="/about">About</Link>
            
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              {location.map(value=>(
                  <NavDropdown.Item href={value}>
                  {value}
                </NavDropdown.Item>
              ))}
              
            </NavDropdown>

            <Link className='nav-link' to="/login">Login</Link>
            <Link className='nav-link' to="/subscription">subscription</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent