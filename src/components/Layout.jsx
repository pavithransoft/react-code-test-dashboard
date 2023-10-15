import { useState } from "react";
import { RiSettingsLine } from "react-icons/ri";
import { PiHandWavingLight } from "react-icons/pi";
import { BiSearch } from "react-icons/bi";
import SideMenu from "./SideMenu";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className={`h-screen bg-slate-50 font-nunito grid ${
        isHovered ? "grid-cols-[15%,85%]" : "grid-cols-[7%,93%]"
      }`}
    >
      <div
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-blue-950 text-white grid grid-rows-[12%,75%,13%]"
      >
        <div className="place-self-center flex items-center gap-5">
          <RiSettingsLine className="h-12 w-12" />
          {isHovered && <h1 className="text-xl font-semibold">Dashboard</h1>}
        </div>
        <SideMenu isHovered={isHovered} />
        <div className="px-2">
          <div
            className={`flex items-center gap-3 p-2 rounded-lg place-self-center cursor-pointer ${
              isHovered ? "w-full border" : "w-fit px-6"
            }`}
          >
            <img
              src="https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg"
              width="50"
              height="50"
              alt="user"
              className="h-11 w-11 rounded-full"
            />
            {isHovered && (
              <div className="grid">
                <h1 className="font-semibold">Pavithran</h1>
                <h1 className="text-sm">Frontend Developer</h1>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-rows-[10%,90%]">
        <div className="flex justify-between items-center px-10 gap-0">
          <div className="flex gap-1">
            <h1 className="font-semibold text-lg">Hello Pavithran</h1>
            <PiHandWavingLight className="fill-orange-400 h-7 w-7" />
          </div>
          <div className="relative">
            <BiSearch className="absolute h-6 w-6 top-[0.3rem] left-2 border-r fill-slate-500" />
            <input
              type="search"
              placeholder="search"
              className="pl-10 px-2 py-1 border rounded-lg w-full hover:border-blue-500 outline-none"
            />
          </div>
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default Layout;
