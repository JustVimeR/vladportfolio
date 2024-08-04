import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Social = () => {
  return (
    <div className='flex justify-center items-center mt-40'>
        <div className='bg-white rounded-custom-56 p-10  border-2 border-gray-200 flex flex-wrap gap-4 w-[1080px]'>
            <div className='inline-flex text-[56px] font-fake-receipt font-normal p-2 gap-4 bg-pink-200 justify-start items-center rounded-custom-56 w-auto'>
                GitHub
                <a 
                href="https://github.com/JustVimeR" 
                target="_blank" 
                rel="noopener noreferrer"
                className='bg-white rounded-custom-56 w-[88px] h-[72px] flex justify-center items-center'
                >
                    <GoArrowUpRight size={40}/>
                </a>
            </div>
            <div className='font-anton inline-flex text-[56px] font-normal p-2 gap-4 bg-blue-200 justify-start items-center rounded-custom-56 w-auto'>
                Instagram
                <a 
                href="https://www.instagram.com/_vladyslav_t/" 
                target="_blank" 
                rel="noopener noreferrer"
                className='bg-white rounded-custom-56 w-[88px] h-[72px] flex justify-center items-center'
                >
                    <GoArrowUpRight size={40}/>
                </a>
            </div>
            <div className='font-bebas-neue inline-flex text-[56px] font-normal p-2 gap-4 bg-green-200 justify-start items-center rounded-custom-56 w-auto'>
                LinkedIn
                <a 
                href="https://www.linkedin.com/in/taran-vladyslav/" 
                target="_blank" 
                rel="noopener noreferrer"
                className='bg-white rounded-custom-56 w-[88px] h-[72px] flex justify-center items-center'
                >
                    <GoArrowUpRight size={40}/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Social
