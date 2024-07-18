import { Company } from "@/frontend/types/company/company";
import { Question } from "@/frontend/types/question/question";
import mongoose, { Document, Model, Schema } from "mongoose";

interface IUser extends Document {
    email: string;
    name?: string;
    image?: string;
    password?: string;
    roles: [
        {
            type: string;
            ref: "Role";
        },
    ];
    companies: Company[] | [];
    questions: {
        [key: string]: Question[] | [];
    };
    favoriteQuestions: Question[] | [];
    createdAt: Date;
}

const userSchema = new Schema<IUser>({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: false },
    image: { type: String, required: false },
    password: { type: String, required: false },
    roles: [{ type: String, ref: "Role", required: true }],
    companies: [
        {
            companyName: String,
            linkVacancy: String,
            description: String,
            difficulty: String,
            liveCoding: String,
            typeOfInterview: String,
            sliceOfCode: String,
            questions: [String] || [],
            task: String,
            status: String,
            createdAt: { type: Date, default: Date.now },
        },
    ],
    questions: {
        html: [],
        css: [],
        javascript: [],
        typescript: [],
        react: [],
        nextjs: [],
        redux: [],
        architecture: [],
        common: [],
    },
    favoriteQuestions: [],
    createdAt: { type: Date, default: Date.now },
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
