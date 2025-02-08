import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className=' text-2xl font-medium '>Hello , <br /> <span className='text-3xl font-semibold'>
        Shubham 😅</span> </h1>
      <button className='bg-red-600 text-lg font-medium rounded-sm py-3 px-5'>Log Out</button>
    </div>
  )
}

export default Header
