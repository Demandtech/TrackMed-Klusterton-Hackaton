import React from "react";
import { MobileMenuIcon } from "../svgs";
import { NavLink } from "react-router-dom";
const MobileNav = () => {
  return (
    <div className="md:hidden">
      {" "}
      <nav className="mt-10 flex justify-between items-center px-2">
        <MobileMenuIcon />
        <div className="flex gap-5">
          <NavLink to="/auth/signup">
            <div className=" border-primary100 border-[3px] rounded-[15px] px-5 py-2 cursor-pointer">
              <p className="text-sm font-bold text-primary100 font-poppins">
                Register
              </p>
            </div>
          </NavLink>

          <NavLink to="/auth/login">
            <div className="border-primary100 border-[3px] bg-primary100  rounded-[15px] px-5 py-2 cursor-pointer ">
              <p className="text-sm font-bold text-slate-600 font-poppins">
                Login
              </p>
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
