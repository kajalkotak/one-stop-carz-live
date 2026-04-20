// app/services/cashless-insurance/page.tsx

import Link from "next/link";

export default function CashlessInsurancePage() {
  const companies = [
    { name: "Bajaj Allianz", image: "image1.png" },
    { name: "IFFCO Tokio", image: "image2.png" },
    { name: "United India Insurance", image: "image3.png" },
    { name: "National Insurance", image: "image4.png" },
    { name: "Future Generali", image: "image5.png" },
    { name: "Liberty Insurance", image: "image6.png" },
    { name: "Universal Sompo", image: "image7.png" },
    { name: "Chola MS", image: "image8.png" },
    { name: "ICICI Lombard", image: "image9.png" },
    { name: "Go Digit", image: "image10.png" },
    { name: "New India Assurance", image: "image11.png" },
    { name: "HDFC ERGO", image: "image12.png" },
    { name: "TATA AIG", image: "image13.png" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow p-10">
        {/* HEADING */}
        <h1 className="text-4xl font-bold text-center">
          Cashless <span className="text-red-600">Insurance Claim</span>
        </h1>

        <p className="text-center text-gray-600 mt-3">
          We provide hassle-free cashless insurance claim support with all
          leading insurance companies.
        </p>

        {/* LOGOS */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Insurance Companies
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companies.map((company, i) => (
              <Link
                key={i}
                href={`/insurance-claim?company=${encodeURIComponent(company.name)}`}
              >
                <div className="border rounded-lg p-4 flex justify-center items-center bg-white hover:shadow hover:scale-105 transition cursor-pointer">
                  <img
                    src={`/insurance/${company.image}`}
                    alt={company.name}
                    className="h-16 object-contain"
                  />
                </div>
              </Link>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            Note: All company logos are property of respective owners.
          </p>
        </section>

        {/* WHY CHOOSE */}
        <section className="mt-14 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Why Choose One Stop Carz
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold">Cashless Facility</h4>
              <p className="text-gray-600 mt-2">
                Hassle-free insurance claim without upfront payment.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Expert Claim Handling</h4>
              <p className="text-gray-600 mt-2">
                We manage complete claim process for you.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Fast Approval</h4>
              <p className="text-gray-600 mt-2">
                Quick inspection and faster insurance approvals.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Our Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              "BOOKING",
              "CLAIM INTIMATION",
              "SURVEY (FI)",
              "PARTS ORDER",
              "DENTING",
              "PAINTING",
              "FINAL INSPECTION",
              "DELIVERY",
            ].map((step, i) => (
              <div key={i} className="border rounded-lg p-5">
                <span className="text-red-600 font-bold text-xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BACK BUTTON */}
        <div className="mt-12 text-center">
          <Link
            href="/services/body-denting-painting"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition"
          >
            Back to Service
          </Link>
        </div>
      </div>
    </main>
  );
}
