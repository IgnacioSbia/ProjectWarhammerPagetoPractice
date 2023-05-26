import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import warhammerLogo from '../../../public/Warhammer-logoFinalFinalNavBar.png';
import './NavBar.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import servoskull2 from '../../../public/ServoSkull2.png';



function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [signEmail, setSignEmail] = useState("");
  const [signValidEmail, setSignValidEmail] = useState(false);


  //Functions
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('email',email)
  };
  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setSignEmail(emailValue);
    let isValid = emailRegex.test(emailValue);
    setSignValidEmail(isValid);
  };



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
            <Nav.Link href="#deets" className='navBarItems'><Button className='NavBarRegisterButton' variant="primary" onClick={handleShow}>
        Register
      </Button></Nav.Link>
            <Nav.Link href="#deets" className='navBarItems'>Log In</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        
        <Modal show={show} onHide={handleClose} className='signUpModal'>
          <Modal.Header closeButton>
            <img src={servoskull2} className='servoSignUp'/>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={signEmail}
                  onChange={handleEmailChange}
                  className="signInNavBarEmail"
                  
                />
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="************"
                  value={signEmail}
                  onChange={handleEmailChange}
                  className="signInNavBarEmail"
                  
                />
              </Form.Group>
              <p className="SignInEmailMessage">You'll need to confirm this information later on.</p>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
      </Modal>
  </Navbar>
  
  )
}

export default NavBar