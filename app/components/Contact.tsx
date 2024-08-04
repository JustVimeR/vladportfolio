import React from 'react'
import Image from 'next/image'
import projects from '../../public/projects.png'

const Contact = () => {
  return (
    <div className='mt-40 bg-black rounded-custom-56 p-10'>
      <p className='ml-12 text-white text-[64px] font-normal font-playfair'>
      Ready to create something cool and need a 
      frontend partner?
      </p>  
      <div className='flex flex-row py-6 px-8 mt-10 justify-center items-center'>
          <Image src={projects} alt="projects info pic"/>
          <p className='ml-12 text-green-200 text-[56px] font-normal font-anton'>
            Drop me an email at taranvladyslav2003@gmail.com
          </p>  
      </div>
    </div>
  )
}

export default Contact
