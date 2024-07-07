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
    const { question }: User = await req.json();

    const candidate = await User.findOne({ email });
    if (candidate) {
        const findFavorite = candidate.favoriteQuestions.filter(favorite => {
            return JSON.stringify(favorite?.answer) === JSON.stringify(question.answer);
        });
        console.log("findFavorite", findFavorite);
        if (findFavorite.length < 1) {
            await User.updateOne({ email }, { favoriteQuestions: [...candidate.favoriteQuestions, question] });
            return NextResponse.json({ message: "User Favorite Questions UPDATED" }, { status: 201 });
        }
        if (findFavorite.length > 0) {
            const withRemoveFavorite = candidate.favoriteQuestions.filter(favorite => {
                return JSON.stringify(favorite.answer) !== JSON.stringify(question.answer);
            });
            await User.updateOne({ email }, { favoriteQuestions: [...withRemoveFavorite] });
            return NextResponse.json({ message: "User Favorite Questions UPDATED" }, { status: 201 });
        }
    } else {
        return NextResponse.json({ message: "User Not Found" }, { status: 404 });
    }
}
