// app/services/cashless-insurance/page.tsx

import Link from "next/link";

export default function CashlessInsurancePage() {
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
            {Array.from({ length: 13 }).map((_, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 flex justify-center items-center bg-white hover:shadow transition"
              >
                <img
                  src={`/insurance/image${i + 1}.png`}
                  alt="insurance"
                  className="h-16 object-contain"
                />
              </div>
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
            <div className="border rounded-lg p-5">
              <span className="text-red-600 font-bold text-xl">01</span>
              <p className="mt-2 font-medium">BOOKING</p>
            </div>

            <div className="border rounded-lg p-5">
              <span className="text-red-600 font-bold text-xl">02</span>
              <p className="mt-2 font-medium">CLAIM INTIMATION</p>
            </div>

            <div className="border rounded-lg p-5">
              <span className="text-red-600 font-bold text-xl">03</span>
              <p className="mt-2 font-medium">SURVEY (FI)</p>
            </div>

            <div className="border rounded-lg p-5">
              <span className="text-red-600 font-bold text-xl">04</span>
              <p className="mt-2 font-medium">PARTS ORDER</p>
            </div>

            <div className="border rounded-lg p-5">
              <span className="text-red-600 font-bold text-xl">05</span>
              <p className="mt-2 font-medium">DENTING</p>
            </div>

            <div className="border rounded-lg p-5">
              <span className="text-red-600 font-bold text-xl">06</span>
              <p className="mt-2 font-medium">PAINTING</p>
            </div>

            <div className="border rounded-lg p-5">
              <span className="text-red-600 font-bold text-xl">07</span>
              <p className="mt-2 font-medium">FINAL INSPECTION</p>
            </div>

            <div className="border rounded-lg p-5">
              <span className="text-red-600 font-bold text-xl">08</span>
              <p className="mt-2 font-medium">DELIVERY</p>
            </div>
          </div>
        </section>

        {/* BACK BUTTON */}
        <div className="mt-12 text-center">
          <Link
            href="/services/body-denting-painting"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-md"
          >
            Back to Service
          </Link>
        </div>
      </div>
    </main>
  );
}
