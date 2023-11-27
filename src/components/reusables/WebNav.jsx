import React from "react";
import { NavLink } from "react-router-dom";

const WebNav = () => {
  return (
    <div className="max-md:hidden">
      {" "}
      <nav className="mt-10 flex items-center justify-end gap-10 pr-10 max-[768px]:pr-5">
        <ul className="flex gap-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline text-white" : "hover:underline text-white"
            }
          >
            <li
              className={` font-poppins text-white lg:text-xl text-2xl max-[768px]:text-lg font-bold  cursor-pointer`}
            >
              Home
            </li>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "underline text-white" : "hover:underline text-white"
            }
          >
            <li className="font-poppins text-white lg:text-xl text-2xl  max-[768px]:text-lg font-normal cursor-pointer">
              About
            </li>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "underline text-white" : "hover:underline text-white"
            }
          >
            <li className="font-poppins text-white lg:text-xl text-2xl  max-[768px]:text-lg font-normal cursor-pointer">
              Contact Us
            </li>
          </NavLink>
          <NavLink
            to="/faqs"
            className={({ isActive }) =>
              isActive ? "underline text-white" : "hover:underline text-white"
            }
          >
            <li className="font-poppins text-white lg:text-xl text-2xl  max-[768px]:text-lg font-normal cursor-pointer">
              FAQs
            </li>
          </NavLink>
        </ul>
        <div className="flex gap-10 max-[768px]:gap-5">
          <NavLink to="/auth/signup">
            <div className="border-primary100 border-[1.5px] rounded-[15px] max-[768px]:rounded-[10px] px-14 max-[768px]:px-8  py-2 m-auto cursor-pointer">
              <p className="text-2xl max-[768px]:text-lg font-bold text-primary100 font-poppins">
                Register
              </p>
            </div>
          </NavLink>

          <NavLink to="/auth/login">
            <div className=" bg-primary100 rounded-[15px] border-none max-[768px]:rounded-[10px] px-14 max-[768px]:px-8  py-2 m-auto cursor-pointer">
              <p className="text-2xl max-[768px]:text-lg font-bold text-slate-600 font-poppins">
                Login
              </p>
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default WebNav;
