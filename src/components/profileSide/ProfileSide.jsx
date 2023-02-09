import React from 'react'
import FollowerCard from '../FollowerCard/FollowerCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import './ProfileSide.css'

function ProfileSide() {
  return (
    <div className='profileSide'>
        <LogoSearch/>
        <ProfileCard/>
        <FollowerCard/>
    </div>
  )
}

export default ProfileSide