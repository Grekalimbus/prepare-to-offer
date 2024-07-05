import connetctQuestionMongoDB from "@/libs/mongodb";
import ReduxQuestionModel from "@/models/questions/reduxQuestion";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Question } from "../types/question";

export async function POST(request: NextRequest) {
    const { question, answer }: Question = await request.json();
    await connetctQuestionMongoDB();
    await ReduxQuestionModel.create({ question, answer });
    return NextResponse.json({ message: "REDUX Question Created" }, { status: 201 });
}

export async function GET() {
    await connetctQuestionMongoDB();
    const redux: Question[] = await ReduxQuestionModel.find();
    return NextResponse.json({ redux });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    await connetctQuestionMongoDB();
    await ReduxQuestionModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "REDUX Question Deleted" }, { status: 200 });
}
