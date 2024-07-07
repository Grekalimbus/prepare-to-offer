import connectAuthMongoDB from "@/libs/mongodbAuth";
import User from "@/models/auth/user";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    await connectAuthMongoDB();
    const email = request.nextUrl.searchParams.get("email");
    const candidate = await User.findOne({ email: email }).select("-password");
    if (candidate) {
        return NextResponse.json(candidate, { status: 201 });
    } else {
        return NextResponse.json({ message: "Not found" }, { status: 400 });
    }
}
