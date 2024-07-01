import connetctMongoAuthDB from "@/libs/mongodbAuth";
import User from "@/models/auth/user";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    await connetctMongoAuthDB();
    const { email, password } = await req.json();
    const candidate = await User.findOne({ email, password });
    if (candidate) {
        return NextResponse.json({ email: candidate.email }, { status: 201 });
    }
}
