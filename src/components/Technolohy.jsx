import React from 'react'
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom'

export const Technology = () => {
  const location = useLocation();

  if (location.pathname === "/technology") {
    return <Navigate to="/technology/launch" />;
  }

  return (
    <div className="">
      <nav className="absolute text-white text-[14px] flex flex-col gap-8 list-none my-[8%] ml-[12%] mt-[10%]">
        <li
          className={`border w-[72px] h-[72px] rounded-full flex items-center justify-center ${
            location.pathname.includes('launch') ? 'bg-white text-black' : ''
          }`}
        >
          <Link to="launch">1</Link>
        </li>
        <li
          className={`border w-[72px] h-[72px] rounded-full flex items-center justify-center ${
            location.pathname.includes('spacesport') ? 'bg-white text-black' : ''
          }`}
        >
          <Link to="spacesport">2</Link>
        </li>
        <li
          className={`border w-[72px] h-[72px] rounded-full flex items-center justify-center ${
            location.pathname.includes('capsule') ? 'bg-white text-black' : ''
          }`}
        >
          <Link to="capsule">3</Link>
        </li>
      </nav>
      <Outlet />
    </div>
  );
}