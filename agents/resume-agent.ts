import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  modelName: "gpt-4o-mini",
});

export async function analyzeResume(
  resumeText: string
) {
  const response = await model.invoke(`
Analyze this resume.

Give:

1. Resume score out of 100
2. Strong skills
3. Weak areas
4. Improvement suggestions
5. 3 month roadmap
6. Estimated fresher package in India

Resume:

${resumeText}
`);

  return response.content;
}