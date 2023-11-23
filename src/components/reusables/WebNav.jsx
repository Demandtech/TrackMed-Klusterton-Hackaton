import React from "react";

const WebNav = () => {
  return (
    <div className="max-md:hidden">
      {" "}
      <nav className="mt-10 flex items-center justify-end gap-10 pr-10 max-[768px]:pr-5">
        <ul className="flex gap-10">
          <li className="font-poppins text-white lg:text-xl text-2xl max-[768px]:text-lg font-bold hover:underline cursor-pointer">
            Home
          </li>
          <li className="font-poppins text-white lg:text-xl text-2xl  max-[768px]:text-lg font-normal cursor-pointer">
            About
          </li>
          <li className="font-poppins text-white lg:text-xl text-2xl  max-[768px]:text-lg font-normal cursor-pointer">
            Contact Us
          </li>
          <li className="font-poppins text-white lg:text-xl text-2xl  max-[768px]:text-lg font-normal cursor-pointer">
            FAQs
          </li>
        </ul>
        <div className="flex gap-10 max-[768px]:gap-5">
          {/* <div className=" border-primary100 border-[3px] rounded-[15px] max-[768px]:rounded-[10px] px-16 max-[768px]:px-8 py-2 cursor-pointer m-auto">
            <p className="text-3xl max-[768px]:text-lg font-bold text-primary100 font-poppins">
              Register
            </p>
          </div> */}
          <div className="border-primary100 border-[1.5px] rounded-[15px] max-[768px]:rounded-[10px] px-14 max-[768px]:px-8  py-2 m-auto cursor-pointer">
            <p className="text-2xl max-[768px]:text-lg font-bold text-primary100 font-poppins">
            Register
            </p>
          </div>
          <div className=" bg-primary100 rounded-[15px] border-none max-[768px]:rounded-[10px] px-14 max-[768px]:px-8  py-2 m-auto cursor-pointer">
            <p className="text-2xl max-[768px]:text-lg font-bold text-slate-600 font-poppins">
              Login
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default WebNav;
