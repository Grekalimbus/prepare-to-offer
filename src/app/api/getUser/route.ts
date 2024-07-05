import connetctAuthMongoDB from "@/libs/mongodbAuth";
import User from "@/models/auth/user";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    await connetctAuthMongoDB();
    const { email } = await req.json();
    const candidate = await User.findOne({ email });
    if (candidate) {
        return NextResponse.json({ email: candidate.email, roles: candidate.roles }, { status: 201 });
    }
}
