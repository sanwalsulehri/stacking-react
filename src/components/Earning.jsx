import React from 'react'

const Earning = () => {
  return (
    <>
    
<div class="bg-[#10141b] px-4 pt-40 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-[1186px]">
    <div class="grid gap-12 lg:grid-cols-2">
     
      <div>
        <h2 class="text-[42px]  li font-bold text-white sm:text-5xl">
           Calculate<br/>
         your earnings 
        </h2>
        <p class="mt-10 lg:max-w-[378px] text-[18px] text-[#71798A]">
          Staking involves
          {" "}<span class="text-[#48FF2C]">holding</span>{" "}
          and 
          {" "}<span class="text-[#48FF2C]">locking</span>{" "}
          up your cryptocurrencies to support blockchain network, earning rewards for contributing to its security and consensus mechanism.
        </p>
      </div>

      
      <div class="rounded-2xl bg-[#191E25] px-4 py-10 sm:px-6">
       
        <div class="relative mb-5">
          <button class="flex w-full items-center justify-between rounded-xl bg-gray-700/50 px-4 py-2.5 text-white">
            <div class="flex items-center gap-3">
              <div class="rounded-full bg-white p-2">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4974 1.3125L10.2966 1.73124V13.8811L10.4974 14.0041L19.682 10.6704L10.4974 1.3125Z" fill="#343434"/>
<path d="M10.4973 1.3125L1.3125 10.6704L10.4973 14.0041V8.10687V1.3125Z" fill="#8C8C8C"/>
<path d="M10.4974 15.0718L10.3843 15.1565V19.4845L10.4974 19.6873L19.6876 11.7399L10.4974 15.0718Z" fill="#3C3C3B"/>
<path d="M10.4973 19.6873V15.0718L1.3125 11.7399L10.4973 19.6873Z" fill="#8C8C8C"/>
<path d="M10.4973 14.0041L19.6819 10.6704L10.4973 8.10687V14.0041Z" fill="#141414"/>
<path d="M1.3125 10.6704L10.4973 14.0041V8.10687L1.3125 10.6704Z" fill="#393939"/>
</svg>

              </div>
              <span class="text-lg">Ethereum (ETH)</span>
            </div>
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        
        <div class="mb-6 grid gap-4 sm:grid-cols-2">
         
          <div class="relative ">
            <button class="flex w-full items-center justify-between rounded-xl bg-gray-700/50 py-3.5 px-4 text-white">
              <span>1 Month</span>
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          
          <div class="">
            <input 
              type="text" 
              placeholder="Enter staking amount" 
              class="w-full rounded-xl max-w-[328px]  py-3.5 px-4 bg-gray-700/50 p-4 text-white placeholder-gray-400 outline-none ring-2 ring-transparent focus:ring-green-500"
            />
          </div>
        </div>

        
        <div>
          <p class="mb-2 text-[18px] text-white font-[500]">Earning</p>
          <div class="flex items-baseline gap-4">
            <div class="flex items-center gap-1">
              <span class="text-[34px] font-bold text-white">+1.31</span>
              <span class="text-gray-400 font-medium text-[34px]">ETH</span>
            </div>
            <div class="text-[34px] font-bold text-[#48FF2C]">
              +$3254.00
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



    </>
  )
}

export default Earning