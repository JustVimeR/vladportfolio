import React from 'react'
import Vector from '../../public/Vector.svg';
import MyInfo from '../../public/myinfo.png'
import Image from 'next/image';

const Info = () => {
  return (
    <div className='flex flex-row'>
        <div className='flex flex-col gap-12'>
            <div className='bg-black rounded-custom-56 flex flex-row items-center justify-center px-10 py-12 h-44'>
                <div className='h-24 w-24 bg-green-200 rounded-3xl origin-bottom -rotate-12 mr-7 flex items-center justify-center'>
                    <Vector />
                </div>
                <div className='text-7xl font-normal text-white'>Vladyslav Taran</div>
            </div>
            <div className='rounded-custom-56 bg-gray-200 px-12 py-10 flex flex-row ' >
                <div className='flex flex-col'>
                <p>Hello!</p>
                <p className='mt-5'>I’M A Digital Product designer focused on the web/mobile, 
interaction, modern aesthetics, branding, and design systems. 
I take pleasure in creating products that are simple, smart, 
and user-friendly.</p>
                <p className='mt-5'>Over the years of designing, I have honed my skills as a 
well-rounded designer, confidently navigating every aspect of 
the digital product creation process, from start to finish.</p>
                </div>
                
            <Image src={MyInfo} alt='myinfo' className='w-52 h-44' />
            </div>
            <div className='framer px-10'>
                <div className='rounded-custom-56 bg-pink-200 px-12 py-10 flex flex-col gap-12' >
                    <p className='text-5xl font-normal'>Work</p>
                    <div className='flex flex-col'>
                        <p className='text-2xl font-normal'>2022-2023</p>
                        <p>Senior Product Designer</p>
                    </div>
                    
                    <div className='flex flex-col'>
                        <p className='text-2xl font-normal'>2019-2022</p>
                        <p>In late 2019, I founded Heeko, a creative design and technology company. Our 
    team has been fortunate to work with global brands such as </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-14 items-center place-content-center'>
            <div className='framer px-6'>
                <div className='rounded-custom-56 bg-sky-200 px-12 py-10 flex flex-col'>
                    <p className='text-5xl font-normal'>Capabilities</p>
                    <div className='flex gap-2 mt-12 flex-wrap'>
                        <div className='text-2xl font-normal bg-white rounded-custon-40 px-4 py-2'>Type Script</div>
                        <div className='text-2xl font-normal bg-white rounded-custon-40 px-4 py-2'>Java Script</div>
                        <div className='text-2xl font-normal bg-white rounded-custon-40 px-4 py-2'>NextJs</div>
                        <div className='text-2xl font-normal bg-white rounded-custon-40 px-4 py-2'>React</div>
                        <div className='text-2xl font-normal bg-white rounded-custon-40 px-4 py-2'>UX/UI</div>
                        <div className='text-2xl font-normal bg-white rounded-custon-40 px-4 py-2'>Tailwind</div>
                        <div className='text-2xl font-normal bg-white rounded-custon-40 px-4 py-2'>Chakra Ui</div>
                        <div className='text-2xl font-normal bg-white rounded-custon-40 px-4 py-2'>HTML5/SCSS</div>
                    </div>
                    <p className='mt-12'> 
                    I also collaborate with other talented designers to 
    provide 3D design, illustrations, and icon design 
    services upon request.
                    </p>
                </div>
            </div>
            <div className='rounded-custom-56 bg-green-200 px-12 py-10 flex flex-row'>
                <div className='flex flex-col'>
                    <p className='text-5xl font-normal mb-6'>Where?</p>
                    <p>Kiev, Ukraine</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info
