import connectAuthMongoDB from "@/libs/mongodbAuth";
import ReactQuestionModel from "@/models/questions/reactQuestion";
import { Question } from "@/types/question/question";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { question, answer, sliceOfCode, links, status }: Question = await request.json();
    await connectAuthMongoDB();
    await ReactQuestionModel.create({ question, answer, sliceOfCode, links, status: status || "PENDING" });
    return NextResponse.json({ message: "REACT Question Created" }, { status: 201 });
}

export async function GET(request: NextRequest) {
    await connectAuthMongoDB();
    const status = request.nextUrl.searchParams.get("status");
    const react: Question[] = await ReactQuestionModel.find({ status });
    return NextResponse.json({ react });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    await connectAuthMongoDB();
    await ReactQuestionModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "REACT Question Deleted" }, { status: 200 });
}
