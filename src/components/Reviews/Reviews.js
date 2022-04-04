import React from "react";
import useReviews from "../../assests/hooks/useReviews";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Reviews = () => {
  const [review, setReview] = useReviews();
  return (
    <div>
      <div className="mt-6">
        <h1 className="text-center text-4xl">Our User Reviews</h1>
        <hr className="container mx-auto w-1/3 my-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 container gap-4 mx-auto ">
        {review.map((data) => (
          <div
            className="flex flex-col items-center pb-10 border-4 rounded-lg p-6"
            key={data.id}
          >
            <img
              className="mb-3 w-24 h-24 rounded-full shadow-lg"
              src={data.img}
              alt=""
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {data.name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {data.profession}
            </span>
            <p>{data.comment}</p>

            <p>
              Rating : <strong>{data.rating}</strong>
            </p>
            <Rating
              initialRating={data.rating}
              emptySymbol={<FontAwesomeIcon icon={faStar} />}
              fullSymbol={
                <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
              }
              readonly
            ></Rating>
          </div>
        ))}
      </div>{" "}
    </div>
  );
};

export default Reviews;
