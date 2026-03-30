import React from "react";

const About = () => {
  return (
    <div>
      <div className="bg-linear-to-r from-[#6030F7] to-[#9515FA] ">
        <div className="container mx-auto flex justify-evenly text-white py-12 divide-x-2 divide-white/40">
          <div className="flex-1 text-center">
            <h2 className="text-5xl font-bold">50K+</h2>
            <p className="mt-2 opacity-80">Active Users</p>
          </div>

          <div className="flex-1 text-center">
            <h2 className="text-5xl font-bold">200+</h2>
            <p className="mt-2 opacity-80">Premium Tools</p>
          </div>

          <div className="flex-1 text-center">
            <h2 className="text-5xl font-bold">4.9</h2>
            <p className="mt-2 opacity-80">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
