import connetctAuthMongoDB from "@/libs/mongodbAuth";
import User from "@/models/auth/user";
import { Question } from "@/types/question/question";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    await connetctAuthMongoDB();
    const email = req.nextUrl.searchParams.get("email");
    const candidate = await User.findOne({ email: email }).select("-password");
    if (candidate) {
        return NextResponse.json(candidate.favoriteQuestions, { status: 201 });
    } else {
        return NextResponse.json({ message: "Not found" }, { status: 400 });
    }
}

export async function PATCH(req: NextRequest) {
    await connetctAuthMongoDB();
    const email = req.nextUrl.searchParams.get("email");
    const body: { question: Question } = await req.json();
    const question = body.question;
    const candidate = await User.findOne({ email });
    if (candidate) {
        const findFavorite = candidate.favoriteQuestions.filter(favorite => {
            return favorite?._id === question._id;
        });
        console.log("findFavorite.length", findFavorite.length);
        if (findFavorite.length < 1) {
            await candidate.updateOne({ favoriteQuestions: [...candidate.favoriteQuestions, question] });
            return NextResponse.json({ message: "User Favorite Questions UPDATED" }, { status: 201 });
        }
        if (findFavorite.length > 0) {
            const withRemoveFavorite = candidate.favoriteQuestions.filter(favorite => {
                return favorite._id !== question._id;
            });
            await candidate.updateOne({ favoriteQuestions: [...withRemoveFavorite] });
            return NextResponse.json({ message: "User Favorite Questions UPDATED" }, { status: 201 });
        }
    } else {
        return NextResponse.json({ message: "User Not Found" }, { status: 404 });
    }
}
