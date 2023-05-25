import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import warhammerLogo from '../../../public/Warhammer-logoFinalFinalNavBar.png';
import './NavBar.css';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navBarBar'>
        <Container>
        <Navbar.Brand href="#home" className='h-50 w-50'><img src={warhammerLogo}  className='h-50 w-50'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#features" style={{fontFamily:"UnifrakturMaguntia", color:"gray", fontWeight:"bolder"}}>Races</Nav.Link>
            <Nav.Link href="#pricing" style={{fontFamily:"UnifrakturMaguntia", color:"gray", fontWeight:"bolder"}}>World</Nav.Link>
            <Nav.Link href="#pricing" style={{fontFamily:"UnifrakturMaguntia", color:"gray", fontWeight:"bolder"}}>About Us</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="#deets" style={{fontFamily:"UnifrakturMaguntia", color:"gray"}}>Sign Up</Nav.Link>
            <Nav.Link href="#deets" style={{fontFamily:"UnifrakturMaguntia", color:"gray"}}>Log In</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
  </Navbar>
  )
}

export default NavBar