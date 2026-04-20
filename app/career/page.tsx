// app/career/page.tsx

"use client";

import { useState } from "react";

export default function CareerPage() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [post, setPost] = useState("");

  const jobs = [
    "Car Technician",
    "Car Washer",
    "Service Advisor",
    "Detailing Expert",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello,%0AI want to apply for job.%0A%0AName: ${name}%0AMobile: ${mobile}%0APosition: ${post}`;

    const whatsappNumber = "919429805368"; // 👉 CHANGE THIS

    const url = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* HERO */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            We’re Hiring 🚗
          </h1>
          <p className="text-gray-500 mt-4 text-lg">
            Join One Stop Carz and grow your career with us
          </p>
        </div>

        {/* JOB CARDS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {jobs.map((job) => (
            <div
              key={job}
              onClick={() => setPost(job)}
              className={`border rounded-xl p-5 cursor-pointer transition hover:shadow-lg ${
                post === job
                  ? "border-green-600 bg-green-50"
                  : "border-gray-200"
              }`}
            >
              <h3 className="font-semibold text-lg">{job}</h3>
              <p className="text-sm text-gray-500 mt-2">
                Apply now & grow with us
              </p>
            </div>
          ))}
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow space-y-5"
        >
          <h2 className="text-2xl font-semibold text-center mb-4">
            Apply Now
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-100 p-3 rounded-md outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-100 p-3 rounded-md outline-none"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />

          <select
            className="w-full border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-100 p-3 rounded-md outline-none"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            required
          >
            <option value="">Select Position</option>
            {jobs.map((job) => (
              <option key={job} value={job}>
                {job}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition text-white p-3 rounded-md font-semibold shadow-md"
          >
            Apply via WhatsApp
          </button>
        </form>

        {/* WHY JOIN US */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg">
              Growth Opportunity
            </h4>
            <p className="text-sm text-gray-500 mt-2">
              Build your career in the automotive industry
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg">
              Friendly Environment
            </h4>
            <p className="text-sm text-gray-500 mt-2">
              Work with a supportive and professional team
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg">
              Skill Development
            </h4>
            <p className="text-sm text-gray-500 mt-2">
              Improve your technical and practical skills
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}