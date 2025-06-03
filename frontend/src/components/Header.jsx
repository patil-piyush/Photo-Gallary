import React from 'react'

const Header = () => {
  return (
    <div className='flex h-[800px] w-full'>
      <div className='w-1/2 flex flex-col items-start px-50  justify-center'>
          <h1 className='text-6xl font-serif'>Memories are <br />Everything ..,</h1>
          <p className='py-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum pariatur, perspiciatis eius atque dicta, magnam natus quos
          </p>
          <button type='submit' className='cursor-pointer border-0 rounded-full shadow-md shadow-gray-800 py-1 px-5 bg-gray-900 text-white text-lg hover:-translate-y-1' onClick={() => navigate("/register")}>Get Started</button>
      </div>
      <div className='w-1/2 flex items-center justify-center'>
      <img className='h-[700px] w-[900px] scale-100 mr-50' src="/src/assets/header.png" alt="" />
      </div>
    </div>
  )
}

export default Header