import connectAuthMongoDB from "@/libs/mongodbAuth";
import CommonQuestionModel from "@/models/questions/commonQuestion";
import { Question } from "@/types/question/question";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { question, answer, sliceOfCode, links, status }: Question = await request.json();
    await connectAuthMongoDB();
    await CommonQuestionModel.create({ question, answer, sliceOfCode, links, status: status || "PENDING" });
    return NextResponse.json({ message: "COMMON Question Created" }, { status: 201 });
}

export async function GET(request: NextRequest) {
    await connectAuthMongoDB();
    const status = request.nextUrl.searchParams.get("status");
    const common: Question[] = await CommonQuestionModel.find({ status });
    return NextResponse.json({ common });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    await connectAuthMongoDB();
    await CommonQuestionModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "COMMON Question Deleted" }, { status: 200 });
}
