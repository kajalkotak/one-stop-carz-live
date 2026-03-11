// BrandSlider.tsx

"use client";

import Image from "next/image";

const brands = [
  "/insurance/image1.png",
  "/insurance/image2.png",
  "/insurance/image3.png",
  "/insurance/image4.png",
  "/insurance/image5.png",
  "/insurance/image6.png",
  "/insurance/image7.png",
  "/insurance/image8.png",
  "/insurance/image9.png",
  "/insurance/image10.png",
  "/insurance/image11.png",
  "/insurance/image12.png",
  "/insurance/image13.png",
];

export default function BrandSlider() {
  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-10">
          We Care Of All Leading <span className="text-red-600">Brands</span>
        </h2>

        <div className="overflow-hidden relative">
          <div className="flex animate-scroll gap-10">
            {[...brands, ...brands].map((logo, i) => (
              <div key={i} className="flex-shrink-0">
                <Image
                  src={logo}
                  alt="brand"
                  width={140}
                  height={140}
                  className="object-contain  transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
