import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full h-[8vh] fixed top-0 left-0 z-[200] px-4 flex items-center justify-between'>
      <h3>Rishabh Srivastava</h3>
      <ul className='flex justify-end items-center gap-6 text-[1.1vw]'>
        <li>About</li>
        <li>Work</li>
        <li>Process</li>
        <li>Contact</li>
      </ul>
      <h3>
        <i class="ri-moon-fill"></i>
        Dark
        </h3>
    </nav>
  )
}

export default Navbar;