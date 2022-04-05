import React from "react";
import useReviews from "../../assests/hooks/useReviews";
import Review from "../Review/Review";
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
          <Review key={data.id} data={data}></Review>
        ))}
      </div>{" "}
    </div>
  );
};

export default Reviews;
