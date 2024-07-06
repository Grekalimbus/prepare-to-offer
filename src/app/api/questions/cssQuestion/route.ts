import connectAuthMongoDB from "@/libs/mongodbAuth";
import CssQuestionModel from "@/models/questions/cssQuestion";
import { Question } from "@/types/question/question";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { question, answer, sliceOfCode, links, status }: Question = await request.json();
    await connectAuthMongoDB();
    await CssQuestionModel.create({ question, answer, sliceOfCode, links, status: status || "PENDING" });
    return NextResponse.json({ message: "CSS Question Created" }, { status: 201 });
}

export async function GET(request: NextRequest) {
    await connectAuthMongoDB();
    const status = request.nextUrl.searchParams.get("status");
    const css: Question[] = await CssQuestionModel.find({ status });
    return NextResponse.json({ css });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    await connectAuthMongoDB();
    await CssQuestionModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "CSS Question Deleted" }, { status: 200 });
}
