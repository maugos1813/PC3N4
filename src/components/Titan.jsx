import React from 'react'
import titan from '/titan.png'

export const Titan = () => {
  return (
    <div>
      <div className="flex flex-col w-full mt-[6%] ">
      <div className="text-white flex gap-4 text-[25px] w-[500px] ml-[8%]">
        <h1 className="text-gray-600 text-left ml-[5%]">01</h1>
        <h1>PICK YOUR DESTINATION</h1>
      </div>

      <div className="flex w-full items-center gap-4">
        <div className="flex justify-center items-center w-[500px]">
          <img
            src={titan}
            alt="Mars image"
            className="w-[420px] ml-[60%] mt-[70px] "
          />
        </div>

        <div className=" text-white flex flex-col justify-center items-start ml-[285px] ">
          <h1 className="text-[128px]">TITAN</h1>
          <p className="text-[17px] w-[450px]">
          Titan The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
          </p>
          <hr className="w-[450px] border-gray-600 mt-[10%] "/>
          <div className="flex gap-[90px] mt-[8%]">
            <div className="">
              <h4 className="text-[12px]">AVG. DISTANCE</h4>
              <p className="text-[25px] uppercase"> 1.6 bil. km </p>
            </div>
            <div>
              <h4 className="text-[12px]">EST. TRAVEL TIME</h4>
              <p className="text-[25px] uppercase"> 7 years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
