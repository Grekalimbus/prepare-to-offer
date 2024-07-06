import mongoose, { Schema } from "mongoose";

const companySchema = new Schema({
    companyName: String,
    linkVacancy: String,
    description: String,
    difficulty: String,
    liveCoding: String,
    questions: [String] || [],
    task: String,
    status: String,
    sliceOfCode: String,
    typeOfInterview: String,
    createdAt: { type: Date, default: Date.now },
});

const CompanyModel = mongoose.models.Company || mongoose.model("Company", companySchema);

export default CompanyModel;
