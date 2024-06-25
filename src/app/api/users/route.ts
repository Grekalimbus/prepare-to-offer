import connetctMongoAuthDB from "@/libs/mongodbAuth";
import RoleModal from "@/models/auth/role";
import UserModel from "@/models/auth/user";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { username, password } = await request.json();
    await connetctMongoAuthDB();
    const candidate = await UserModel.findOne({ username });
    if (candidate) {
        return NextResponse.json({ message: "Пользователь с таким username существует" }, { status: 400 });
    }
    const userRole = await RoleModal.findOne({ value: "USER" });
    const user = new UserModel({ username, password, roles: [userRole.value] });
    await user.save();
    return NextResponse.json({ message: "User Created" }, { status: 201 });
}
