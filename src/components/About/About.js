import React from "react";
import logo from "../../assests/images/logo.png";

const About = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800 container mx-auto">
      <img src={logo} className="mx-auto my-4" alt="" />
      <h1 className="text-center text-4xl font-serif">LapPack</h1>
      <p className="w-2/4 mx-auto mt-8 font-sans">
        LapPack is a website to show you the details about the latest laptops on
        the market. You can easily find the data about the laptops on the
        dashboard section of the website. We dont show ads bcz we care about
        your satisfaction :D
      </p>
    </div>
  );
};

export default About;
