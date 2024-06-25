import connectMongoDB from "@/libs/mongodb";
import ReactQuestionModel from "@/models/questions/reactQuestion";
import { TQuestion } from "@/types/question";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { question, answer }: TQuestion = await request.json();
    await connectMongoDB();
    await ReactQuestionModel.create({ question, answer });
    return NextResponse.json({ message: "REACT Question Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const react: TQuestion[] = await ReactQuestionModel.find();
    return NextResponse.json({ react });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    await connectMongoDB();
    await ReactQuestionModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "REACT Question Deleted" }, { status: 200 });
}
