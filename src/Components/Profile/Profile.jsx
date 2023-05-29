import React from 'react'
import NavBar from '../NavBar/NavBar'
import userDefaultImg from '../../../public/UserProfileDefault.jpg';
import Image from 'react-bootstrap/Image';
import './Profile.css';


function Profile() {

    const usermail = localStorage.getItem('mail')


  return (
    <>
        <header>
            <NavBar/>
        </header>
        <main className='ProfileContent '>
            <section className='container-sm p-3 ProfileuserInformation'>
                <Image src={userDefaultImg} roundedCircle  className='ProfileUserImage'/>
                <h2 className='ProfileUserName p-3'>{usermail}</h2>
            </section>
        </main>

    </>
  )
}

export default Profile