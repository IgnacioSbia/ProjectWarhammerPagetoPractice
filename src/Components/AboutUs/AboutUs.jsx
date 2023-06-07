import React from 'react';
import NavBar from '../NavBar/NavBar';
import './AboutUs.css';
import linkedin from '../../../public/linkedin.svg';
import github from '../../../public/github-icon-white-6.jpg';
import personalPage from '../../../public/personalPage.svg';
import Footer from '../Footer/Footer';

function AboutUs() {
  return (
    <>    
    <header>
        <NavBar/>
    </header>
    <main className='aboutUsMain'>
        <section className='container-sm aboutUsContent'>
            <h1 className='aboutUsTitle'>About Us</h1>
            <aside className='aboutUsParagraphs'>
                <p>We're two friends that love programming and wanted to get more practice while just happen that we're both fans of the warhammer 40.000 franchise,
                    so one day we thought: "What if we practice while making a warhammer 40k wiki page?" and that's pretty much it.
                </p>
                <hr/>
                <p>
                    If you want to contact with us you can reach out through our different websites such as:
                </p>
                <div>
                    <h4>Ignacio</h4>
                    <aside className='aboutUsSocialIcons'>
                        <a href='https://www.linkedin.com/in/ignacio-sabia-dev/' target='blank'><img src={linkedin} className='aboutUsLinkedinIcon'/></a>
                        <a href='https://github.com/IgnacioSbia' target='blank' className='aboutUsgithub'><img src={github} className='aboutUsgithubIcon'/></a>
                        <a href='https://ignaciosbiaportfolio34578.netlify.app/' target='blank'><img src={personalPage} className='aboutUsPersonalPageIcon'/></a>
                    </aside>
                    <br/>
                    <h4>Diego</h4>
                    <aside className='aboutUsSocialIcons'>
                        <a href='https://www.linkedin.com/in/diego-perez-boschnakoff/' target='blank'><img src={linkedin} className='aboutUsLinkedinIcon'/></a>
                        <a href='https://github.com/DiegoPerez1' target='blank' className='aboutUsgithub'><img src={github} className='aboutUsgithubIcon'/></a>
                        <a href='https://main--diegoperez.netlify.app/' target='blank'><img src={personalPage} className='aboutUsPersonalPageIcon'/></a>
                    </aside>
                </div>
            </aside>
        </section>
    </main>
    <footer>
        <Footer/>
    </footer>
    </>

  )
}

export default AboutUs