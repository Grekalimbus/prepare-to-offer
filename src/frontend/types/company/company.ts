export interface Company {
    _id?: string;
    companyName: string;
    linkVacancy: string;
    description: string;
    difficulty: string;
    liveCoding: string;
    sliceOfCode: string;
    typeOfInterview: string;
    questions: string[] | [];
    status?: string;
    createdAt?: string;
}
