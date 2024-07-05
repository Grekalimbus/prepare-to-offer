import connetctQuestionMongoDB from "@/libs/mongodb";
import ArchitectureQuestionModel from "@/models/questions/architectureQuestion";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Question } from "../types/question";

export async function POST(request: NextRequest) {
    const { question, answer }: Question = await request.json();
    await connetctQuestionMongoDB();
    await ArchitectureQuestionModel.create({ question, answer });
    return NextResponse.json({ message: "Architecture Question Created" }, { status: 201 });
}

export async function GET() {
    await connetctQuestionMongoDB();
    const architecture: Question[] = await ArchitectureQuestionModel.find();
    return NextResponse.json({ architecture });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    await connetctQuestionMongoDB();
    await ArchitectureQuestionModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "Architecture Question Deleted" }, { status: 200 });
}
