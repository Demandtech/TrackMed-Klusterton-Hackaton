import React from "react";
import { NavLink } from "react-router-dom";
import { HomeIcon, ProfileIcon } from "../svgs";
import { useAppHomeContext } from "../../hooks";

const MobileAsideNav = () => {
  const { toggleHomeAsideNav, isLandingPageNavOpen } = useAppHomeContext();

  return (
    <div
      onClick={() => toggleHomeAsideNav(false)}
      className={`bg-black/50 backdrop-blur-sm absolute top-0 bottom-0 left-0  overflow-y-auto z-50  ${
        isLandingPageNavOpen ? "max-md:right-0" : ""
      }`}
    >
      <div className="bg-white transition-all duration-300 absolute top-0 bottom-0 left-0 right-1/2">
        <div className="mt-24 px-2">
          <ul className="flex flex-col gap-5">
            <li onClick={() => toggleHomeAsideNav(false)}>
              <NavLink
                to={"."}
                className="flex justify-between p-2.5 active:bg-[#82F4A2]"
              >
                <span className="text-primary80 text-sm">Home</span>
                {/* <HomeIcon /> */}
              </NavLink>
            </li>
            <li onClick={() => toggleHomeAsideNav(false)}>
              <NavLink
                to={"/about"}
                className="flex justify-between p-2.5 active:bg-[#82F4A2]"
              >
                <span className="text-primary80 text-sm">About</span>
                {/* <ProfileIcon /> */}
              </NavLink>
            </li>
            <li onClick={() => toggleHomeAsideNav(false)}>
              <NavLink
                to={"/contact"}
                className="flex justify-between p-2.5 active:bg-[#82F4A2]"
              >
                <span className="text-primary80 text-sm">Contact Us</span>
                {/* <ProfileIcon /> */}
              </NavLink>
            </li>
            <li onClick={() => toggleHomeAsideNav(false)}>
              <NavLink
                to={"/faqs"}
                className="flex justify-between p-2.5 active:bg-[#82F4A2]"
              >
                <span className="text-primary80 text-sm">FAQs</span>
                {/* <ProfileIcon /> */}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileAsideNav;
