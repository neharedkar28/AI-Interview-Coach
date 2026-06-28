import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  model: "gpt-4o-mini",
});

export async function generateQuestions(skill: string) {
  const response = await model.invoke(`
Generate 10 interview questions for ${skill}.

Include:
- Beginner
- Intermediate
- Advanced

Return only questions.
`);

  return response.content;
}