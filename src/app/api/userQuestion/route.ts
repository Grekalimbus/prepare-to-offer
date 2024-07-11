import connetctAuthMongoDB from "@/libs/mongodbAuth";
import User from "@/models/auth/user";
import { NextResponse, type NextRequest } from "next/server";
import { v4 as uuidv4 } from "uuid";

type Question = {
    question: string;
    answer: string;
    sliceOfCode: string;
    technology: string;
    links: string[] | [];
};
type User = {
    email: string;
    question: Question;
};

export async function PATCH(req: NextRequest) {
    await connetctAuthMongoDB();
    const { email, question }: User = await req.json();

    const candidate = await User.findOne({ email });
    if (candidate) {
        const uniqueQuestion = {
            ...question,
            _id: uuidv4(),
        };
        const updateField = `questions.${question.technology}`;
        await User.updateOne({ email }, { $push: { [updateField]: uniqueQuestion } });
        return NextResponse.json({ message: "UserQuestion UPDATED" }, { status: 201 });
    } else {
        return NextResponse.json({ message: "User Not Found" }, { status: 404 });
    }
}
