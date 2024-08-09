import React from 'react'
import engi from "/engineer.png";

export const Engineer = () => {
  return (
    <div className="w-full max-h-screen flex mt-[85px]">
      <div className="flex gap-6 text-[20px] ml-[12%] w-[600px] flex-col">
        <div className="flex gap-6">
          <h1 className="text-gray-600">02</h1>
          <h1 className="text-white">MEET YOUR CREW</h1>
        </div>
        <div className="mt-[100px]">
          <h3 className="uppercase text-gray-400 text-[25px]">Flight Engineer</h3>
          <h1 className='text-[58px] uppercase text-white'> Anousheh Ansari</h1>
          <p className='w-[480px] text-[17px] text-gray-300'> Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </p>
        </div>
      </div>
      <div className="">
        <img src={engi} alt="" className="max-w-[575px] max-h-[602px]" />
      </div>
    </div>
  )
}
