import mongoose, { Schema } from "mongoose";

const htmlSchema = new Schema({
    question: String,
    answer: String,
    sliceOfCode: String,
    links: [String] || [],
    status: String,
});

const HtmlQuestionModel = mongoose.models.HtmlQuestion || mongoose.model("HtmlQuestion", htmlSchema);

export default HtmlQuestionModel;
