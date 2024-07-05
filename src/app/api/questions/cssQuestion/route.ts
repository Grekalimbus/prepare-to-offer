import connetctQuestionMongoDB from "@/libs/mongodb";
import CssQuestionModel from "@/models/questions/cssQuestion";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Question } from "../types/question";

export async function POST(request: NextRequest) {
    const { question, answer }: Question = await request.json();
    await connetctQuestionMongoDB();
    await CssQuestionModel.create({ question, answer });
    return NextResponse.json({ message: "CSS Question Created" }, { status: 201 });
}

export async function GET() {
    await connetctQuestionMongoDB();
    const css: Question[] = await CssQuestionModel.find();
    return NextResponse.json({ css });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    await connetctQuestionMongoDB();
    await CssQuestionModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "CSS Question Deleted" }, { status: 200 });
}
