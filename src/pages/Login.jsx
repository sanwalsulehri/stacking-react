import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className="flex bg-[#10141B] p-6">
  <svg width="45" height="42" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="0.5" width="45" height="41" rx="6" fill="#48FF2C" />
    <circle cx="22.5" cy="21" r="13.5" fill="black" />
    <path d="M28.9722 20.6593L27.0405 20.1075C25.264 19.5996 23.8998 18.236 23.3919 16.4588L22.8401 14.5272C22.753 14.2233 22.2458 14.2233 22.1587 14.5272L21.6069 16.4588C21.0991 18.236 19.7348 19.6003 17.9583 20.1075L16.0267 20.6593C15.8744 20.7025 15.7695 20.842 15.7695 21C15.7695 21.1579 15.8744 21.2968 16.0267 21.3407L17.9583 21.8925C19.7348 22.4004 21.0991 23.7639 21.6069 25.5411L22.1587 27.4727C22.2026 27.625 22.3415 27.7299 22.4994 27.7299C22.6574 27.7299 22.7962 27.625 22.8401 27.4727L23.3919 25.5411C23.8998 23.7639 25.264 22.3996 27.0405 21.8925L28.9722 21.3407C29.1245 21.2975 29.2293 21.1579 29.2293 21C29.2293 20.842 29.1245 20.7032 28.9722 20.6593Z" fill="white" />
  </svg>
  <p className="ml-[16px] text-[24px] font-bold tracking-wider text-[white]">Staking</p>
</div>
<div className="flex min-h-screen items-center justify-center bg-[#10141B]">
  <div className="w-[400px] space-y-6 text-center">
    <div className="">
      <svg width="45" height="42" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.5" width="45" height="41" rx="6" fill="#48FF2C" />
        <circle cx="22.5" cy="21" r="13.5" fill="black" />
        <path d="M28.9722 20.6593L27.0405 20.1075C25.264 19.5996 23.8998 18.236 23.3919 16.4588L22.8401 14.5272C22.753 14.2233 22.2458 14.2233 22.1587 14.5272L21.6069 16.4588C21.0991 18.236 19.7348 19.6003 17.9583 20.1075L16.0267 20.6593C15.8744 20.7025 15.7695 20.842 15.7695 21C15.7695 21.1579 15.8744 21.2968 16.0267 21.3407L17.9583 21.8925C19.7348 22.4004 21.0991 23.7639 21.6069 25.5411L22.1587 27.4727C22.2026 27.625 22.3415 27.7299 22.4994 27.7299C22.6574 27.7299 22.7962 27.625 22.8401 27.4727L23.3919 25.5411C23.8998 23.7639 25.264 22.3996 27.0405 21.8925L28.9722 21.3407C29.1245 21.2975 29.2293 21.1579 29.2293 21C29.2293 20.842 29.1245 20.7032 28.9722 20.6593Z" fill="white" />
      </svg>
    </div>

    <h1 className="text-left text-[20px] font-semibold text-gray-200">Login - Sign up to your account</h1>

    <form className="space-y-8">
      <div className="text-left">
        <p className="mb-1 text-[14px] text-white">Name Surname</p>
        <label for="name" className="sr-only">Name Surname</label>
        <div className="flex items-center rounded-lg bg-[#0C0B0E] px-3 py-1">
          <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.3251 8.89186V12.9H6.6751V8.89186C9.33865 9.22396 11.4001 11.496 11.4001 14.25H0.600098C0.60012 12.9347 1.08015 11.6646 1.9501 10.6781C2.82005 9.69156 4.02012 9.05642 5.3251 8.89186ZM6.0001 8.17501C3.76247 8.17501 1.9501 6.36264 1.9501 4.12501C1.9501 1.88739 3.76247 0.0750122 6.0001 0.0750122C8.23772 0.0750122 10.0501 1.88739 10.0501 4.12501C10.0501 6.36264 8.23772 8.17501 6.0001 8.17501Z" fill="#868C98" />
          </svg>

          <input id="name" type="text" placeholder="Enter your name and surname" className="w-full rounded-lg bg-[transparent] px-4 py-2 text-gray-200 outline-none placeholder:text-[14px]" />
        </div>
      </div>
      <div className="text-left">
        <p className="mb-1 text-[14px] text-white">Email Address</p>
        <label for="name" className="sr-only">Name Surname</label>
        <div className="flex items-center rounded-lg bg-[#0C0B0E] px-3 py-1">
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.25 4.25H16.75C16.9489 4.25 17.1397 4.32902 17.2803 4.46967C17.421 4.61032 17.5 4.80109 17.5 5V16C17.5 16.1989 17.421 16.3897 17.2803 16.5303C17.1397 16.671 16.9489 16.75 16.75 16.75H3.25C3.05109 16.75 2.86032 16.671 2.71967 16.5303C2.57902 16.3897 2.5 16.1989 2.5 16V5C2.5 4.80109 2.57902 4.61032 2.71967 4.46967C2.86032 4.32902 3.05109 4.25 3.25 4.25ZM16 7.4285L10.054 12.7535L4 7.412V15.25H16V7.4285ZM4.38325 5.75L10.0457 10.7465L15.6265 5.75H4.38325Z" fill="#868C98" />
          </svg>

          <input id="name" type="text" placeholder="Enter your email" className="w-full rounded-lg bg-[transparent] px-4 py-2 text-gray-200 outline-none placeholder:text-[14px]" />
        </div>
      </div>
      <div className=" mt-4">
      <Link to="/confirm" className=''>
      <button type="submit" className="w-full rounded-lg bg-[#48FF2C] py-2 font-semibold text-black">Continue</button>
      </Link>
      </div>
    </form>
    <div className=" mt-4">

<Link to="/">
    <button type="submit" className="w-full rounded-lg border border-[#2F2F2F] py-2 font-semibold text-white">Home Page</button>
    </Link>
    </div>
  </div>
</div>

    </>
  )
}

export default Login