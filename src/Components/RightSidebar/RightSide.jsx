import React, { useState } from 'react';
import './RightSide.css'

const RightSide = () => {

    const [input ,setInput] = useState("");


  return (
    <div>
        <div className='right-side'>
            <div className='right-side-content'>
                 <input name='input' value={input} type='text' placeholder='Search Your Connections' onChange={(e)=> setInput(e.target.value)}></input>
                 <p>Your Connections</p>
            </div>
        


        </div>
    </div>
  )
}

export default RightSide;