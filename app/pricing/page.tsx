import Navbar from "@/components/Navbar";

export default function PricingPage() {
  return (
    <main className="bg-slate-950 min-h-screen text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto py-20">
        <h1 className="text-5xl font-bold text-center mb-12">
          Pricing Plans
        </h1>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-slate-900 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold">Weekly</h2>
            <p className="text-4xl mt-4">₹99</p>
            <p>$1.99</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold">Monthly</h2>
            <p className="text-4xl mt-4">₹299</p>
            <p>$4.99</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold">Yearly</h2>
            <p className="text-4xl mt-4">₹2499</p>
            <p>$29.99</p>
          </div>

          <div className="bg-blue-600 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold">Pro</h2>
            <p className="text-4xl mt-4">₹4999</p>
            <p>$59.99</p>
          </div>

        </div>
      </div>
    </main>
  );
}