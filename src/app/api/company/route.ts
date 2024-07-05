import connetctAuthMongoDB from "@/libs/mongodbAuth";
import CompanyModel from "@/models/auth/company";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Company } from "./types/company";

export async function POST(request: NextRequest) {
    const { companyName, linkVacancy, description, difficulty, liveCoding, questions, task, status }: Company =
        await request.json();
    await connetctAuthMongoDB();
    const companyPost = await new CompanyModel({
        companyName,
        linkVacancy,
        description,
        difficulty,
        liveCoding,
        questions,
        task,
        status: status || "PENDING",
    });
    await companyPost.save();
    return NextResponse.json({ message: "Company Created" }, { status: 201 });
}

// export async function GET() {
//     await connetctQuestionMongoDB();
//     const architecture: TQuestion[] = await ArchitectureQuestionModel.find();
//     return NextResponse.json({ architecture });
// }

// export async function DELETE(request: NextRequest) {
//     const id = request.nextUrl.searchParams.get("id");
//     if (!id) {
//         return NextResponse.json({ message: "ID is required" }, { status: 400 });
//     }
//     await connetctQuestionMongoDB();
//     await ArchitectureQuestionModel.findByIdAndDelete(id);
//     return NextResponse.json({ message: "Architecture Question Deleted" }, { status: 200 });
// }
