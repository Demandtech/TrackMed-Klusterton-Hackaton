import React from "react";
import { HomeBack } from "../components/svgs";
import { WebNav } from "../components/reusables";

const Faq = () => {
  return (
    <div className="md:h-screen w-screen bg-hero bg-cover bg-green-200 bg-center">
      <div className="pt-5">
        <div className="mx-5 block">
          <WebNav />

          <HomeBack />
        </div>
        <div className="px-5">
          <p className="text-deepgreen text-2xl font-poppins font-bold my-5 lg:text-center">
            Frequently Asked Questions
          </p>
          <div className="lg:max-w-xl m-auto">
            <div className="mb-3 text-white">
              <p className="text-[15px] font-poppins font-normal  leading-relaxed mb-3 ">
                Q: How do I add a new medication to TrackMed?
              </p>
              <div className="flex gap-2">
                <p className="text-center">.</p>
                <p className="text-white">A:</p>
                <p className="text-[15px] font-poppins font-normal leading-relaxed mb-3">
                  Adding a new medication to TrackMed is easy! Simply open the
                  website, go to the &ldquo;Medical Details&ldquo; tab. From
                  there, you can enter the medication name, dosage, and set the
                  schedule for reminders. If you need a hand, our step-by-step
                  guide in the app will walk you through the process.
                </p>
              </div>
            </div>
            <div className="mb-3 text-white">
              <p className="text-[15px] font-poppins font-normal  leading-relaxed mb-3">
                Q: Can I receive reminders on multiple devices?
              </p>
              <div className="flex gap-2">
                <p className="text-center">.</p>
                <p>A:</p>
                <p className="text-[15px] font-poppins font-normal leading-relaxed mb-3">
                  Yes, you can receive reminders on multiple devices. TrackMed
                  is designed to sync your medication data across all your
                  devices. Make sure you are logged in with the same account on
                  each device, and your reminders will stay consistent,
                  providing you with the flexibility to manage your medications
                  seamlessly.
                </p>
              </div>
            </div>
            <div className="mb-3 text-white">
              <p className="text-[15px] font-poppins font-normal  leading-relaxed mb-3">
                Q: What happens if I miss a dose?
              </p>
              <div className="flex gap-2">
                <p className="text-center">.</p>
                <p>A:</p>
                <p className="text-[15px] font-poppins font-normal leading-relaxed mb-3">
                  A: If you miss a dose, don&lsquo;t worry! TrackMed allows you
                  to log when you&lsquo;ve taken a medication outside the
                  scheduled time. Also, we would remind you after 5 minutes.
                  Remember, it&lsquo;s important to follow your healthcare
                  provider&lsquo;s advice, and if you have concerns about missed
                  doses, consult with them for guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
