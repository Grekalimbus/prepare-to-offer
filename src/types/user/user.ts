import { Company } from "../company/company";
import { Question } from "../question/question";

export interface IUser {
    _id: string;
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
