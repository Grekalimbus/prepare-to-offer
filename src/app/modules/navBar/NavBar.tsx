"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const NavBar = () => {
    const session = useSession();
    console.log("session", session);
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link href="/">Home</Link>
            <Link href="/authPage">Auth</Link>
            {session?.data && <Link href="/profile">Profile</Link>}
            {session?.data ? (
                <Link href="/" onClick={() => signOut({ callbackUrl: "/" })}>
                    signOut
                </Link>
            ) : (
                <Link href="/api/auth/signin">signIn</Link>
            )}
        </div>
    );
};

export default NavBar;
