import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";


export const Destination = () => {
  if (location.pathname === "/destination") {
    return <Navigate to="/destination/moon" />;
  }
  return (
    <div className="flex">

      <nav className="text-white text-[14px] flex gap-8 list-none my-[8%] absolute ml-[56%] mt-[10%]">
        <li className={`${location.pathname === "/destination/moon" ? "border-b-2 border-white" : ""}`}>
          <Link to="moon">MOON</Link>
        </li>
        <li  className={`${location.pathname === "/destination/mars" ? "border-b-2 border-white" : ""}`}>
          <Link to="mars">MARS</Link>
        </li>
        <li  className={`${location.pathname === "/destination/europe" ? "border-b-2 border-white" : ""}`}>
          <Link to="europe">EUROPA</Link>
        </li>
        <li  className={`${location.pathname === "/destination/titan" ? "border-b-2 border-white" : ""}`}>
          <Link to="titan">TITAN</Link>
        </li>
      </nav>
      <Outlet />
    </div>
  );
};
