import React from "react";

const GetStarted = () => {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started.",
      icon: "/user.png",
    },
    {
      id: "02",
      title: "Choose Products",
      desc: "Browse our catalog and select the tools that fit your needs.",
      icon: "/package.png",
    },
    {
      id: "03",
      title: "Start Creating",
      desc: "Download and start using your premium tools immediately.",
      icon: "/rocket.png",
    },
  ];

  return (
    <div className="py-24 bg-[#F9FAFC] px-4 text-center">
      <div className="mb-16">
        <h2 className="text-5xl font-bold text-[#101727] mb-4">
          Get Started In 3 Steps
        </h2>
        <p className="text-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="card bg-base-100 border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-8 relative items-center cursor-pointer"
          >
            <div className="absolute top-4 bg-linear-to-r from-[#6030F7] to-[#9515FA] right-4 p-3 rounded-full font-bold text-xs text-white">
              {step.id}
            </div>

            <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mb-6">
              <img src={step.icon} alt={step.title} className="w-12 h-12" />
            </div>

            <h3 className="text-xl font-bold mb-3 text-gray-800">
              {step.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStarted;
