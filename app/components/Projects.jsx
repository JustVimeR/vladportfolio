import React from 'react'
import Image from 'next/image'
import projects from '../../public/projects.png'

const Projects = () => {
  return (
    <div className='mt-40'>
        <div>
            <div className='rounded-custom-56 text-5xl font-normal bg-white border-2 border-gray-200 px-11 py-8 h-35'>
                Personal projects
            </div>
            <div className='flex flex-row bg-white'>
                <Image src={projects} alt="projects info pic"/>
                In addition to my professional and client work, I have been working 
                on several personal projects and ideas. These projects usually start 
                from a place of curiosity, bring me immense happiness, and allow me 
                to contribute to the design community. I hope you find them 
                interesting! ◔‿◔
            </div>
        </div>
    </div>
  )
}

export default Projects