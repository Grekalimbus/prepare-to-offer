import connectMongoDB from "@/libs/mongodb";
import ArchitectureQuestionModel from "@/models/questions/architectureQuestion";
import { TQuestion } from "@/types/question";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { question, answer }: TQuestion = await request.json();
    await connectMongoDB();
    await ArchitectureQuestionModel.create({ question, answer });
    return NextResponse.json({ message: "Architecture Question Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const architecture: TQuestion[] = await ArchitectureQuestionModel.find();
    return NextResponse.json({ architecture });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    await connectMongoDB();
    await ArchitectureQuestionModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "Architecture Question Deleted" }, { status: 200 });
}
