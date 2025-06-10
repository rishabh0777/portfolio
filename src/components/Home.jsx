import React from 'react'

const Home = () => {
    return (
        <div className='relative w-full min-h-screen '>
            <div className='w-full flex'>
                <div className="heading-text-container flex flex-col justify-end w-[77vw] h-[80vh] text-[15vw] pl-10 py-4 leading-[15vw] whitspace-none">
                    <h1>Website</h1>
                    <h1>Developer</h1>
                </div>
                <div className="info-me flex flex-col justify-end w-[23vw] h-[80vh] text-[1.2vw] pr-10 py-10 whitespace-none">
                    <p>Founder & full-stack developer at Webli, creating smooth digital experiences.</p>
                </div>
            </div>
            <div className='w-full flex justify-between items-center px-20 mt-5 '>
                <div className="about-me flex flex-col gap-2 w-[40vw] text-[1.2vw]">
                    <p>
                        I'm a full-stack developer and founder of Webli, passionate about building smooth, fast, and visually engaging websites that solve real problems and elevate brands.
                    </p>
                    <button className='bg-zinc-900 px-2 w-[12vw] mt-5 text-white rounded-lg'>Visit to Webli</button>

                </div>
                <div>
                    <h3 className='text-zinc-500'>Let's get connected</h3>
                    <ul className="mt-2 text-zinc-900">
                        <li>Instagram</li>
                        <li>Linkedin</li>
                        <li>Gmail</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home