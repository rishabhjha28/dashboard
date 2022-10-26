import React from 'react'
import { MainContent } from './MainContent'
import { SideBar } from './SideBar'

export const DashPage = ({formData}) => {
  return (
    <div className='dashpage'>
        <SideBar/>
        <MainContent formData = {formData}/>
    </div>
  )
}
