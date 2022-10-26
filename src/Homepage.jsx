import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Homepage = ({formData,setFormData}) => {
    const navigate = useNavigate()
    const goToDashboard =(e)=>{
        e.preventDefault()
        navigate('/dashboard')
    }
    const handleChange = (e)=>{
        const {name,value} = e.target
        setFormData((prev)=>{
            return({
                ...prev,
                [name]:value
            })
        })
    }
    return (
    <div className='homepage'>
        Please Fill these details
        <form onSubmit={goToDashboard}>
            <input onChange={handleChange} value = {formData.name} type="text" name="name" placeholder='Enter Your Name'/>
            <input onChange={handleChange} value = {formData.noOfUser} type="number" name="noOfUser" placeholder='Enter Number Of Users' />
            <input onChange={handleChange} value = {formData.noOfFailedLogin} type="number" name="noOfFailedLogin" placeholder='Enter Number Of Failed Login' />
            <input onChange={handleChange} value = {formData.noOfGroups} type="number" name="noOfGroups" placeholder='Enter Number Of Groups'/>
            <input onChange={handleChange} value = {formData.noOfActiveUser} type="number" name="noOfActiveUser" placeholder='Enter Number Of Active Users' />
            <input onChange={handleChange} value = {formData.place1} type="text" name="place1" placeholder='Enter Name/Co-ordinate of First Place' />
            <input onChange={handleChange} value = {formData.place2} type="text" name="place2" placeholder='Enter Name/Co-ordinate of Second Place' />
            <button type="submit"> Go To Dashboard</button>
        </form>
    </div>
  )
}
