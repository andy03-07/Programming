import React from 'react'
import { useNavigate } from 'react-router-dom';

const home = () => {
    const Navigate=useNavigate();
    function handleclick(){
        Navigate('./about')

    }
  return (
    <div>
        <h1>hii</h1>
        <button onClick={handleclick}>move  to about page</button>
    </div>
    
  )
}

export default home;