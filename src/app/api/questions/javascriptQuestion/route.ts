import connetctQuestionMongoDB from "@/libs/mongodb";
import JavascriptQuestionModel from "@/models/questions/javascriptQuestion";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Question } from "../types/question";

export async function POST(request: NextRequest) {
    const { question, answer }: Question = await request.json();
    await connetctQuestionMongoDB();
    await JavascriptQuestionModel.create({ question, answer });
    return NextResponse.json({ message: "JAVASCRIPT Question Created" }, { status: 201 });
}

export async function GET() {
    await connetctQuestionMongoDB();
    const javascript: Question[] = await JavascriptQuestionModel.find();
    return NextResponse.json({ javascript });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    await connetctQuestionMongoDB();
    await JavascriptQuestionModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "JAVASCRIPT Question Deleted" }, { status: 200 });
}
