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
            <NavDropdown title="Xenos" id="collasible-nav-dropdown" className='XenosDropDown'>
              <NavDropdown.Item href="#action/3.1" className='NavBarDropDownItem'>Eldars</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='NavBarDropDownItem'>
                Tyranids
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='NavBarDropDownItem'>Orks</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing" className='navBarItems'>World</Nav.Link>
            <Nav.Link href="#pricing" className='navBarItems'>About Us</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="#deets" className='navBarItems'>Sign Up</Nav.Link>
            <Nav.Link href="#deets" className='navBarItems'>Log In</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
  </Navbar>
  )
}

export default NavBar