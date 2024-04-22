import React from 'react'

function navigation() {
  return (
    <nav className='bg-gray-900  text-white font-bold'>
      <ul className='flex space-x-4 text-xl text-right'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

export default navigation