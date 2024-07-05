import connetctAuthMongoDB from "@/libs/mongodbAuth";
import User from "@/models/auth/user";
import { NextResponse, type NextRequest } from "next/server";

type User = {
    email: string;
    password: string;
    company: any;
};

export async function PATCH(req: NextRequest) {
    await connetctAuthMongoDB();

    const { email, company }: User = await req.json();
    console.log("email", email);
    console.log("company", company);
    const candidate = await User.findOne({ email });
    if (candidate) {
        const updatedCompanies = [...candidate.companies, company];
        await User.updateOne({ email }, { $set: { companies: updatedCompanies } });
        return NextResponse.json({ message: "User UPDATED" }, { status: 201 });
    } else {
        return NextResponse.json({ message: "User Not Found" }, { status: 404 });
    }
}
