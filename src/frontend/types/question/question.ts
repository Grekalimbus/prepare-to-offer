export interface Question {
    _id?: string;
    question: string;
    answer: string;
    sliceOfCode: string;
    links: string[] | [];
    status?: string;
    technology?: string;
}
