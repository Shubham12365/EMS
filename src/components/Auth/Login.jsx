import React from 'react'

const login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center '>
      {/* LoginPage */}
      <div className='border-2 rounded-xl border-emerald-600 p-20'>

      <form className='flex flex-col items-center justify-center gap-2.5'>


        <input className='py-3 px-5 text-white text-xl placeholder:text-gray-400 bg-transparent border-emerald-300 border-2 rounded-full' type='email' placeholder='Enter your email' ></input>

        <input className='py-3 px-5 text-white text-xl placeholder:text-gray-400 bg-transparent border-emerald-300 border-2 rounded-full' type='password' placeholder='Enter your password' ></input>
        
        <button className='text-white mt-4  bg-emerald-600 px-5 py-3 border-none rounded-3xl'> Log in </button>

      </form>
      </div>
      Login

    </div>
  )
}

export default login
