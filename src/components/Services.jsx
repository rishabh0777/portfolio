import React from 'react'

const Services = () => {
  const services = [
    {
      title: 'Frontend Development',
      description: 'I build fast, responsive, and interactive user interfaces using React.js, Tailwind CSS, GSAP, and Framer Motion. I focus on delivering high-quality code that enhances user experience and performance.',
      index: '01'
    },
    {
      title: 'Backend Development',
      description: 'I create robust backend systems using Node.js, Express, and MongoDB. My backend solutions are designed to be scalable, secure, and efficient, ensuring seamless integration with frontend applications.',
      index: '02'
    },
    {
      title: 'Complete Web Solutions',
      description: 'Need the full stack? I handle both frontend and backend to deliver complete MERN-based solutions. From landing pages to complex web applications, I ensure a cohesive and efficient development process.',
      index: '03'
    }
  ]
  return (
    <div className='services ralative w-full min-h-[90vh] flex flex-col justify-center items-center px-10'>
      <div className='w-[90vw] '>
        <h3 className="sm:text-[7vw] md:text-[4vw]">I can help you with...</h3>
      <div className='w-full grid sm:grid-cols-1 md:grid-cols-3 gap-8 py-8 sm:justify-items-center md:justify-items-start sm:items-center md:items-start'>
        {
          services.map((service) => (
            <div className='md:w-[20vw] md:h-[20vh] sm:w-[80vw] sm:h-[30vh] flex flex-col'>
        <h1 className="md:text-[5vw] sm:text-[18vw] text-zinc-500">{service.index}</h1>
        <h1 className='md:text-[1.5vw] sm:text-[5vw] font-bold'>{service.title}</h1>
        <p className='md:text-[0.8vw] sm:text-[3vw]'>
          {service.description}
        </p>
        </div>
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default Services