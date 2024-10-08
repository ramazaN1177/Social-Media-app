import React from 'react';
import './Navbar.css';
import { IoMdHome } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import profilePhoto from '../Assets/profilephoto.png';




const Navbar = () => {

const navigate = useNavigate();
  return (


    <div className='navbar'>
    
          <div className='nav-left'>
            <h1 className='nav-name' onClick={()=>navigate('/')}>
              Entity 
            </h1>
          </div>
          <div className='nav-right'>
            <img className='navbar-image' src={profilePhoto} alt="User's profile"></img>
            <p>User</p>
            <p><FaEnvelope /></p>
            <p><IoMdHome /></p>
           

          </div>
     
    </div>

  )
}

export default Navbar;