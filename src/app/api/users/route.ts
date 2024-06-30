import connetctMongoAuthDB from "@/libs/mongodbAuth";
import Role from "@/models/auth/role";
import User from "@/models/auth/user";
import bcrypt from "bcryptjs";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    await connetctMongoAuthDB();
    const { email, password } = await req.json();

    const candidate = await User.findOne({ email });
    if (candidate) {
        return NextResponse.json({ message: "Пользователь с таким username существует" }, { status: 400 });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const userRole = await Role.findOne({ value: "USER" });
    const user = new User({ email, password: hashedPassword, roles: [userRole.value] });
    await user.save();
    return NextResponse.json({ message: "User Created" }, { status: 201 });
}
