import connectAuthMongoDB from "@/backend/libs/mongodbAuth";
import TypescriptQuestionModel from "@/backend/models/questions/typescriptQuestion";
import { Question } from "@/frontend/types/question/question";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { question, answer, sliceOfCode, links, status }: Question = await request.json();
    await connectAuthMongoDB();
    await TypescriptQuestionModel.create({ question, answer, sliceOfCode, links, status: status || "PENDING" });
    return NextResponse.json({ message: "TYPESCRIPT Question Created" }, { status: 201 });
}

export async function GET(request: NextRequest) {
    await connectAuthMongoDB();
    const status = request.nextUrl.searchParams.get("status");
    const typescript: Question[] = await TypescriptQuestionModel.find({ status });
    return NextResponse.json({ typescript });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    await connectAuthMongoDB();
    await TypescriptQuestionModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "TYPESCRIPT Question Deleted" }, { status: 200 });
}
