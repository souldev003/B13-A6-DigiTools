import React from "react";

const Footer = () => {
  const socialIcons = [
    {
      img: "/Instagram.png",
      alt: "Instagram Logo",
    },
    {
      img: "/Facebook.png",
      alt: "Facebook Logo",
    },
    {
      img: "/x.png",
      alt: "x Logo",
    },
  ];

  return (
    <div className="bg-[#101727] py-28">
      <div className="max-w-300 mx-auto text-white">
        <div className="mb-20 grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h1 className="text-[40px] font-extrabold mb-4">DigiTools</h1>
            <p className="text-gray-300">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div className="flex items-center justify-between gap-6">
            <div className="space-y-4">
              <h3 className="text-[#FFFFFF] text-lg">Products</h3>
              <h4 className="text-[#CFD1D4]">Features</h4>
              <h4 className="text-[#CFD1D4]">Pricing</h4>
              <h4 className="text-[#CFD1D4]">Templates</h4>
              <h4 className="text-[#CFD1D4]">Integration</h4>
            </div>
            <div className="space-y-4">
              <h3 className="text-[#FFFFFF] text-lg">Company</h3>
              <h4 className="text-[#CFD1D4]">About</h4>
              <h4 className="text-[#CFD1D4]">Blog</h4>
              <h4 className="text-[#CFD1D4]">Careers</h4>
              <h4 className="text-[#CFD1D4]">Press</h4>
            </div>
            <div className="space-y-4">
              <h3 className="text-[#FFFFFF] text-lg">Resources</h3>
              <h4 className="text-[#CFD1D4]">Documentation</h4>
              <h4 className="text-[#CFD1D4]">Help Center</h4>
              <h4 className="text-[#CFD1D4]">Community</h4>
              <h4 className="text-[#CFD1D4]">Contact</h4>
            </div>
          </div>
          <div>
            <h3 className="text-[#FFFFFF] text-lg">Social Links</h3>
            <div className="flex items-center gap-4 mt-5">
              {socialIcons.map((icon) => (
                <a
                  className="bg-white w-10 flex items-center justify-center p-2.5 rounded-full"
                  href="#"
                >
                  <img className="w-5 bg-white" src={icon.img} alt={icon.alt} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-b border-[#3B414E]"></div>

        <div className="flex items-center justify-between mt-8">
          <div>
            <h6 className="text-[#858890]">
              © 2026 Digitools. All rights reserved.
            </h6>
          </div>
          <div className="flex items-center gap-6">
            <h6 className="text-[#858890] ">Privacy Police</h6>
            <h6 className="text-[#858890] ">Terms Of Service</h6>
            <h6 className="text-[#858890] ">Cookies</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
