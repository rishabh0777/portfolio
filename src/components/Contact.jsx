import React from 'react'
import Rishabh from '../assets/rishabh.jpeg'

const Contact = () => {
  return (
    <div className=' w-full min-h-screen flex items-center justify-center py-4 px-10'>
      <div className='w-[95vw] contact'>
        <h1 className='text-[6vw] font-bold leading-[6vw]'>
          <div className='bg-red-500 w-[5vw] h-[5vw] inline-block mr-2 rounded-full overflow-hidden'>
            <img src={Rishabh} alt="" />
          </div>

         
          Let's talk about a <br />project, collaboration or<br />an idea you may have.
        </h1>
      </div>
    </div>
  )
}

export default Contact