import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import userDefaultImg from '../../../public/UserProfileDefault.jpg';
import Image from 'react-bootstrap/Image';
import './Profile.css';


function Profile() {
    const token = localStorage.getItem('token')
    const usermail = localStorage.getItem('mail')
    const [userName, setUserName] = useState('')
    localStorage.setItem('loged', true);

    useEffect(() => {
        const getUser = async ()=>{
          var myHeaders = new Headers();
          myHeaders.append("Authorization",token);
        
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
  
       fetch(`http://localhost:8000/api/userEmail?iduser=${localStorage.getItem("iduser")}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if(result.rslt){
            setUserName(result.rslt[0]).then(localStorage.setItem('mail',userInfo.email))
          }
          })
        .catch(error => console.log('error', error));
      };
      getUser();
    }, []);

  return (
    <>
        <header>
            <NavBar loged={localStorage.getItem('loged')}/>
        </header>
        <main className='ProfileContent '>
            <section className='container-sm p-3 ProfileuserInformation'>
                <div className='ProfileUserInfoInformation'>
                    <Image src={userDefaultImg} roundedCircle  className='ProfileUserImage'/>
                    <h2 className='ProfileUserName p-3'>{userName.email}</h2>
                </div>
                <div>
                    <h1 className='ProfileUserFavouriteRace'>Favourite Race</h1>
                    <div className='ProfileFavouriteRace'>
                        aaaa
                    </div>
                </div>
            </section>
            
        </main>

    </>
  )
}

export default Profile