import React from "react";
import launche from "/launch.jpg";

export const Launch = () => {
  return (
    <div className="">
      <div className="flex gap-6 ml-[12%] mt-[5%] text-[25px]">
        <h1 className="text-gray-500">03</h1>
        <h1 className="text-white">SPACE LAUNCH 101</h1>
      </div>
      <div className="flex">
        <div className="text-white ml-[20%] mt-[8%] ">
          <h1 className="uppercase text-gray-400">The terminology...</h1>
          <h1 className="text-[55px]">LAUNCH VEHICLE</h1>
          <p className="w-[405px] text-left text-gray-400 text-[16px]">
            Launch vehicle A launch vehicle or carrier rocket is a
            rocket-propelled vehicle used to carry a payload from Earth's
            surface to space, usually to Earth orbit or beyond. Our WEB-X
            carrier rocket is the most powerful in operation. Standing 150
            metres tall, it's quite an awe-inspiring sight on the launch pad!{" "}
          </p>
        </div>
        <picture>
          <img src={launche} alt="image launch" className="ml-[180px]"/>
        </picture>
      </div>
    </div>
  );
};
