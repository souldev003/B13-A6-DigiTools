import React from "react";

const plans = [
  {
    name: "Starter",
    desc: "Perfect for getting started",
    price: 0,
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    buttonText: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    desc: "Best for professionals",
    price: 29,
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    buttonText: "Start Pro Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    desc: "For teams and businesses",
    price: 99,
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    buttonText: "Contact Sales",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-300 mx-auto text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-500 mt-3">
          Choose the plan that fits your needs.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 text-left relative cursor-pointer ${
                plan.highlighted
                  ? "bg-linear-to-r from-[#6030F7] to-[#9415FA] text-white"
                  : "bg-white shadow"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-300 text-xs px-3 py-1 rounded-full text-black">
                  Most Popular
                </span>
              )}

              <h2 className="text-xl font-semibold">{plan.name}</h2>
              <p className="text-sm opacity-80">{plan.desc}</p>

              <h1 className="text-3xl font-bold mt-4">
                ${plan.price}
                <span className="text-base"> /Month</span>
              </h1>

              <ul className="mt-4 space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>

              <button
                className={`mt-6 w-full py-2 rounded-full font-medium ${
                  plan.highlighted
                    ? "bg-white text-purple-600"
                    : "text-white bg-linear-to-r from-[#6030F7] to-[#9415FA]"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
