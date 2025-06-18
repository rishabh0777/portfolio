import React from 'react'

function Work() {
    const works = [
        {
            title: 'Webli',
            description: 'A Creative Agency',
        },
        {
            title: 'Atmos',
            description: 'A Weather Website'
        },
        {
            title: 'Spicesaga',
            description: 'A Food Selling site'
        },
        {
            title: 'Timeless Vogue',
            description: 'An E-commerce Website for Men\'s Fashion'
        }
    ]
  return (
    <div className='work w-full min-h-[60vh] px-10 py-4'>
        <div className='flex items-center justify-between whitespace-nowrap w-[5vw]'>
            <h1 className='md:text-[1.2vw] sm:text-[6vw] font-bold'>Selected Woks</h1>
            <p className='md:text-[0.9vw] sm:text-[4vw]'>[4]</p>
        </div>
        <div className='md:w-[95vw mx-auto mt-8 border-t-[0.1vh] border-zinc-400'>
            {
                works.map((work, index) => (
                    <div key={index} className='flex items-center justify-between w-full py-4 px-4 border-b-[0.1vh] border-zinc-400 hover:bg-zinc-200 cursor-pointer transition-all duration-300'>
                <div className='flex flex-col'>
                    <h2 className='md:text-[4vw] sm:text-[6vw] font-bold'>{work.title}</h2>
                    <p className='md:text-[1.2vw] sm:text-[2.5vw]'>{work.description}</p>
                </div>
                <div>
                    <i className="ri-arrow-right-up-line md:text-[4vw] sm:text-[7vw]"></i>
                </div>
            </div>
                ))
            }
        </div>
    </div>
  )
}

export default Work