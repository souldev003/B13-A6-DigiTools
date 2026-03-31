import React from "react";

const Footer = () => {
  const socialIcons = [
    { img: "/Instagram.png", alt: "Instagram Logo" },
    { img: "/Facebook.png", alt: "Facebook Logo" },
    { img: "/x.png", alt: "X Logo" },
  ];

  return (
    <div className="bg-[#101727] py-10 md:py-28 px-4">
      <div className="max-w-7xl mx-auto text-white">
        <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h1 className="text-3xl md:text-[40px] font-extrabold mb-4">
              DigiTools
            </h1>
            <p className="text-gray-300">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:col-span-1 lg:col-span-1">
            <div className="space-y-3">
              <h3 className="text-white text-lg font-semibold">Products</h3>
              <h4 className="text-[#CFD1D4]">Features</h4>
              <h4 className="text-[#CFD1D4]">Pricing</h4>
              <h4 className="text-[#CFD1D4]">Templates</h4>
              <h4 className="text-[#CFD1D4]">Integrations</h4>
            </div>

            <div className="space-y-3">
              <h3 className="text-white text-lg font-semibold">Company</h3>
              <h4 className="text-[#CFD1D4]">About</h4>
              <h4 className="text-[#CFD1D4]">Blog</h4>
              <h4 className="text-[#CFD1D4]">Careers</h4>
              <h4 className="text-[#CFD1D4]">Press</h4>
            </div>

            <div className="space-y-3">
              <h3 className="text-white text-lg font-semibold">Resources</h3>
              <h4 className="text-[#CFD1D4]">Documentation</h4>
              <h4 className="text-[#CFD1D4]">Help Center</h4>
              <h4 className="text-[#CFD1D4]">Community</h4>
              <h4 className="text-[#CFD1D4]">Contact</h4>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold">Social Links</h3>
            <div className="flex flex-wrap items-center gap-4 mt-5">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  className="bg-white w-10 h-10 flex items-center justify-center rounded-full"
                  href="#"
                >
                  <img className="w-5" src={icon.img} alt={icon.alt} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-b border-[#3B414E]"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 text-center md:text-left">
          <h6 className="text-[#858890]">
            © 2026 DigiTools. All rights reserved.
          </h6>

          <div className="flex flex-wrap justify-center md:justify-end items-center gap-6">
            <h6 className="text-[#858890]">Privacy Policy</h6>
            <h6 className="text-[#858890]">Terms of Service</h6>
            <h6 className="text-[#858890]">Cookies</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
