import mongoose, { Document, Model, Schema } from "mongoose";

interface IQuestion {
    question: string;
    answer: string;
    sliceOfCode: string;
    links: string[] | [];
}

interface ICompany {
    companyName: string;
    linkVacancy: string;
    description: string;
    difficulty: string;
    liveCoding: string;
    questions: string[] | [];
    task: string;
    status: string;
    createdAt: Date;
}

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
    companies: ICompany[] | [];
    questions: {
        html: IQuestion[] | [];
        css: IQuestion[] | [];
        javascript: IQuestion[] | [];
        typescript: IQuestion[] | [];
        react: IQuestion[] | [];
        nextJS: IQuestion[] | [];
        redux: IQuestion[] | [];
        architecture: IQuestion[] | [];
        common: IQuestion[] | [];
    };
    favoriteQuestions: IQuestion[] | [];
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
