import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import './HomePage.css';
import warhammer from '../../../public/warhammer40k.gif';
import warhammerImperium from '../../../public/Warhammer40kImperium2.gif';
import warhammerOrks from '../../../public/warhammer40korks.gif';
import warhammerEldars from '../../../public/warhammer40keldars.gif';
import warhammerTyranids from '../../../public/warhammer40ktyranids.gif';
import warhammerNecrons from '../../../public/warhammer40knecrons.gif';
import NavBar from '../NavBar/NavBar';
import newsWarhammer from '../../../public/WarhammerNews.png';
import Footer from '../Footer/Footer';


function HomePage() {
  return (
    <>
    <header>
        <NavBar/>
    </header>
    <main className='homePageMain'>
        {/* Presentation*/}
        <div className='container-sm homePageMain'>
                <div>
                    <Carousel>
                        <Carousel.Item interval={3000} className='itemcarousel' >
                        <img
                            className="d-block w-100"
                            src={warhammerImperium}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3 style={{fontFamily:"UnifrakturMaguntia", color:"white", fontWeight:"bolder"}}>The imperium</h3>
                            <p style={{fontFamily:"UnifrakturMaguntia", color:"white"}}>Corrupt as ever, the imperium stands against all kinds of foes.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000} className='itemcarousel'>
                        <img
                        className="d-block w-100"
                        src={warhammerOrks}
                        alt="First slide"
                        />
                            <Carousel.Caption>
                            <h3 style={{fontFamily:"UnifrakturMaguntia", color:"white", fontWeight:"bolder"}}>The orks</h3>
                            <p style={{fontFamily:"UnifrakturMaguntia", color:"white"}}>Brutally, the orks will always want for a good fight.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000} className='itemcarousel'>
                            <img
                            className="d-block w-100"
                            src={warhammerEldars}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3 style={{fontFamily:"UnifrakturMaguntia", color:"white", fontWeight:"bolder"}}>Eldars</h3>
                            <p style={{fontFamily:"UnifrakturMaguntia", color:"white"}}>
                                Chasing a long lost past.
                            </p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000} className='itemcarousel' >
                        <img
                            className="d-block w-100"
                            src={warhammerNecrons}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3 style={{fontFamily:"UnifrakturMaguntia", color:"white", fontWeight:"bolder"}}>The Necrons</h3>
                            <p style={{fontFamily:"UnifrakturMaguntia", color:"white"}}>Without flesh, they seek the complete domination.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000} className='itemcarousel' >
                        <img
                            className="d-block w-100"
                            src={warhammerTyranids}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3 style={{fontFamily:"UnifrakturMaguntia", color:"white", fontWeight:"bolder"}}>The tyranids</h3>
                            <p style={{fontFamily:"UnifrakturMaguntia", color:"white"}}>They only seek to devour everything that is alive.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
             {/* News and General Info */}
                <aside className='container-sm HomeMainPageNewsContainer'>
                    <img src={newsWarhammer}/>
                    <ul className='homeMainPageNewsLists'>
                        
                        <li>
                            <div className='homeMainPageNews'>
                                <h3 >The lion Returns !</h3>
                                <p >After thousands of years, the Primarch makes his return.</p>
                            </div>
                        </li>
                         
                        <li>
                            <div className='homeMainPageNews'>
                                <h3>Primaris versus the Inquisition ?</h3>
                                <p>Conflicts starts to show in the imperium.</p>
                            </div>
                        </li>
                         
                        <li>
                            <div className='homeMainPageNews'>
                                <h3>The new Necron Lord</h3>
                                <p>A new ork tribe has been formed.</p>
                            </div>
                        </li>
                        <li>
                            <div className='homeMainPageNews'>
                                <h3>The new Ork tribe</h3>
                                <p>A new ork tribe has been formed.</p>
                            </div>
                        </li>
                        <li>
                            <div className='homeMainPageNews'>
                                <h3 >The new Ork tribe</h3>
                                <p >A new ork tribe has been formed.</p>
                            </div>
                        </li>
                    </ul>
                </aside>
        
        
        </div>
    </main>
    <footer>
        <Footer/>
    </footer>
    </>
  
  )
}

export default HomePage