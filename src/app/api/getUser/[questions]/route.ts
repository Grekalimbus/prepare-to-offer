import connectAuthMongoDB from "@/backend/libs/mongodbAuth";
import User from "@/backend/models/auth/user";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    await connectAuthMongoDB();
    const email = request.nextUrl.searchParams.get("email");
    const question = request.nextUrl.searchParams.get("question");
    const candidate = await User.findOne({ email: email }).select("-password");
    if (candidate && question) {
        const myQuestions = candidate.questions[question];
        return NextResponse.json(myQuestions, { status: 201 });
    } else {
        return NextResponse.json({ message: "Not found" }, { status: 400 });
    }
}
