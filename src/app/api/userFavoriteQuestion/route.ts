import connetctAuthMongoDB from "@/libs/mongodbAuth";
import User from "@/models/auth/user";
import { NextResponse, type NextRequest } from "next/server";

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
    console.log("favoriteQuestion", question);
    const candidate = await User.findOne({ email });
    if (candidate) {
        await User.updateOne({ email }, { favoriteQuestions: [...candidate.favoriteQuestions, question] });
        return NextResponse.json({ message: "User Favorite Questions UPDATED" }, { status: 201 });
    } else {
        return NextResponse.json({ message: "User Not Found" }, { status: 404 });
    }
}
