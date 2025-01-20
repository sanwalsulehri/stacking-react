import React from 'react'
import SideBar from '../components/SideBar'
import DashNavBar from '../components/DashNavBar'

const MainLayout = ({children}) => {
  return (
    <>
      <SideBar />
      <div className="pl-[280px] ">
        <DashNavBar />
        {children}
      </div>
    </>
  )
}

export default MainLayout