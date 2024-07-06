import connectAuthMongoDB from "@/libs/mongodbAuth";
import PendingQuestionQuestionModel from "@/models/questions/pendingQuestions/pendingQuestions";
import { Question } from "@/types/question/question";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { question, answer, sliceOfCode, links, technology }: Question = await request.json();
    await connectAuthMongoDB();
    await PendingQuestionQuestionModel.create({ question, answer, sliceOfCode, links, status: "PENDING", technology });
    return NextResponse.json({ message: "Question Created" }, { status: 201 });
}
