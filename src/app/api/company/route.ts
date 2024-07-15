import { default as connectAuthMongoDB, default as connetctAuthMongoDB } from "@/backend/libs/mongodbAuth";
import CompanyModel from "@/backend/models/auth/company";
import { Company } from "@/frontend/types/company/company";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const {
        companyName,
        linkVacancy,
        description,
        difficulty,
        liveCoding,
        questions,
        status,
        sliceOfCode,
        typeOfInterview,
    }: Company = await request.json();
    await connetctAuthMongoDB();
    const companyPost = await new CompanyModel({
        companyName,
        linkVacancy,
        description,
        difficulty,
        liveCoding,
        questions,
        sliceOfCode,
        typeOfInterview,
        status: status || "PENDING",
    });
    await companyPost.save();
    return NextResponse.json({ message: "Company Created" }, { status: 201 });
}

export async function GET(request: NextRequest) {
    await connectAuthMongoDB();
    const status = request.nextUrl.searchParams.get("status");
    const companies: any = await CompanyModel.find({ status });
    return NextResponse.json({ companies });
}
