import React from "react";

export const Home = () => {
  return (
    <div className="flex font-abel">
      <div className="text-white ml-[10%] mt-[15%] text-left w-[490px] ">
        <h1 className="text-[30px]">SO, YOU WANT TO TRAVEL TO</h1>
        <h1 className="text-[170px]">SPACE</h1>
        <p className="text-[20px] w-[445px]">
          Let's face it: if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="mt-[20%] ml-[25%]">
        <div className="w-[280px] h-[280px] bg-white text-black flex items-center justify-center rounded-full">
          <h1 className="text-center text-[40px]">EXPLORE</h1>
        </div>
      </div>
    </div>
  );
};
