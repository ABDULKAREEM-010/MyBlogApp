import React from 'react'
import logo from '../assets/BlogLogo.png' 
function Logo({width= "100px"}) {
  return (
    <img className="rounded-full" src={logo} alt="App Logo" style={{ width }} />
  )
}

export default Logo