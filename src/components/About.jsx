import React from "react";

const About = () => {
  return (
    <div>
      <div className="bg-linear-to-r from-[#6030F7] to-[#9515FA]">
        <div className="max-w-300 mx-auto flex flex-col md:flex-row text-white py-12 divide-y md:divide-y-0 md:divide-x divide-white/40">
          <div className="flex-1 text-center py-6">
            <h2 className="text-3xl md:text-5xl font-bold">50K+</h2>
            <p className="mt-2 opacity-80 text-sm md:text-base">Active Users</p>
          </div>

          <div className="flex-1 text-center py-6">
            <h2 className="text-3xl md:text-5xl font-bold">200+</h2>
            <p className="mt-2 opacity-80 text-sm md:text-base">
              Premium Tools
            </p>
          </div>

          <div className="flex-1 text-center py-6">
            <h2 className="text-3xl md:text-5xl font-bold">4.9</h2>
            <p className="mt-2 opacity-80 text-sm md:text-base">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
