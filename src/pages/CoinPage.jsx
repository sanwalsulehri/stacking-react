import React from 'react'
import SideBar from '../components/SideBar'
import MainLayout from '../layout/MainLayout'
import Coin from '../components/Coins'

const CoinPage = () => {
  return (
    <div>
      <MainLayout>
        <Coin />
      </MainLayout>
    </div>
  )
}

export default CoinPage