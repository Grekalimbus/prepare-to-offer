import connectAuthMongoDB from "@/libs/mongodbAuth";
import User from "@/models/auth/user";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    await connectAuthMongoDB();
    const email = request.nextUrl.searchParams.get("email");
    console.log("email", email);
    const candidate = await User.findOne({ email: "grechkindanil322@gmail.com" });
    console.log("candidate", candidate);
    if (candidate) {
        return NextResponse.json({ email: candidate.email, roles: candidate.roles }, { status: 201 });
    } else {
        return NextResponse.json({ message: "Not found" }, { status: 400 });
    }
}
