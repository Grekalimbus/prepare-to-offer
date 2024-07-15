import mongoose, { Schema } from "mongoose";

const pendingQuestionSchema = new Schema({
    question: String,
    answer: String,
    sliceOfCode: String,
    links: [String] || [],
    status: String,
    technology: String,
});

const PendingQuestionQuestionModel =
    mongoose.models.PendingQuestionQuestion || mongoose.model("PendingQuestionQuestion", pendingQuestionSchema);

export default PendingQuestionQuestionModel;
