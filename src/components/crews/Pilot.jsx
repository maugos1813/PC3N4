import React from 'react'
import pilot from '/pilot.png'

export const Pilot = () => {
  return (
    <div className="w-full max-h-screen flex mt-[85px]">
      <div className="flex gap-6 text-[20px] ml-[12%] w-[600px] flex-col">
        <div className="flex gap-6">
          <h1 className="text-gray-600">02</h1>
          <h1 className="text-white">MEET YOUR CREW</h1>
        </div>
        <div className="mt-[100px]">
          <h3 className="uppercase text-gray-400 text-[25px]">Pilot</h3>
          <h1 className='text-[58px] uppercase text-white'> Victor Glover</h1>
          <p className='w-[480px] text-[17px] text-gray-300'> Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
        </div>
      </div>
      <div className="">
        <img src={pilot} alt="" className="max-w-[575px] max-h-[602px]" />
      </div>
    </div>
  )
}
