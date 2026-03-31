import React from "react";
import heroImg from "/banner.png";
import { CiPlay1 } from "react-icons/ci";

const Hero = () => {
  return (
    <div>
      <div className="my-10 md:my-16 px-4">
        <div className="max-w-300 mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14">
          <div className="space-y-4 max-w-full lg:max-w-160 text-center lg:text-left">
            <button className="text-xs md:text-sm bg-purple-100 text-purple-700 px-4 py-1 rounded-full">
              New: AI-Powered Tools Available
            </button>

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

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 justify-center lg:justify-start">
              <button className="btn btn-primary w-full sm:w-auto">
                Explore Products
              </button>

              <button className="flex items-center justify-center gap-2.5 btn btn-outline w-full sm:w-auto">
                <CiPlay1 /> Watch Demo
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
