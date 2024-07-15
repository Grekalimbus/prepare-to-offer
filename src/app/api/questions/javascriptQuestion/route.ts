import connectAuthMongoDB from "@/backend/libs/mongodbAuth";
import JavascriptQuestionModel from "@/backend/models/questions/javascriptQuestion";
import { Question } from "@/frontend/types/question/question";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { question, answer, sliceOfCode, links, status }: Question = await request.json();
    await connectAuthMongoDB();
    await JavascriptQuestionModel.create({ question, answer, sliceOfCode, links, status: status || "PENDING" });
    return NextResponse.json({ message: "JAVASCRIPT Question Created" }, { status: 201 });
}

export async function GET(request: NextRequest) {
    await connectAuthMongoDB();
    const status = request.nextUrl.searchParams.get("status");
    const javascript: Question[] = await JavascriptQuestionModel.find({ status });
    return NextResponse.json({ javascript });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    await connectAuthMongoDB();
    await JavascriptQuestionModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "JAVASCRIPT Question Deleted" }, { status: 200 });
}
