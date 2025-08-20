

import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className="bg-[url('/background.jpg')] bg-cover bg-center h-screen pt-8 flex justify-between flex-col w-full">
        <img className='w-36 ml-3' src="/logo.PNG" alt="" />
        <div className='bg-white/50 pb-8 py-4 px-4'>
          <h2 className='text-[30px] font-semibold'>Get Started with Right-Ride</h2>
          <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start
