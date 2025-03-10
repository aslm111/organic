import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { reviews } from "../../assets/data/reviewData";

const ProductReviews = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [hover, setHover] = useState(0);
 

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, review) => sum + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : 0;

  const ratingDistribution = [
    { stars: 5, percentage: 50 },
    { stars: 4, percentage: 10 },
    { stars: 3, percentage: 20 },
    { stars: 2, percentage: 10 },
    { stars: 1, percentage: 10 },
  ];
//    const renderStars = (rating) => {
//      return (
//        <div className="flex">
//          {[...Array(5)].map((_, i) => (
//            <span key={i}>
//              {i < rating ? (
//                <FaStar className="text-yellow-400" />
//              ) : (
//                <FaRegStar className="text-gray-300" />
//              )}
//            </span>
//          ))}
//        </div>
//      );
//    };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRating(0);
    setReview("");
  };

  return (
    <div className=" mx-auto p-4 ">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* average rating */}
        <div className="bg-lightGreen p-4 rounded-lg w-full md:w-96">
          <div className="text-4xl font-bold text-center">{averageRating}</div>
          <div className="text-sm text-center text-gray-600 mb-4">
            Based on {reviews.length} reviews
          </div>

      
          <div className="space-y-2">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-2">
                <div className="text-xs w-6  flex items-center">
                  <span>{item.stars}</span>
                  <FaStar className="text-yellow-400 text-xs ml-0.5" />
                </div>
                <div className="w-full bg-grey rounded-full h-2">
                  <div
                    className="bg-gray-400 h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <div className="text-xs w-8">{item.percentage}%</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          {reviews.map((review) => (
            <div key={review.id} className="mb-4 pb-4 border-b border-gray-100">
              <div className="flex justify-between mb-1">
                <div className="font-medium">{review.author}</div>
                <div className="text-sm text-gray-500">{review.date}</div>
              </div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    {i < review.rating ? (
                      <FaStar className="text-yellow-400" />
                    ) : (
                      <FaRegStar className="text-grey" />
                    )}
                  </span>
                ))}
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}

       
          <div className="text-center mt-4">
            <button className="bg-darkGreen text-white py-2 px-6 rounded-full text-sm">
              View All ({reviews.length})
            </button>
          </div>
        </div>
      </div>

      {/* write review */}
      <div className="bg-lightGreen p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4">Write a Review</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm mb-2">Your Rating</label>
            <div className="flex">
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;

                return (
                  <div
                    key={index}
                    className="cursor-pointer p-1 text-2xl"
                    onClick={() => setRating(ratingValue)}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(0)}
                  >
                    {ratingValue <= (hover || rating) ? (
                      <FaStar className="text-yellow-400" />
                    ) : (
                      <FaRegStar className="text-gray-400" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-2">Your Review</label>
            <textarea
              className="w-full p-2 border bg-white border-gray-400 rounded h-32"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>

          <div className="">
            <button
              type="submit"
              className="bg-darkGreen text-white py-2 px-6 rounded-full text-sm"
              disabled={rating === 0}
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductReviews;
