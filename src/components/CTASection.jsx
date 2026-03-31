import React from "react";

const CTASection = () => {
  return (
    <div className="bg-linear-to-r from-[#6030F7] to-[#9514FA] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-center">
        {/* TEXT */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold mb-4 leading-tight">
            Ready to Transform Your Workflow?
          </h1>

          <p className="text-[#F2E9FE] text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Join thousands of professionals who are already using Digitools to
            work smarter. <br className="hidden sm:block" />
            Start your free trial today.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-5">
          <button className="w-full sm:w-auto bg-white px-6 py-2.5 rounded-full border-2 border-transparent text-[#8B5CF6] font-medium text-sm hover:bg-transparent hover:text-white hover:border-white transition duration-300">
            Explore Products
          </button>

          <button className="w-full sm:w-auto border-2 border-white px-6 py-2.5 rounded-full text-white font-medium text-sm hover:text-[#8B5CF6] hover:bg-white transition duration-300">
            View Pricing
          </button>
        </div>

        <p className="text-xs sm:text-sm text-[#E9D8FD] flex flex-wrap justify-center gap-2">
          <span>14-day free trial</span>
          <span className="hidden sm:inline">●</span>
          <span>No credit card required</span>
          <span className="hidden sm:inline">●</span>
          <span>Cancel anytime</span>
        </p>
      </div>
    </div>
  );
};

export default CTASection;
