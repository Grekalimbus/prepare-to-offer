import connetctQuestionMongoDB from "@/libs/mongodb";
import TypescriptQuestionModel from "@/models/questions/typescriptQuestion";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Question } from "../types/question";

export async function POST(request: NextRequest) {
    const { question, answer }: Question = await request.json();
    await connetctQuestionMongoDB();
    await TypescriptQuestionModel.create({ question, answer });
    return NextResponse.json({ message: "TYPESCRIPT Question Created" }, { status: 201 });
}

export async function GET(request: NextRequest) {
    await connetctQuestionMongoDB();
    const status = request.nextUrl.searchParams.get("status");
    const typescript: Question[] = await TypescriptQuestionModel.find({ status });
    return NextResponse.json({ typescript });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    await connetctQuestionMongoDB();
    await TypescriptQuestionModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "TYPESCRIPT Question Deleted" }, { status: 200 });
}
