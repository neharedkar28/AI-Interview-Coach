"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function InterviewPage() {
  const [skill, setSkill] = useState("");
  const [questions, setQuestions] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = () => {
    if (!skill.trim()) {
      alert("Please enter a skill");
      return;
    }

    setLoading(true);

    const technicalQuestions = `
🚀 ${skill.toUpperCase()} MOCK INTERVIEW QUESTIONS

1. What is ${skill}?
2. What are the key features of ${skill}?
3. Why is ${skill} used in software development?
4. Explain the architecture of ${skill}.
5. What are the advantages of ${skill}?
6. What are the limitations of ${skill}?
7. Explain OOP concepts.
8. What is Encapsulation?
9. What is Inheritance?
10. What is Polymorphism?
11. What is Abstraction?
12. What is a Data Structure?
13. Difference between Array and Linked List.
14. What is a Stack?
15. What is a Queue?
16. What is a Tree Data Structure?
17. What is a Graph?
18. What is Binary Search?
19. What is Time Complexity?
20. What is Space Complexity?
21. Explain Big O Notation.
22. What is a Database?
23. Difference between SQL and NoSQL.
24. What is an API?
25. Difference between Authentication and Authorization?
`;

    setQuestions(technicalQuestions);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="text-center">

          <h1 className="text-6xl font-bold mb-4">
            AI Mock Interview
          </h1>

          <p className="text-slate-400 text-xl">
            Generate Technical Interview Questions Instantly
          </p>

        </div>

        <div className="mt-12 flex gap-4">

          <input
            type="text"
            placeholder="Enter skill (React, Java, Python...)"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            className="flex-1 bg-slate-900 border border-slate-700 rounded-xl p-4 text-white outline-none"
          />

          <button
            onClick={generate}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold"
          >
            {loading ? "Generating..." : "Generate Questions"}
          </button>

        </div>

        {questions && (
          <div className="mt-10 bg-slate-900 border border-slate-700 rounded-2xl p-8">

            <h2 className="text-3xl font-bold mb-6">
              Generated Interview Questions
            </h2>

            <pre className="whitespace-pre-wrap text-slate-200 leading-8">
              {questions}
            </pre>

          </div>
        )}

      </section>
    </main>
  );
}