import React from "react";
import { Link } from "react-router-dom";
import laptop from "../../assests/images/laptop.jpg";

const Header = () => {
  return (
    <div>
      <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6 bg-slate-200">
        <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
          <div className="max-w-lg md:mx-12 md:order-2">
            <h1 className="text-3xl font-serif font-medium tracking-wide text-gray-800 dark:text-white md:text-6xl">
              Lap<span className=" text-red-400">Pack</span>
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              View the best laptops in the world. Go to the dashboard page to
              see the full details of the laptops. See the Reviews in the
              reviews page. You'll get all things together!
            </p>
            <div className="mt-6">
              <Link
                to="/about"
                className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-96 md:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src={laptop}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
