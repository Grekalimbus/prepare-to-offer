import connetctAuthMongoDB from "@/backend/libs/mongodbAuth";
import User from "@/backend/models/auth/user";
import { Company } from "@/frontend/types/company/company";
import { NextResponse, type NextRequest } from "next/server";
interface Data {
    email: string;
    company: Company;
}
export async function PATCH(req: NextRequest) {
    await connetctAuthMongoDB();
    const data: Data = await req.json();
    const email = data.email;
    const company = data.company;

    const candidate = await User.findOne({ email });
    console.log("company", company);

    if (candidate) {
        const updatedCompanies = [...candidate.companies, company];
        await User.updateOne({ email }, { $set: { companies: updatedCompanies } });
        return NextResponse.json({ message: "User UPDATED" }, { status: 201 });
    } else {
        return NextResponse.json({ message: "User Not Found" }, { status: 404 });
    }
}
