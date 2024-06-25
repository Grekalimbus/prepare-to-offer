import connectMongoDB from "@/libs/mongodb";
import CommonQuestionModel from "@/models/questions/commonQuestion";
import { TQuestion } from "@/types/question";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { question, answer }: TQuestion = await request.json();
    await connectMongoDB();
    await CommonQuestionModel.create({ question, answer });
    return NextResponse.json({ message: "COMMON Question Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const common: TQuestion[] = await CommonQuestionModel.find();
    return NextResponse.json({ common });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    await connectMongoDB();
    await CommonQuestionModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "COMMON Question Deleted" }, { status: 200 });
}
