import React from 'react'
import eu from '/europe.png'

export const Europe = () => {
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
            src={eu}
            alt="Mars image"
            className="w-[420px] ml-[60%] mt-[70px] "
          />
        </div>

        <div className=" text-white flex flex-col justify-center items-start ml-[285px] ">
          <h1 className="text-[128px]">EUROPA</h1>
          <p className="text-[17px] w-[450px]">
          Europa The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin. Avg.
          </p>
          <hr className="w-[450px] border-gray-600 mt-[10%] "/>
          <div className="flex gap-[90px] mt-[8%]">
            <div className="">
              <h4 className="text-[12px]">AVG. DISTANCE</h4>
              <p className="text-[25px] uppercase">628 mil. km</p>
            </div>
            <div>
              <h4 className="text-[12px]">EST. TRAVEL TIME</h4>
              <p className="text-[25px] uppercase">3 years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
