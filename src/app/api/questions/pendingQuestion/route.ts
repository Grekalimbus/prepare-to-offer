import connectAuthMongoDB from "@/backend/libs/mongodbAuth";
import PendingQuestionQuestionModel from "@/backend/models/questions/pendingQuestions/pendingQuestions";
import { Question } from "@/frontend/types/question/question";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { question, answer, sliceOfCode, links, technology }: Question = await request.json();
    await connectAuthMongoDB();
    await PendingQuestionQuestionModel.create({ question, answer, sliceOfCode, links, status: "PENDING", technology });
    return NextResponse.json({ message: "Question Created" }, { status: 201 });
}

export async function GET() {
    await connectAuthMongoDB();
    const pendingQuestions: Question[] = await PendingQuestionQuestionModel.find();
    return NextResponse.json({ pendingQuestions });
}
