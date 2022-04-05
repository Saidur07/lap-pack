import React from "react";
import { useNavigate } from "react-router-dom";
import laptop from "../../assests/images/laptop.jpg";
import useReviews from "../../assests/hooks/useReviews";
import Review from "../Review/Review";

const Header = () => {
  const navigate = useNavigate();
  const [review, setReview] = useReviews();
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
              <button
                onClick={() => navigate("/about")}
                className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-600 active:rounded-lg active:shadow-lg "
              >
                Learn More
              </button>
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
      <div className="mt-6">
        <h1 className="text-center text-4xl">Our User Reviews</h1>
        <hr className="container mx-auto w-1/3 my-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 container gap-4 mx-auto ">
        {review.slice(0, 3).map((data) => (
          <Review key={data.id} data={data}></Review>
        ))}
      </div>
      <div className="mt-4 grid place-items-center">
        <button
          onClick={() => navigate("/reviews")}
          className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-600 active:rounded-lg active:shadow-lg w-64"
        >
          See all
        </button>
      </div>
    </div>
  );
};

export default Header;
