import connectMongoDB from "@/libs/mongodb";
import JavascriptQuestionModel from "@/models/questions/javascriptQuestion";
import { TQuestion } from "@/types/question";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { question, answer }: TQuestion = await request.json();
    await connectMongoDB();
    await JavascriptQuestionModel.create({ question, answer });
    return NextResponse.json({ message: "JAVASCRIPT Question Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const javascript: TQuestion[] = await JavascriptQuestionModel.find();
    return NextResponse.json({ javascript });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    await connectMongoDB();
    await JavascriptQuestionModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "JAVASCRIPT Question Deleted" }, { status: 200 });
}
