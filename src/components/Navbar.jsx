import React from "react";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="shadow-sm">
      <div className="max-w-300 mx-auto">
        <div className="navbar bg-white px-4">
          <div className="navbar-start gap-2">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                ☰
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Products</a>
                </li>
                <li>
                  <a>Features</a>
                </li>
                <li>
                  <a>Pricing</a>
                </li>
                <li>
                  <a>Testimonials</a>
                </li>
                <li>
                  <a>FAQ</a>
                </li>
              </ul>
            </div>

            <h1 className="cursor-pointer text-3xl font-bold bg-linear-to-r from-[#6030F7] to-[#9415FA] bg-clip-text text-transparent">
              DigiTools
            </h1>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-8 text-gray-600 font-medium">
              <li>
                <a className="cursor-pointer hover:text-black hover:underline hover:decoration-[#6030f7] hover:decoration-2">
                  Products
                </a>
              </li>
              <li>
                <a className="cursor-pointer hover:text-black hover:underline hover:decoration-[#6030f7] hover:decoration-2">
                  Features
                </a>
              </li>
              <li>
                <a className="cursor-pointer hover:text-black hover:underline hover:decoration-[#6030f7] hover:decoration-2">
                  Pricing
                </a>
              </li>
              <li>
                <a className="cursor-pointer hover:text-black hover:underline hover:decoration-[#6030f7] hover:decoration-2">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="cursor-pointer hover:text-black hover:underline hover:decoration-[#6030f7] hover:decoration-2">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar-end gap-4">
            <IoCartOutline className="text-xl cursor-pointer" />

            <button className="text-gray-600 font-medium hover:text-black cursor-pointer">
              Login
            </button>

            <button className="px-5 py-2 rounded-full text-white font-medium bg-linear-to-r from-[#6030F7] to-[#9415FA] cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
