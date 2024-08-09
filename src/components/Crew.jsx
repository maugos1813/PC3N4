import React from "react";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";

export const Crew = () => {
    const location = useLocation();
    if (location.pathname === "/crew") {
        return <Navigate to="/crew/commander" />;
      }
  
  const currentPath = location.pathname.split("/")[2] || "";

  return (
    <div className="flex">
      <nav className="absolute bottom-0 left-0 flex p-4 mb-[3%] ml-[11%]">
        <ul className="flex gap-6 list-none m-0 p-0">
          <li>
            <Link to="commander">
              <div
                className={`w-[15px] h-[15px] rounded-full ${
                  currentPath === "commander" ? "bg-white" : "bg-gray-600"
                }`}
              ></div>
            </Link>
          </li>
          <li>
            <Link to="pilot">
              <div
                className={`w-[15px] h-[15px] rounded-full ${
                  currentPath === "pilot" ? "bg-white" : "bg-gray-600"
                }`}
              ></div>
            </Link>
          </li>
          <li>
            <Link to="specialist">
              <div
                className={`w-[15px] h-[15px] rounded-full ${
                  currentPath === "specialist" ? "bg-white" : "bg-gray-600"
                }`}
              ></div>
            </Link>
          </li>
          <li>
            <Link to="engineer">
              <div
                className={`w-[15px] h-[15px] rounded-full ${
                  currentPath === "engineer" ? "bg-white" : "bg-gray-600"
                }`}
              ></div>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};