import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";

const Review = (props) => {
  const { img, name, profession, comment, rating } = props.data;
  return (
    <div className="flex flex-col items-center pb-10 border-4 border-slate-400 rounded-3xl p-6 shadow-lg hover:border-slate-500 hover:shadow-xl hover:rounded-tr-sm">
      <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={img} alt="" />
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {name}
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {profession}
      </span>
      <p>{comment}</p>

      <p>
        Rating : <strong>{rating}</strong>
      </p>
      <Rating
        initialRating={rating}
        emptySymbol={<FontAwesomeIcon icon={faStar} />}
        fullSymbol={
          <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
        }
        readonly
      ></Rating>
    </div>
  );
};

export default Review;
