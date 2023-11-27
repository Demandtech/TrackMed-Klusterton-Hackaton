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
          <div className="border-primary100 border-[1.5px] rounded-[15px] max-[768px]:rounded-[10px] lg:w-[200px] text-center  py-2 m-auto cursor-pointer hover:text-white group hover:bg-primary100 transition-all duration-100">
            <NavLink to="/auth/signup">
              <p className="transition-colors duration-100 text-2xl max-[768px]:text-lg font-bold text-primary100 font-poppins group-hover:text-white">
                Register
              </p>
            </NavLink>
          </div>

          <div className=" bg-primary100 rounded-[15px] max-[768px]:rounded-[10px]  py-2 cursor-pointer lg:w-[200px] text-center group hover:bg-transparent border-primary100 border-2">
            <NavLink to="/auth/login">
              <p className="text-2xl max-[768px]:text-lg font-bold text-slate-600 font-poppins group-hover:text-primary100 transition-colors duration-100">
                Login
              </p>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default WebNav;
