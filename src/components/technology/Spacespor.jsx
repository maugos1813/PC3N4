import React from 'react'
import space from '/space.jpg'

export const Spacespor = () => {
  return (
    <div className="">
      <div className="flex gap-6 ml-[12%] mt-[5%] text-[25px]">
        <h1 className="text-gray-500">03</h1>
        <h1 className="text-white">SPACE LAUNCH 101</h1>
      </div>
      <div className="flex">
        <div className="text-white ml-[20%] mt-[8%] ">
          <h1 className="uppercase text-gray-400">The terminology...</h1>
          <h1 className="text-[55px] uppercase">Spaceport</h1>
          <p className="w-[405px] text-left text-gray-400 text-[16px]">
          A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch. 
          </p>
        </div>
        <picture>
          <img src={space} alt="image launch" className="ml-[180px]"/>
        </picture>
      </div>
    </div>
  )
}
