import React from 'react'
import SideBar from '../components/SideBar'
import Usdt from '../components/Usdt'
import MainLayout from '../layout/MainLayout'
import StakingAssets from '../components/StakingAssets'

const Dashboard = () => {
  return (
    <div>
      <MainLayout>
        <Usdt />
        <StakingAssets />
      </MainLayout>
    </div>
  )
}

export default Dashboard