import React from "react";
// import { HomeBack, PhoneIcon, SmsIcon } from "../components/svgs";
import WebNav from "../../components/reusables/WebNav";
import HomeBack from "../../components/svgs/HomeBackSvg";
import PhoneIcon from "../../components/svgs/PhoneSvg";
import SmsIcon from "../../components/svgs/SmsSvg";

const Contact = () => {
  return (
    <div className="h-screen w-screen bg-hero bg-cover bg-green-200 bg-center">
      <div className="pt-5">
        <div className="mx-5 block">
          <WebNav />

          <HomeBack />
        </div>
        <div className="px-5 lg:max-w-3xl lg:m-auto">
          <p className="text-deepgreen text-2xl font-poppins font-bold mt-5 mb-10">
            Contact Us
          </p>

          <div className="flex flex-col gap-10 text-white">
            <div className="mb-3 flex items-center gap-8">
              <PhoneIcon />
              <p className="text-[15px] font-poppins font-normal text-center leading-relaxed ">
                +234 905 881 8583
              </p>
            </div>
            <div className="mb-3 flex items-center gap-8">
              <SmsIcon />
              <p className="text-[15px] font-poppins font-normal text-center leading-relaxed ">
                hello@trackmed.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
