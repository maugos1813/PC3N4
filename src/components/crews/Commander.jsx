import React from "react";
import comand from "/commander.png";


export const Commander = () => {
  return (
    <div className="w-full max-h-screen flex mt-[85px]">
      <div className="flex gap-6 text-[20px] ml-[12%] w-[600px] flex-col">
        <div className="flex gap-6">
          <h1 className="text-gray-600">02</h1>
          <h1 className="text-white">MEET YOUR CREW</h1>
        </div>
        <div className="mt-[100px]">
          <h3 className="uppercase text-gray-400 text-[25px]"> Commander</h3>
          <h1 className='text-[58px] uppercase text-white'> Douglas Hurley</h1>
          <p className='w-[480px] text-[17px] text-gray-300'> Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.  </p>
        </div>
      </div>
      <div className="">
        <img src={comand} alt="" className="max-w-[575px] max-h-[602px]" />
      </div>
    </div>
  );
};
