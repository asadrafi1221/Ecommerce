import React, { useState } from "react";

const reviewsData = [
  {
    name: "John Doe",
    image: "client1.jpg",
    review: "Amazing service! Highly recommended.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    image: "client2.jpg",
    review: "The team was very professional and delivered on time.",
    rating: 4,
  },
  {
    name: "Michael Brown",
    image: "client3.jpg",
    review: "Great experience working with them!",
    rating: 5,
  },
  {
    name: "Emily Davis",
    image: "client4.jpg",
    review: "Very satisfied with the results. Will hire again!",
    rating: 4,
  },
  {
    name: "Emily Davis",
    image: "client4.jpg",
    review: "Very satisfied with the results. Will hire again!",
    rating: 4,
  },
];

function ClientReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-8 text-navy">
          Client Reviews
        </h2>
        <div className="relative">
          {/* Carousel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviewsData.map((review, index) => (
              <div
                key={index}
                className={`p-5 rounded-lg shadow-md border transition-transform ${
                  index === currentIndex ? "scale-100" : "scale-90 opacity-50"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={"baba.png"}
                    alt={review.name}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-navy">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {Array(review.rating)
                        .fill("⭐")
                        .join(" ")}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{review.review}</p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-orange text-white p-3 rounded-full shadow-lg hover:bg-orange/80"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-orange text-white p-3 rounded-full shadow-lg hover:bg-orange/80"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClientReviews;
