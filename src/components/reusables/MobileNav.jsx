import React from "react";
import { MenuIcon } from "../svgs";

const MobileNav = () => {
  const mobileNavOpen = false;
  return (
    <div className="md:hidden">
      {" "}
      <nav className="mt-10 flex justify-between items-center px-2">
        <MenuIcon />
        <div className="flex gap-5">
          <div className=" border-primary100 border-[3px] rounded-[15px] px-5 py-2 cursor-pointer m-auto">
            <p className="text-sm font-bold text-primary100 font-poppins">
              Register
            </p>
          </div>
          <div className=" bg-primary100  rounded-[15px] px-5 py-2 cursor-pointer m-auto">
            <p className="text-sm font-bold text-slate-600 font-poppins">
              Login
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
