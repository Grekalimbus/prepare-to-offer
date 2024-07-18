import mongoose, { Schema } from "mongoose";

const nextjsSchema = new Schema({
    question: String,
    answer: String,
    sliceOfCode: String,
    links: [String] || [],
    status: String,
});

const NextjsQuestionModel = mongoose.models.NextjsQuestion || mongoose.model("NextjsQuestion", nextjsSchema);

export default NextjsQuestionModel;
