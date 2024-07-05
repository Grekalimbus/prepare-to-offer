import connetctQuestionMongoDB from "@/libs/mongodb";
import ReactQuestionModel from "@/models/questions/reactQuestion";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Question } from "../types/question";

export async function POST(request: NextRequest) {
    const { question, answer }: Question = await request.json();
    await connetctQuestionMongoDB();
    await ReactQuestionModel.create({ question, answer });
    return NextResponse.json({ message: "REACT Question Created" }, { status: 201 });
}

export async function GET() {
    await connetctQuestionMongoDB();
    const react: Question[] = await ReactQuestionModel.find();
    return NextResponse.json({ react });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    await connetctQuestionMongoDB();
    await ReactQuestionModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "REACT Question Deleted" }, { status: 200 });
}
