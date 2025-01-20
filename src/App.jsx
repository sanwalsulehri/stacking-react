import { useState } from 'react';
import Topup from './components/Topup';
import QRModal from './components/QRModal';
import Stake from './components/Stake';
import Confirm from './components/Confirm';  
import Withdraw from './components/withdraw'
import Conwithdraw from './components/Conwithdraw'
import StakingAssets from './components/StakingAssets';
import Coin from './components/Coins';
import User from './components/User'
import NewCoin from './components/NewCoin'


const App = () => {



  return (
    <div className="bg-[#10141B] text-white min-h-screen w-full">
        <NewCoin />

    </div>
  );
};

export default App;