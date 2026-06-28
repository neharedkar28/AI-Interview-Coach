import { NextResponse } from "next/server";
import { generateQuestions } from "@/agents/interview-agent";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { skill } = await req.json();

    const questions = await generateQuestions(skill);

    await prisma.interview.create({
      data: {
        skill,
        questions: String(questions),
      },
    });

    return NextResponse.json({
      questions,
    });
  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      { error: "Failed to generate questions" },
      { status: 500 }
    );
  }
}