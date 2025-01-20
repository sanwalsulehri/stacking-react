import React from 'react'
import SideBar from '../components/SideBar'
import MainLayout from '../layout/MainLayout'
import Users from '../components/User'
import UserDetail from '../components/UserDetail'

const UserDetails = () => {
  return (
    <div>
      <MainLayout>
        <UserDetail />
      </MainLayout>
    </div>
  )
}

export default UserDetails