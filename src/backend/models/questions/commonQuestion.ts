import mongoose, { Schema } from "mongoose";

const commonSchema = new Schema({
    question: String,
    answer: String,
    sliceOfCode: String,
    links: [String] || [],
    status: String,
});

const CommonQuestionModel = mongoose.models.CommonQuestion || mongoose.model("CommonQuestion", commonSchema);

export default CommonQuestionModel;
