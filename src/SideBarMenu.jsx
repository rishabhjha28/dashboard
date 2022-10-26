import React from 'react'

export const SideBarMenu = (props) => {
  return (
    <div className={props.isActive?'menu-active':'menu'}>{props.menu}<img src={props.isActive?"ic_right_chevron_black.svg":"ic_right_chevron_light.svg"} alt="arrow" /></div>
  )
}
