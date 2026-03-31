import React from "react";
import heroImg from "/banner.png";
import { CiPlay1 } from "react-icons/ci";
import heroBtnICon from "/Hero-btn-icon.png";

const Hero = () => {
  return (
    <div>
      <div className="my-10 md:my-16 px-4">
        <div className="max-w-300 mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14">
          <div className="space-y-4 max-w-full lg:max-w-160 flex flex-col gap-3 lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium">
                <img src={heroBtnICon} alt="icon" className="w-4 h-4" />
                New: AI-Powered Tools Available
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Supercharge Your <br />
              <span className="bg-linear-to-r from-[#6030F7] to-[#9515FA] bg-clip-text text-transparent">
                Digital Workflow
              </span>
            </h1>

            <p className="text-sm md:text-base text-gray-500">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="relative w-full sm:w-auto px-6 py-2.5 rounded-full text-white font-medium text-sm bg-linear-to-r from-[#6030F7] to-[#9515FA] hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                Explore Products
              </button>

              <button
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 rounded-full text-sm font-medium border-2 border-[#7C3AED] text-[#7C3AED]  hover:bg-[#7C3AED] hover:text-white hover:scale-105 hover:shadow-md 
                transition-all duration-300 cursor-pointer"
              >
                <CiPlay1 className="text-lg" />
                Watch Demo
              </button>
            </div>
          </div>

          <div className="w-full max-w-md lg:max-w-xl">
            {heroImg && (
              <img
                src={heroImg}
                alt="Banner Image"
                className="w-full h-auto object-contain"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
