"use client";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";

const SignIn = () => {
    const router = useRouter();
    const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");
        console.log("email", email);

        await axios.post("http://localhost:3000/api/users", {
            email,
            password,
        });
        const user = await axios.post("http://localhost:3000/api/getUser", {
            email,
        });
        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });
        if (res && !res.error) {
            router.push("/");
        } else {
            console.log("res", res);
        }
    };
    return (
        <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit}>
            <input name="email" type="text" required />
            <input name="password" type="password" required />
            <button>Зарегаться</button>
        </form>
    );
};

export default SignIn;
