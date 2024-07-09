import { Company } from "@/types/company/company";
import { Question } from "@/types/question/question";
import mongoose, { Document, Model, Schema } from "mongoose";

interface IUser extends Document {
    email: string;
    name?: string;
    image?: string;
    password?: string;
    roles: string[];
    companies: Company[] | [];
    questions: {
        html: Question[] | [];
        css: Question[] | [];
        javascript: Question[] | [];
        typescript: Question[] | [];
        react: Question[] | [];
        nextJS: Question[] | [];
        redux: Question[] | [];
        architecture: Question[] | [];
        common: Question[] | [];
    };
    favoriteQuestions: Question[] | [];
    createdAt: Date;
}

const userSchema = new Schema<IUser>({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: false },
    image: { type: String, required: false },
    password: { type: String, required: false },
    roles: [String],
    companies: [
        {
            companyName: String,
            linkVacancy: String,
            description: String,
            difficulty: String,
            liveCoding: String,
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
        nextJS: [],
        redux: [],
        architecture: [],
        common: [],
    },
    favoriteQuestions: [],
    createdAt: { type: Date, default: Date.now },
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
