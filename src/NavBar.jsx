import React from 'react'

export const NavBar = ({name}) => {
  return (
    <div className='navbar'>
        <div className="logo">LOGO</div>
        <div className="right">
            <div className="thememode"> <img src="ic_dark_mode.svg" alt="darkmode" /></div>
            <div className="name">Hi, {name}</div>
            <div className="profile" ><img src="user.png" alt={name} /></div>
        </div>
    </div>
  )
}
