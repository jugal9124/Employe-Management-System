import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-between'>
      <h1 className='text-2xl font-medium '>hello <br/> <span className='text-3xl font-semibold'>Jugal 👋</span> </h1>
      <button className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm '>Log Out</button>
    </div>
  )
}

export default Header