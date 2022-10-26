import React from 'react'
import { useEffect } from 'react'
import { DashPage } from './DashPage'
import { NavBar } from './NavBar'

export const Dashboard = ({formData, setFormData}) => {
    // useEffect(()=>{
    //     const data = window.localStorage.getItem('InitialData');
    //     data !== null && setFormData(JSON.parse(data))
    // },[])
    // useEffect(()=>{
    //     window.localStorage.setItem('InitialData',JSON.stringify(formData))
    // },[formData])
  return (
    <div>
        <NavBar name = {formData.name}/>
        <DashPage formData= {formData}/>
    </div>
  )
}
