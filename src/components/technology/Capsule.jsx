import React from 'react'
import capsule from '/capsule.jpg'

export const Capsule = () => {
  return (
    <div className="">
      <div className="flex gap-6 ml-[12%] mt-[5%] text-[25px]">
        <h1 className="text-gray-500">03</h1>
        <h1 className="text-white">SPACE LAUNCH 101</h1>
      </div>
      <div className="flex">
        <div className="text-white ml-[20%] mt-[8%] ">
          <h1 className="uppercase text-gray-400">The terminology...</h1>
          <h1 className="text-[55px] uppercase"> Space capsule</h1>
          <p className="w-[405px] text-left text-gray-400 text-[16px]">
          A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained. 
          </p>
        </div>
        <picture>
          <img src={capsule} alt="image launch" className="ml-[180px]"/>
        </picture>
      </div>
    </div>
  )
}
