import React from "react";
import WebNav from "../../components/reusables/WebNav" 
import HomeBack from "../../components/svgs/HomeBackSvg" 
const About = () => {
  return (
    <div className="h-screen w-screen bg-hero bg-cover bg-green-200 bg-center">
      <div className="pt-5">
        <div className="mx-5 block">
        <WebNav/>

          <HomeBack/>
        </div>
        <div className="px-5 lg:max-w-3xl lg:m-auto">
          <p className="text-deepgreen text-2xl font-poppins font-bold my-5">
            About TrackMed
          </p>
          <p className="text-[15px] font-poppins font-normal text-center leading-relaxed mb-3 text-white">
            Welcome to TrackMed, where we believe in the power of technology to
            enhance healthcare and improve lives. At TrackMed, our mission is
            simple yet profound: to empower individuals in managing their health
            through timely medication adherence.
          </p>
          <p className="text-[15px] font-poppins font-normal text-center leading-relaxed mb-3 text-white">
            With the fast-paced nature of modern life, it&apos;s easy to forget
            important aspects of self-care. That&apos;s why we&apos;ve developed
            TrackMed, a user-friendly mobile app designed to ensure that you
            never miss a dose of your medications. We understand the critical
            role medication plays in your well-being, and our app is here to
            support you every step of the way.
          </p>
          <p className="text-[15px] font-poppins font-normal text-center leading-relaxed mb-3 text-white">
            What sets TrackMed apart is its intuitive interface for scheduling
            medication reminders, customizable notifications, and a
            comprehensive medication information database. We&apos;re not just
            an app; we&apos;re your personal health companion. Whether
            you&apos;re managing a chronic condition or simply aiming for a
            healthier lifestyle, TrackMed is here to make your health journey
            more seamless and connected.
          </p>
          <p className="text-[15px] font-poppins font-normal text-center leading-relaxed pb-2 text-white">
            Join us on this mission towards better health outcomes. TrackMed -
            because your well-being matters every moment of every day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
