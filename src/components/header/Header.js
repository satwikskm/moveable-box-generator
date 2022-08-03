import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div>
        <h1 className='header'>📦 Box Mobility</h1>
        <span className="header-subtext"
        style={
            {color:`#${Math.floor(Math.random()*16777215).toString(16)}`
            } 
        }   
        >Have fun with moveable stacking box</span>
        
        </div>
  )
}

export default Header