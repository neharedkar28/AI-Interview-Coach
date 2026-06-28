export default function Features() {
  const features = [
    {
      title: "AI Interview Questions",
      description:
        "Generate technical, HR and behavioral interview questions instantly.",
    },
    {
      title: "Resume Analysis",
      description:
        "Upload your resume and extract skills automatically.",
    },
    {
      title: "Interview Scoring",
      description:
        "Get detailed scores and performance analysis.",
    },
    {
      title: "AI Feedback",
      description:
        "Receive improvement suggestions after every interview.",
    },
    {
      title: "Progress Tracking",
      description:
        "Track interview performance and growth over time.",
    },
    {
      title: "Mock Interviews",
      description:
        "Practice company-specific and role-specific interviews.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-24 px-6">

      <h2 className="text-5xl font-bold text-center text-white">
        Powerful Features
      </h2>

      <p className="text-center text-slate-300 mt-4">
        Everything you need to prepare for interviews.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-16">

        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white">
              {feature.title}
            </h3>

            <p className="text-slate-300 mt-4">
              {feature.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}