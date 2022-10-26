import React from 'react'
import { SideBarMenu } from './SideBarMenu'

export const SideBar = () => {
  return (
    <div className='sidebar'>
        <SideBarMenu menu ="Dashboard" isActive = {true}/>
        <div className='submenu'>CONFIGURE</div>
        <SideBarMenu menu ="Identity Providers" isActive = {false}/>
        <SideBarMenu menu ="User Stores" isActive = {false}/>
        <SideBarMenu menu ="Applications" isActive = {false}/>
        <SideBarMenu menu ="Policies" isActive = {false}/>
        <SideBarMenu menu ="Multi-Factor Authentication" isActive = {false}/>
        <div className="submenu">MANAGE</div>
        <SideBarMenu menu ="Users" isActive = {false}/>
        <SideBarMenu menu ="Groups" isActive = {false}/>
        <SideBarMenu menu ="Audit" isActive = {false}/>
        <SideBarMenu menu ="Licensing" isActive = {false}/>
    </div>
  )
}
