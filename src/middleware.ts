export { default } from "next-auth/middleware";
import axios from "axios";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { BASE_URL } from "./configs/baseURL";
import { IUser } from "./types/user/user";

export async function middleware(req: NextRequest) {
    const token = await getToken({ req });
    console.log("token", token);
    if (req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/signIn") {
        if (token) return NextResponse.redirect(new URL("/", req.url));
    }
    if (!token && req.nextUrl.pathname.startsWith("/adminPage")) {
        return NextResponse.redirect(new URL("/login", req.url));
    }
    if (token && req.nextUrl.pathname.startsWith("/adminPage")) {
        const userResponse = await axios.get<IUser>(`${BASE_URL}/getUser?email=${token.email}`);
        const isAdmin = userResponse.data.roles.includes("ADMIN");
        console.log("isAdmin", isAdmin);
        if (isAdmin) return NextResponse.next();
        if (!isAdmin) return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/companiesPage", "/adminPage", "/login", "/signIn"],
};
