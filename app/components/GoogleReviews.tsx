// app/components/GoogleReviews.tsx

"use client";

import { useEffect, useState } from "react";

export default function GoogleReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/api/google-reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          Google <span className="text-red-600">Reviews</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {reviews.map((review: any, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              ⭐⭐⭐⭐⭐
              <p className="mt-3">{review.text}</p>
              <p className="mt-4 font-semibold">— {review.author_name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
