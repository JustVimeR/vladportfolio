import React from 'react'
import Image from 'next/image'
import projects from '../../public/projects.png'
import GardenHub from '../../public/gardenhub.png'

const Projects = () => {
  return (
    <div className='mt-40'>
        <div className='flex flex-row gap-52'>
            <div className='font-anton h-28 whitespace-nowrap rounded-custom-56 text-5xl font-normal bg-white border-2 border-gray-200 px-11 py-8 h-35'>
                Personal projects
            </div>
            <div className='flex flex-row bg-white border-2 border-gray-200 py-6 px-8'>
                <Image src={projects} alt="projects info pic"/>
                <p className='ml-12 font-fake-receipt'>
                In addition to my professional and client work, I have been working on several personal projects and ideas. These projects usually start from a place of curiosity, bring me immense happiness. I hope you find them interesting! ◔‿◔
                </p>  
            </div>
        </div>
      <div className='mt-12 flex flex-row gap-24'>
        <div className='bg-pink-200 p-10 rounded-custom-56 flex-col w-[600px] h-[640px]'>
          <div className='font-normal text-5xl font-anton'>
            01.
          </div>
          <div className='mt-8 font-bold text-2xl font-bebas-neue'>
            GardenHub
          </div>
          <div className='mt-2 font-normal text-base font-fake-receipt'>
            Angular / Angular Materials /TypeScript / SCSS / HTML5 
          </div>
          <Image src={GardenHub} alt="gardenhub" className='mt-8 rounded-custom-56 max-h-96 object-center object-cover w-[520px]'/>
        </div>

        <div className='bg-purple-300 p-10 rounded-custom-56 flex-col w-[600px] h-60 mt-28'>
          <div className='font-normal text-5xl font-anton'>
            02.
          </div>
          <div className='mt-8 font-bold text-2xl font-bebas-neue'>
            Cars Review
          </div>
          <div className='mt-2 font-normal text-base font-fake-receipt'>
            React / Chakra UI / JavaScript / Redux / Vitest
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects