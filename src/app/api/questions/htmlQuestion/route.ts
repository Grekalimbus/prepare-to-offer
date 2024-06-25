import connectMongoDB from "@/libs/mongodb";
import HtmlQuestionModel from "@/models/questions/htmlQuestion";
import { TQuestion } from "@/types/question";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { question, answer }: TQuestion = await request.json();
    await connectMongoDB();
    await HtmlQuestionModel.create({ question, answer });
    return NextResponse.json({ message: "HTML Question Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const html: TQuestion[] = await HtmlQuestionModel.find();
    return NextResponse.json({ html });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    await connectMongoDB();
    await HtmlQuestionModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "HTML Question Deleted" }, { status: 200 });
}
