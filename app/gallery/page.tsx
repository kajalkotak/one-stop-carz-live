// app/gallery/page.tsx

import Image from "next/image";

const galleryImages = [
  "/gallery/IMG_3599.jpg",
  "/gallery/IMG_3600.jpg",
  "/gallery/IMG_3601.jpg",
  "/gallery/IMG_3602.jpg",
  "/gallery/IMG_3603.jpg",
  "/gallery/IMG_3604.jpg",
  "/gallery/IMG_3605.jpg",
  "/gallery/IMG_3606.jpg",
  "/gallery/IMG_3607.jpg",
  "/gallery/IMG_3608.jpg",
  "/gallery/IMG_3609.jpg",
  "/gallery/IMG_3610.jpg",
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      {/* HEADER */}

      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold">
          Our <span className="text-red-600">Gallery</span>
        </h1>

        <p className="mt-4 text-gray-600">
          Explore our recent work and service moments.
        </p>
      </div>

      {/* GRID */}

      <div className="max-w-7xl mx-auto mt-14 grid md:grid-cols-3 gap-8">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
          >
            <Image
              src={src}
              alt="Gallery Image"
              width={500}
              height={400}
              className="w-full h-[300px] object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
