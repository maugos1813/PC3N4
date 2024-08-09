import React from 'react'
import speci from '/speci.png'

export const Specialist = () => {
  return (
    <div className="w-full max-h-screen flex mt-[85px]">
      <div className="flex gap-6 text-[20px] ml-[12%] w-[600px] flex-col">
        <div className="flex gap-6">
          <h1 className="text-gray-600">02</h1>
          <h1 className="text-white">MEET YOUR CREW</h1>
        </div>
        <div className="mt-[100px]">
          <h3 className="uppercase text-gray-400 text-[25px]"> Mission Specialist</h3>
          <h1 className='text-[58px] uppercase text-white'> Mark Shuttleworth</h1>
          <p className='w-[480px] text-[17px] text-gray-300'>  Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist. </p>
        </div>
      </div>
      <div className="">
        <img src={speci} alt="" className="max-w-[575px] max-h-[602px]" />
      </div>
    </div>
  )
}
