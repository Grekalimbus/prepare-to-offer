export { default } from "next-auth/middleware";
import axios from "axios";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { BASE_URL } from "./frontend/configs/baseURL";
import { IUser } from "./frontend/types/user/user";

export async function middleware(req: NextRequest) {
    const token = await getToken({ req });
    if (req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/signIn") {
        if (token) return NextResponse.redirect(new URL("/", req.url));
    }
    if (!token && req.nextUrl.pathname.startsWith("/adminPage")) {
        return NextResponse.redirect(new URL("/login", req.url));
    }
    if (token && req.nextUrl.pathname.startsWith("/adminPage")) {
        const userResponse = await axios.get<IUser>(`${BASE_URL}/getUser?email=${token.email}`);
        const isAdmin = userResponse.data.roles.includes("ADMIN");
        if (isAdmin) return NextResponse.next();
        if (!isAdmin) return NextResponse.redirect(new URL("/", req.url));
    }
    if (
        !token &&
        (req.nextUrl.pathname === "/questionsPage/addQuestion" || req.nextUrl.pathname === "/questionsPage/myQuestions")
    ) {
        const loginUrl = new URL("/login", req.url);
        loginUrl.searchParams.set("redirect", req.nextUrl.pathname);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/companiesPage",
        "/adminPage",
        "/login",
        "/signIn",
        "/questionsPage/addQuestion",
        "/questionsPage/myQuestions",
    ],
};
