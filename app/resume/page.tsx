"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function ResumePage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

const analyzeResume = () => {
  if (!file) {
    alert("Please upload resume first");
    return;
  }

  setResult({
    score: 78,
    level: "Good",
    packageRange: "₹8–12 LPA",

    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "MongoDB"
    ],

    improvements: [
      "Improve DSA",
      "Build More Projects",
      "Improve Communication",
      "Practice Mock Interviews"
    ]
  });
};

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-16">

        <h1 className="text-6xl font-bold mb-12 text-center">
          Resume Analyzer
        </h1>

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => {
            if (e.target.files?.[0]) {
              setFile(e.target.files[0]);
            }
          }}
        />

        <button
          onClick={analyzeResume}
          className="bg-blue-600 px-6 py-3 rounded-xl mt-4"
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>

        {result && (

<div className="mt-8 bg-slate-900 p-6 rounded-xl">

<h2 className="text-3xl font-bold mb-4">
Resume Analysis
</h2>

<p>
<strong>Score:</strong> {result.score}/100
</p>

<p>
<strong>Level:</strong> {result.level}
</p>

<p>
<strong>Expected Package:</strong> {result.packageRange}
</p>

<h3 className="mt-5 font-bold">
Skills
</h3>

<ul className="list-disc ml-6">

{result.skills.map((skill:string)=>(
<li key={skill}>{skill}</li>
))}

</ul>

<h3 className="mt-5 font-bold">
Improvements
</h3>

<ul className="list-disc ml-6">

{result.improvements.map((item:string)=>(
<li key={item}>{item}</li>
))}

</ul>

</div>

)}
      </div>
    </main>
  );
}