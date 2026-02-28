"use client";

import { useEffect, useState } from "react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Review = {
  rating: number;
  text?: {
    text: string;
  };
  authorAttribution?: {
    displayName: string;
    photoUri?: string;
  };
};

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch("/api/google-reviews")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const fiveStar = data.filter((review) => review.rating === 5);
          setReviews(fiveStar.slice(0, 5));
        }
      });
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Google <span className="text-red-600">Reviews</span>
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          navigation={false}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-6 rounded-xl shadow h-full">
                {/* Photo */}

                {/* {review.authorAttribution?.photoUri && (
                  <img
                    src={review.authorAttribution.photoUri}
                    className="w-12 h-12 rounded-full mb-3"
                  />
                )} */}

                {/* Name */}

                <p className="font-semibold">
                  {review.authorAttribution?.displayName}
                </p>

                {/* Stars */}

                <div className="text-yellow-500 mt-1">⭐⭐⭐⭐⭐</div>

                {/* Text */}

                <p className="mt-3 text-gray-700">{review.text?.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
