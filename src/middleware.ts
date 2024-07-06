export { default } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const token = await getToken({ req });

    if (req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/signIn") {
        if (token) return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
}

export const config = { matcher: ["/companiesPage", "/adminPage", "/login", "/signIn"] };
