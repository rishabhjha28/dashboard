import React from 'react'
import { Card } from './Card'
import { LastLineText } from './LastLineText'
import Map from './Map'

export const MainContent = ({formData}) => {
  return (
    <div className = 'maincontent'>
        <div className="top">
            <div>
                <Card comment = "Live Users" color = "#62D87A" img = "ic_user.svg" content = 'Total Users' value = {formData.noOfUser}/>
                <Card comment = "From July, 2022 to Aug, 2022" color = "#FF4343" img = "ic_login_failed_user.svg" content = 'Login Failed'value = {formData.noOfFailedLogin}/>
            </div>
            <div className='map'>
                <Map place1 = {formData.place1} place2 = {formData.place2} />
            </div>
            <div>
                <Card comment = "Live Groups" color = "#50A1BE" img = "ic_groups.svg" content = 'Total Groups' value = {formData.noOfGroups}/>
                <Card comment = "User allowed under your subscription" color = "#50A1BE" img = "ic_user.svg" content = 'Active Users' value = {formData.noOfActiveUser}/>
            </div>
        </div>
        <div className="bottom">
            <div className="text-heading">Quick Setup</div>
            <div className="last-line">
                <LastLineText text = "Create Users"/>
                <LastLineText text = "Create Application"/>
                <LastLineText text = "Create Policy"/>
                <LastLineText text = "Create Gateway"/>
                <LastLineText text = "Add Apps to Gateway"/>
            </div>
        </div>
    </div>
  )
}
