import React from 'react'
import SideBar from '../components/SideBar'
import MainLayout from '../layout/MainLayout'
import Users from '../components/User'

const UsersPage = () => {
  return (
    <div>
      <MainLayout>
        <Users />
      </MainLayout>
    </div>
  )
}

export default UsersPage