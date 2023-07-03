import React, { useEffect, useState } from 'react'
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
import { Link, useNavigate } from "react-router-dom";



function NavBar(props) {
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  const [loged, setLoged] = useState(JSON.parse(localStorage.getItem('loged')) === true)
  const [userInfo, setUserInfo] = useState([])
  const [signEmail, setSignEmail] = useState("");
  const [signValidEmail, setSignValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //Functions
  const handleSubmit = async (event) => {

    //Register Fetch
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const user = {
      mail: signEmail,
      password: password
    };

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(user),
      redirect: 'follow'
    };

    await fetch("http://localhost:8000/api/register", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };
  const handleProfile = () => {
    navigate("/Profile")
  };
  const handleHome = () => {
    navigate("/")
  };
  const handleOrkz = () => {
    navigate("/waagh")
  };
  const handleNecrons = () => {
    navigate("/necrons")
  };
  const handleTyranids = () => {
    navigate("/tyranids")
  };
  const handleEldars = () => {
    navigate("/eldars")
  };
  const handleTau = () => {
    navigate("/tau")
  };

  const handleSubmitLogin = async () => {

    //Login Fetch
    const userlogin = { email: signEmail, password: password };
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(userlogin),
      redirect: "follow",
    };

    await fetch("http://localhost:8000/api/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.token) {
          localStorage.setItem("token", result.token),
            localStorage.setItem("iduser", result.id_user),
            setLoged(true)

        } else {
          alert('Contraseña o Nombre Incorrecto')
        }
      })

      .catch((error) => console.log("error", error));
  };
  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setSignEmail(emailValue);
    let isValid = emailRegex.test(emailValue);
    setSignValidEmail(isValid);
  };

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);

    let isValid = passwordValue.length >= 8;
    setValidPassword(isValid);
  }
  const onModalClose = () => {
    setSignEmail('')
    setPassword('')
  }
  const token = localStorage.getItem("token")

  useEffect(() => {
    const getUser = async () => {


      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch(`http://localhost:8000/api/userEmail?iduser=${localStorage.getItem("iduser")}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.rslt) {
            setUserInfo(result.rslt[0]).then(localStorage.setItem('mail', userInfo.email))
          }
        })
        .catch(error => console.log('error', error));
    };
    getUser();
  }, []);

  const handleLogOut = () => {
    localStorage.clear()
    setLoged(false)
    navigate("/");
  }
  console.log(userInfo)

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navBarBar'>
      <Container>
        <Navbar.Brand onClick={handleHome} className='h-50 w-50'><img src={warhammerLogo} className='h-50 w-50' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Xenos" id="collasible-nav-dropdown" className='XenosDropDown'>
              <NavDropdown.Item onClick={handleEldars} className='NavBarDropDownItem'>Eldars</NavDropdown.Item>
              <NavDropdown.Item onClick={handleTyranids} className='NavBarDropDownItem'>
                Tyranids
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleOrkz} className='NavBarDropDownItem'>Orks</NavDropdown.Item>
              <NavDropdown.Item onClick={handleNecrons} className='NavBarDropDownItem'>Necrons</NavDropdown.Item>
              <NavDropdown.Item onClick={handleTau} className='NavBarDropDownItem'>Tau's Empire</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='navBarItems'>World</Nav.Link>
            <Nav.Link className='navBarItems'><Link to={"/aboutus"} className='navBarAboutUs'>About Us</Link></Nav.Link>
          </Nav>
          {loged ?
            <NavDropdown title={userInfo.email} id="collasible-nav-dropdown" className='userDropDown'>
              <NavDropdown.Item onClick={handleProfile} className='NavBarDropDownItem'>Profile</NavDropdown.Item>
              <NavDropdown.Item className='NavBarDropDownItem' onClick={handleLogOut}>Log out</NavDropdown.Item>
            </NavDropdown>
            :
            <Nav>
              <Nav.Link className='navBarItems'><Button className='NavBarRegisterButton' variant="primary" onClick={handleShow}>
                Register
              </Button></Nav.Link>
              <Nav.Link className='navBarItems'><Button className='NavBarRegisterButton' variant="primary" onClick={handleShowLogin}>Log In</Button></Nav.Link>
            </Nav>
          }
        </Navbar.Collapse>
      </Container>

      <Modal show={show} onHide={handleClose} className='signUpModal'>
        <Modal.Header closeButton>
          <img src={servoskull2} className='servoSignUp' />
          <Modal.Title style={{ fontFamily: "UnifrakturMaguntia", color: "white", fontWeight: "bolder" }} className='signUpTitle'>Join the Emperor!</Modal.Title>
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
                type="password"
                placeholder="************"
                value={password}
                onChange={handlePasswordChange}
                className="signInNavBarEmail"
              />
            </Form.Group>
            <p className="SignInEmailMessage">You'll need to confirm this information later on.</p>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { handleClose(), onModalClose() }}>
            Close
          </Button>
          <Button className='signUpButton' variant="primary" onClick={() => { handleSubmit(), handleClose(), onModalClose() }} disabled={validPassword && signValidEmail ? false : true}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>

      {/*Here the Login Modal */}

      <Modal show={showLogin} onHide={handleCloseLogin} className='signUpModal'>
        <Modal.Header closeButton>
          <img src={servoskull2} className='servoSignUp' />
          <Modal.Title style={{ fontFamily: "UnifrakturMaguntia", color: "white", fontWeight: "bolder" }} className='signUpTitleLogin'>Login</Modal.Title>
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
                type="password"
                placeholder="************"
                value={password}
                onChange={handlePasswordChange}
                className="signInNavBarEmail"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { handleCloseLogin(), onModalClose() }}>
            Close
          </Button>
          <Button className='signUpButton' variant="primary" onClick={() => { handleSubmitLogin(), handleCloseLogin(), onModalClose() }} disabled={validPassword && signValidEmail ? false : true}>
            Log In
          </Button>
        </Modal.Footer>
      </Modal>

      {/*Here the Login Modal */}

      <Modal show={showLogin} onHide={handleCloseLogin} className='signUpModal'>
        <Modal.Header closeButton>
          <img src={servoskull2} className='servoSignUp' />
          <Modal.Title style={{ fontFamily: "UnifrakturMaguntia", color: "white", fontWeight: "bolder" }} className='signUpTitleLogin'>Login</Modal.Title>
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
                type="password"
                placeholder="************"
                value={password}
                onChange={handlePasswordChange}
                className="signInNavBarEmail"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { handleCloseLogin(), onModalClose() }}>
            Close
          </Button>
          <Button className='signUpButton' variant="primary" onClick={() => { handleSubmitLogin(), handleCloseLogin(), onModalClose() }} disabled={validPassword && signValidEmail ? false : true}>
            Log In
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>

  )
}

export default NavBar