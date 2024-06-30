import connetctMongoAuthDB from "@/libs/mongodbAuth";
import Role from "@/models/auth/role";
import UserModel from "@/models/auth/user";
import bcrypt from "bcryptjs";
import type { AuthOptions, User } from "next-auth";
import nextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoggleProvider from "next-auth/providers/google";

export const authConfig: AuthOptions = {
    providers: [
        GoggleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
        Credentials({
            credentials: {
                email: { label: "email", type: "email", required: true },
                password: { label: "password", type: "password", required: true },
            },
            async authorize(credentials) {
                await connetctMongoAuthDB();
                if (!credentials?.email || !credentials.password) return null;

                const currentUser = await UserModel.findOne({ email: credentials.email });
                if (!currentUser || !currentUser.password) {
                    return null;
                }

                const passwordMatch = await bcrypt.compare(credentials.password, currentUser.password);

                if (passwordMatch) {
                    const { password, ...userWithoutPass } = currentUser.toObject();
                    return userWithoutPass as User;
                } else {
                    return null; // Если пароль не совпадает, возвращаем null
                }
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            const { email, name, image } = user;
            await connetctMongoAuthDB();

            const existingUser = await UserModel.findOne({ email });
            const userRole = await Role.findOne({ value: "USER" });

            if (!existingUser) {
                await UserModel.create({
                    email,
                    name,
                    image,
                    roles: [userRole.value],
                    createdAt: new Date(),
                });
            }

            return true;
        },
    },
    pages: { signIn: "/signIn" },
};
const handler = nextAuth(authConfig);
export { handler as GET, handler as POST };
