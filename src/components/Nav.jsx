import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./Home.jsx";
import home from "/Home.jpg";
import SDestiy from "/02Destiy.jpg";
import mega from "/mega.jpg";
import tech from "/tech.jpg";
import { Button } from "./Button.jsx";
import { Mars } from "./Mars.jsx";
import { Destination } from "./Destination.jsx";
import { Titan } from "./Titan.jsx";
import { Europe } from "./Europe.jsx";
import { Moon } from "./Moon.jsx";
import { Crew } from "./Crew.jsx";
import { Technolohy } from './Technolohy.jsx'
import logo from "/logo.svg";
import { Engineer } from "./crews/Engineer.jsx";
import { Commander } from "./crews/Commander.jsx";
import { Specialist } from "./crews/Specialist.jsx";
import { Pilot } from "./crews/Pilot.jsx";
import { Launch } from "./technology/Launch.jsx";
import { Spacespor } from "./technology/Spacespor.jsx";
import { Capsule } from "./technology/Capsule.jsx";

const routeBackgrounds = {
  "/": home,
  "/destination": SDestiy,
  "/destination/moon": SDestiy,
  "/destination/mars": SDestiy,
  "/destination/europe": SDestiy,
  "/destination/titan": SDestiy,
  "/crew": mega,
  "/crew/commander": mega,
  "/crew/pilot": mega,
  "/crew/specialist": mega,
  "/crew/engineer": mega,
  "/technology": tech,
  "/technology/launch": tech,
  "/technology/spacesport": tech,
  "/technology/capsule": tech,
};

export const Nav = () => {
  const location = useLocation();
  const backgroundImage = routeBackgrounds[location.pathname] || home;

  return (
    <>
      <div>
        <div
          className="relative min-h-screen"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            src={logo}
            alt="logo image"
            className=" mt-[4%] ml-[4%] absolute"
          />
          <hr className="border-t border-gray-600 w-[30%] absolute ml-[12%] mt-[6%] z-10" />

          <nav className="flex justify-end font-abel">
            <div className="flex justify-end w-[60%] h-[80px] gap-20 pr-[150px] items-center text-white mt-[3%] bg-transparent backdrop-blur-3xl ">
              <Link
                to="/"
                className={`${
                  location.pathname === "/" ? "border-b-2 border-white" : ""
                }`}
              >
                <Button val="00 " title="HOME" />
              </Link>
              <Link
                to="/destination"
                className={`${
                  location.pathname.startsWith("/destination")
                    ? "border-b-2 border-white"
                    : ""
                }`}
              >
                <Button val="01 " title="DESTINATION" />
              </Link>
              <Link
                to="/crew"
                className={`${
                  location.pathname.startsWith("/crew")
                    ? "border-b-2 border-white"
                    : ""
                }`}
              >
                <Button val="02 " title="CREW" />
              </Link>
              <Link
                to="/technology"
                className={`${
                  location.pathname.startsWith("/technology")
                    ? "border-b-2 border-white"
                    : ""
                }`}
              >
                <Button val="03" title="TECHNOLOGY" />
              </Link>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />}>
              <Route path="moon" element={<Moon />} />
              <Route path="mars" element={<Mars />} />
              <Route path="europe" element={<Europe />} />
              <Route path="titan" element={<Titan />} />
            </Route>
            <Route path="/crew" element={<Crew />}>
              <Route path="commander" element={<Commander />} />
              <Route path="pilot" element={<Pilot />} />
              <Route path="specialist" element={<Specialist />} />
              <Route path="engineer" element={<Engineer />} />
            </Route>
            <Route path="/technology" element={<Technolohy />}>
              <Route path="launch" element={<Launch />} />
              <Route path="spacesport" element={<Spacespor />} />
              <Route path="capsule" element={<Capsule />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
};
