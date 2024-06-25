import connectMongoDB from "@/libs/mongodb";
import CssQuestionModel from "@/models/questions/cssQuestion";
import { TQuestion } from "@/types/question";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { question, answer }: TQuestion = await request.json();
    await connectMongoDB();
    await CssQuestionModel.create({ question, answer });
    return NextResponse.json({ message: "CSS Question Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const css: TQuestion[] = await CssQuestionModel.find();
    return NextResponse.json({ css });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    await connectMongoDB();
    await CssQuestionModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "CSS Question Deleted" }, { status: 200 });
}
