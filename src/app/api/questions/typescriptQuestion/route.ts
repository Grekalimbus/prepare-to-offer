import connetctQuestionMongoDB from "@/libs/mongodb";
import TypescriptQuestionModel from "@/models/questions/typescriptQuestion";
import { TQuestion } from "@/types/question";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { question, answer }: TQuestion = await request.json();
    await connetctQuestionMongoDB();
    await TypescriptQuestionModel.create({ question, answer });
    return NextResponse.json({ message: "TYPESCRIPT Question Created" }, { status: 201 });
}

export async function GET() {
    await connetctQuestionMongoDB();
    const typescript: TQuestion[] = await TypescriptQuestionModel.find();
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
