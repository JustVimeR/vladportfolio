import React from 'react'

const Navigation = () => {
  return (
    <div className='flex h-20 w-full rounded-2xl backdrop-blur-sm bg-gradient-to-b from-[rgba(255,255,255,0.02)] to-[rgba(0,0,0,0.02)] p-4 mt-2 mx-2 gap-x-2 fixed'>
        <button className='rounded-3xl bg-slate-200 p-3'>INFO</button>
        <button className='rounded-3xl bg-sky-200 p-3'>CAPABILITIES</button>
        <button className='rounded-3xl bg-pink-200 p-3'>WORK</button>
        <button className='rounded-3xl bg-green-200 p-3'>PROJECTS</button>
        <button className='rounded-3xl bg-orange-200 p-3'>CONNECT</button>
    </div>
  )
}

export default Navigation