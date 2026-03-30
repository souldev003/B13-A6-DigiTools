import React from "react";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="shadow-sm">
      <div className="max-w-300 mx-auto">
        <div className="navbar bg-base-100 flex items-center justify-between">
          <div className="">
            <h1 class="text-3xl p-1 font-bold bg-linear-to-r from-[#7B3FE4] to-[#A020F0] bg-clip-text text-transparent">
              DigiTools
            </h1>
          </div>

          <div className="flex items-center gap-8">
            <a href="#">
              <button className="cursor-pointer font-medium">Products</button>
            </a>
            <a href="#">
              <button className="cursor-pointer font-medium">Feature</button>
            </a>
            <a href="#">
              <button className="cursor-pointer font-medium">Pricing</button>
            </a>
            <a href="#">
              <button className="cursor-pointer font-medium">
                Testimonials
              </button>
            </a>
            <a href="#">
              <button className="cursor-pointer font-medium">FAQ</button>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-lg cursor-pointer btn btn-soft rounded-full">
              <IoCartOutline></IoCartOutline>
            </button>

            <button className="btn btn-ghost ">Login</button>
            <button className="btn btn-primary rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
