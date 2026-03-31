import React from "react";
import heroImg from "/banner.png";
import { CiPlay1 } from "react-icons/ci";

const Hero = () => {
  return (
    <div>
      <div className="my-16">
        <div className="max-w-300 mx-auto flex items-center justify-between gap-14">
          <div className="space-y-4 max-w-160">
            <button>New: AI-Powered Tools Available</button>

            <h1 className="text-[72px]">
              Supercharge Your <br /> <span> Digital Workflow </span>
            </h1>

            <p>
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>

            <div className="flex text-center gap-5">
              <button className="btn btn-primary">Explore Products</button>
              <button className="flex items-center gap-2.5 btn btn-primary">
                <CiPlay1 /> Watch Demo
              </button>
            </div>
          </div>

          <div>
            <img src={heroImg} alt="Banner Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
