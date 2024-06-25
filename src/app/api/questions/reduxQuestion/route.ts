import connectMongoDB from "@/libs/mongodb";
import ReduxQuestionModel from "@/models/questions/reduxQuestion";
import { TQuestion } from "@/types/question";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { question, answer }: TQuestion = await request.json();
    await connectMongoDB();
    await ReduxQuestionModel.create({ question, answer });
    return NextResponse.json({ message: "REDUX Question Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const redux: TQuestion[] = await ReduxQuestionModel.find();
    return NextResponse.json({ redux });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    await connectMongoDB();
    await ReduxQuestionModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "REDUX Question Deleted" }, { status: 200 });
}
