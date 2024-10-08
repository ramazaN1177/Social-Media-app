import React from 'react';
import './LeftSide.css';
import profilePhoto from '../Assets/profilephoto.png';

const LeftSide = () => {
  return (
    <div>
        <div className='left-side'>
             <div className='left-side-content'>
                <img className='image' src={profilePhoto} alt="User's profile"></img>
                <p>Name</p>
                <p>Surname</p>
                <p>Job</p>
                <p>Address</p>
             </div>
        </div>
    </div>
  )
}

export default LeftSide