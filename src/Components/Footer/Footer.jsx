import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './Footer.css';
import github1 from '../../../public/github1 (1).png'
import github2 from '../../../public/github2.png';
import warhammerwiki from '../../../public/WarhammerwikiLogo.png';

function Footer() {
  return (
    <>
      <main className='footerContent'>      
         <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home"><img src={github1}/></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1"></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2"><img src={github2}/></Nav.Link>
          </Nav.Item>
        </Nav>
        <p className="text-center mt-4 mb-4">Made by Diego Perez and Ignacio Sabia</p>
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home"><img src={warhammerwiki}/></Nav.Link>
          </Nav.Item>
        </Nav>

      </main>

        
    </>
  )
}

export default Footer