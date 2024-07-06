import connectAuthMongoDB from "@/libs/mongodbAuth";
import ArchitectureQuestionModel from "@/models/questions/architectureQuestion";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Question } from "../types/question";

export async function POST(request: NextRequest) {
    const { question, answer, sliceOfCode, links, status }: Question = await request.json();
    await connectAuthMongoDB();
    await ArchitectureQuestionModel.create({ question, answer, sliceOfCode, links, status: status || "PENDING" });
    return NextResponse.json({ message: "Architecture Question Created" }, { status: 201 });
}

export async function GET(request: NextRequest) {
    await connectAuthMongoDB();
    const status = request.nextUrl.searchParams.get("status");
    const architecture: Question[] = await ArchitectureQuestionModel.find({ status });
    return NextResponse.json({ architecture });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    await connectAuthMongoDB();
    await ArchitectureQuestionModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "Architecture Question Deleted" }, { status: 200 });
}
