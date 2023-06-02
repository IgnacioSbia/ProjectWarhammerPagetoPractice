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
            <Nav.Link href="https://github.com/DiegoPerez1"target='blank'><img src={github1} alt=''/></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link ></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='https://github.com/IgnacioSbia' target='blank'><img src={github2} alt=''/></Nav.Link>
          </Nav.Item>
        </Nav>
        <p className="text-center mt-4 mb-4">Made by Diego Perez and Ignacio Sabia</p>
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="https://warhammer40k.fandom.com/es/wiki/Warhammer_40000_Wiki" target='blank'><img src={warhammerwiki}/></Nav.Link>
          </Nav.Item>
        </Nav>

      </main>

        
    </>
  )
}

export default Footer