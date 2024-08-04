import React from 'react'
import Vector from '../../public/Vector.svg';
import MyInfo from '../../public/myinfo.png'
import Image from 'next/image';

const Info = () => {
  return (
    <div className='flex flex-row'>
        <div className='flex flex-col gap-12 items-end'>
            <div className='max-w-[700px] bg-black rounded-custom-56 flex flex-row items-center justify-center px-10 py-12 h-44'>
                <div className='h-24 w-24 bg-green-200 rounded-3xl origin-bottom -rotate-12 mr-7 flex items-center justify-center'>
                    <Vector />
                </div>
                <div className='text-7xl font-normal text-white font-anton'>Vladyslav Taran</div>
            </div>
            <div className='rounded-custom-56 bg-gray-200 px-12 py-10 flex flex-row ' >
                <div className='flex flex-col'>
                <p className='font-fake-receipt'>Hello!</p>
                <p className='mt-5 font-fake-receipt'>I’m a Frontend Developer specializing in creating engaging and responsive web applications. My expertise lies in building user-friendly interfaces with a focus on modern technologies, clean code, and seamless user experiences. I take pride in crafting applications that are both functional and visually appealing.</p>
                <p className='mt-5 font-fake-receipt'>Over the years of development, I have refined my skills in frontend technologies, confidently navigating every aspect of the development process, from concept to deployment. My goal is to turn complex problems into elegant solutions while delivering high-quality, performant web experiences.</p>
                </div>
                
            <Image src={MyInfo} alt='myinfo' className='w-52 h-44' />
            </div>
            <div className='framer px-10'>
                <div className='rounded-custom-56 bg-pink-200 px-12 py-10 flex flex-col gap-12' >
                    <p className='text-5xl font-normal font-playfair'>Work</p>
                    <div className='flex flex-col'>
                        <p className='text-2xl font-normal font-bebas-neue'>Nov 2023 - Present</p>
                        <p className='font-fake-receipt'>React Frontend Developer at Startup. CarsReview is a B2B platform revolutionizing used car buying with honest, in-depth reviews. We provide businesses with accurate insights into performance, history, and value, ensuring informed, confident decisions.</p>
                    </div>

                    <div className='flex flex-col'>
                        <p className='text-2xl font-normal font-bebas-neue'>Sep 2023 - Oct 2023</p>
                        <p className='font-fake-receipt'>Angular Developer in Sidis Group. Developed the frontend of the CRM system for accounting of kindergartens, schools and camps.</p>
                    </div>
                    
                    <div className='flex flex-col'>
                        <p className='text-2xl font-normal font-bebas-neue'>Apr 2023 - Sep 2023</p>
                        <p className='font-fake-receipt'>Web developer in FIDEZ. Developed various types of sites</p> 
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-14 items-center place-content-center'>
            <div className='framer px-6'>
                <div className='rounded-custom-56 bg-sky-200 px-12 py-10 flex flex-col'>
                    <p className='text-5xl font-normal font-playfair'>Capabilities</p>
                    <div className='flex gap-2 mt-12 flex-wrap'>
                        <div className='text-2xl font-normal bg-white rounded-custon-40 px-4 py-2 font-anton'>Type Script</div>
                        <div className='text-2xl font-normal bg-white rounded-custon-40 px-4 py-2 font-playfair'>Java Script</div>
                        <div className='text-2xl font-normal bg-white rounded-custon-40 px-4 py-2 font-fake-receipt'>NextJs</div>
                        <div className='text-2xl font-normal bg-white rounded-custon-40 px-4 py-2 font-bebas-neue'>React</div>
                        <div className='text-2xl font-normal bg-white rounded-custon-40 px-4 py-2 font-anton'>UX/UI</div>
                        <div className='text-2xl font-normal bg-white rounded-custon-40 px-4 py-2 font-playfair'>Tailwind</div>
                        <div className='text-2xl font-normal bg-white rounded-custon-40 px-4 py-2 font-fake-receipt'>Chakra UI</div>
                        <div className='text-2xl font-normal bg-white rounded-custon-40 px-4 py-2 font-bebas-neue'>HTML5/SCSS</div>
                    </div>
                </div>
            </div>
            <div className='rounded-custom-56 bg-green-200 px-12 py-10 flex flex-row'>
                <div className='flex flex-col'>
                    <p className='text-5xl font-normal mb-6 font-anton'>Where?</p>
                    <p className='font-fake-receipt'>Kiev, Ukraine</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info
