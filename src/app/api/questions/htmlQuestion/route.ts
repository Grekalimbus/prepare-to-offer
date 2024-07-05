import connetctQuestionMongoDB from "@/libs/mongodb";
import HtmlQuestionModel from "@/models/questions/htmlQuestion";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Question } from "../types/question";

export async function POST(request: NextRequest) {
    const { question, answer }: Question = await request.json();
    await connetctQuestionMongoDB();
    await HtmlQuestionModel.create({ question, answer });
    return NextResponse.json({ message: "HTML Question Created" }, { status: 201 });
}

export async function GET() {
    await connetctQuestionMongoDB();
    const html: Question[] = await HtmlQuestionModel.find();
    return NextResponse.json({ html });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    await connetctQuestionMongoDB();
    await HtmlQuestionModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "HTML Question Deleted" }, { status: 200 });
}
