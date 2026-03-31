import React from "react";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="navbar bg-white">
          <div className="navbar-start">
            <div className="dropdown lg:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost text-xl">
                ☰
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 z-50"
              >
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-linear-to-r from-[#6030F7] to-[#9415FA] bg-clip-text text-transparent">
              DigiTools
            </h1>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-6 xl:gap-8 text-gray-600 font-medium">
              {["Products", "Features", "Pricing", "Testimonials", "FAQ"].map(
                (item) => (
                  <li key={item}>
                    <a className="cursor-pointer hover:text-black hover:underline hover:decoration-[#6030f7]">
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="navbar-end gap-2 sm:gap-3">
            <IoCartOutline className="text-lg sm:text-xl cursor-pointer" />

            <button className="hidden md:block text-gray-600 text-sm font-medium hover:text-black cursor-pointer">
              Login
            </button>

            <button className="px-3 group sm:px-4 md:px-5 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base rounded-full text-white font-medium bg-linear-to-r from-[#6030F7] to-[#9415FA] whitespace-nowrap transition-all duration-400 hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
