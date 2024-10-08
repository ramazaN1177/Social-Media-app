import React from 'react';
import Navbar from '../Navbar/Navbar';
import LeftSide from '../LeftSidebar/LeftSide';
import RightSide from '../RightSidebar/RightSide';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className='left-side-main'>
        <LeftSide></LeftSide>
      </div>
      <div className='right-side-main'>
        <RightSide></RightSide>
      </div>
    </div>

  )
}

export default Home