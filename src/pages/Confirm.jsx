import React from 'react'
import { Link } from 'react-router-dom'

const Confirm = () => {
  return (
    <>
<div className="flex items-center bg-[#10141B] p-6">
  <svg width="45" height="42" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="0.5" width="45" height="41" rx="6" fill="#48FF2C" />
    <circle cx="22.5" cy="21" r="13.5" fill="black" />
    <path d="M28.9722 20.6593L27.0405 20.1075C25.264 19.5996 23.8998 18.236 23.3919 16.4588L22.8401 14.5272C22.753 14.2233 22.2458 14.2233 22.1587 14.5272L21.6069 16.4588C21.0991 18.236 19.7348 19.6003 17.9583 20.1075L16.0267 20.6593C15.8744 20.7025 15.7695 20.842 15.7695 21C15.7695 21.1579 15.8744 21.2968 16.0267 21.3407L17.9583 21.8925C19.7348 22.4004 21.0991 23.7639 21.6069 25.5411L22.1587 27.4727C22.2026 27.625 22.3415 27.7299 22.4994 27.7299C22.6574 27.7299 22.7962 27.625 22.8401 27.4727L23.3919 25.5411C23.8998 23.7639 25.264 22.3996 27.0405 21.8925L28.9722 21.3407C29.1245 21.2975 29.2293 21.1579 29.2293 21C29.2293 20.842 29.1245 20.7032 28.9722 20.6593Z" fill="white" />
  </svg>
  <p className="ml-4 text-2xl font-bold tracking-wide text-white">Staking</p>
</div>

<div className="flex min-h-screen items-center justify-center bg-[#10141B]">
  <div className="w-[400px] space-y-8">
    <div>
      <svg width="45" height="42" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.5" width="45" height="41" rx="6" fill="#48FF2C" />
        <circle cx="22.5" cy="21" r="13.5" fill="black" />
        <path d="M28.9722 20.6593L27.0405 20.1075C25.264 19.5996 23.8998 18.236 23.3919 16.4588L22.8401 14.5272C22.753 14.2233 22.2458 14.2233 22.1587 14.5272L21.6069 16.4588C21.0991 18.236 19.7348 19.6003 17.9583 20.1075L16.0267 20.6593C15.8744 20.7025 15.7695 20.842 15.7695 21C15.7695 21.1579 15.8744 21.2968 16.0267 21.3407L17.9583 21.8925C19.7348 22.4004 21.0991 23.7639 21.6069 25.5411L22.1587 27.4727C22.2026 27.625 22.3415 27.7299 22.4994 27.7299C22.6574 27.7299 22.7962 27.625 22.8401 27.4727L23.3919 25.5411C23.8998 23.7639 25.264 22.3996 27.0405 21.8925L28.9722 21.3407C29.1245 21.2975 29.2293 21.1579 29.2293 21C29.2293 20.842 29.1245 20.7032 28.9722 20.6593Z" fill="white" />
      </svg>
      <h1 className="mb-1 mt-[20px] text-[20px] font-semibold tracking-wider text-white">Enter Verification Code</h1>
      <p className="text-[16px] text-[#525866]">We've sent a code to<span className="text-white"> james@gmail.com </span></p>
    </div>


    <div className="flex justify-between space-x-2">
      <input type="text" maxlength="1" className="h-[64px] w-[80px] rounded-lg border border-[#3D4240] bg-[#0C0B0E] text-center text-2xl text-white focus:outline-none" />
      <input type="text" maxlength="1" className="h-[64px] w-[80px] rounded-lg border border-[#3D4240] bg-[#0C0B0E] text-center text-2xl text-white focus:outline-none" />
      <input type="text" maxlength="1" className="h-[64px] w-[80px] rounded-lg border border-[#3D4240] bg-[#0C0B0E] text-center text-2xl text-white focus:outline-none" />
      <input type="text" maxlength="1" className="h-[64px] w-[80px] rounded-lg border border-[#3D4240] bg-[#0C0B0E] text-center text-2xl text-white focus:outline-none" />
    </div>

    <button className="w-full  rounded-xl bg-[#48FF2C] py-2 font-semibold text-black hover:bg-green-500">Verify</button>
    <div className="mt-4">
<Link to="/">
    
    <button className="w-full rounded-xl border border-gray-700 py-2 text-white">Home Page</button>
</Link>
</div>
    <div className="text-center">
      <p className="text-[14px] text-gray-500">Experiencing issues receiving the code?</p>
      <a href="#" className="text-white underline">Resend code</a>
    </div>
  </div>
</div>

    </>
  )
}

export default Confirm