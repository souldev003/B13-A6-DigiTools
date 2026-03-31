import React from "react";
import { GoDotFill } from "react-icons/go";

const CTASection = () => {
  return (
    <div className="bg-linear-to-r from-[#6030F7] to-[#9514FA] text-white">
      <div className="text-center max-w-300 mx-auto py-28">
        <div className="mb-10">
          <h1 className="text-[40px] font-extrabold mb-4">
            Ready to Transform Your Workflow?
          </h1>
          <p className="text-[#F2E9FE]">
            Join thousands of professionals who are already using Digitools to
            work smarter. <br /> Start your free trial today.
          </p>
        </div>

        <div>
          <div className="space-x-4 mb-4">
            <button className="bg-white px-6 py-2.5 rounded-full border-2 border-transparent duration-400 text-[#8B5CF6] font-medium text-sm cursor-pointer hover:bg-transparent hover:text-[white] hover:border-2 hover:border-white">
              Explore Products
            </button>
            <button className="border-2 border-white px-6 py-2.5 rounded-full duration-400 text-white font-medium text-sm cursor-pointer hover:text-[#8B5CF6] hover:bg-white">
              View Pricing
            </button>
          </div>
          <p className="text-sm">
            14-day free trial <span className="mx-1"> ● </span> No credit card
            required <span className="mx-1"> ● </span> Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
