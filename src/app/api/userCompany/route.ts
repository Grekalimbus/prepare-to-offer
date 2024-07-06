import connetctAuthMongoDB from "@/libs/mongodbAuth";
import User from "@/models/auth/user";
import { IUser } from "@/types/user/user";
import { NextResponse, type NextRequest } from "next/server";

export async function PATCH(req: NextRequest) {
    await connetctAuthMongoDB();

    const { email, companies }: IUser = await req.json();
    const candidate = await User.findOne({ email });
    if (candidate) {
        const updatedCompanies = [...candidate.companies, companies];
        await User.updateOne({ email }, { $set: { companies: updatedCompanies } });
        return NextResponse.json({ message: "User UPDATED" }, { status: 201 });
    } else {
        return NextResponse.json({ message: "User Not Found" }, { status: 404 });
    }
}
