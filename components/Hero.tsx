import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6">

      <div className="max-w-5xl text-center">

        <div className="inline-flex px-4 py-2 rounded-full bg-blue-500/20 text-blue-300">
          AI Powered Interview Preparation
        </div>

        <h1 className="text-7xl font-extrabold text-white mt-8">
          Ace Your Next Interview
          <br />
          With AI Coaching
        </h1>

        <p className="text-slate-400 text-xl mt-8 max-w-3xl mx-auto">
          Practice technical interviews, HR rounds,
          behavioral questions and receive instant
          AI feedback with personalized improvement tips.
        </p>

        <div className="flex gap-4 justify-center mt-10">

          <Link
            href="/interview"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-white font-semibold"
          >
            Start Mock Interview
          </Link>

          <Link
            href="/resume"
            className="border border-slate-700 px-8 py-4 rounded-xl text-white"
          >
            Upload Resume
          </Link>

        </div>

      </div>

    </section>
  );
}