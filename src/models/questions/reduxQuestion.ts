import mongoose, { Schema } from "mongoose";

const reduxSchema = new Schema({
    question: String,
    answer: String,
    sliceOfCode: String,
    links: [String] || [],
    status: String,
});

const ReduxQuestionModel = mongoose.models.ReduxQuestion || mongoose.model("ReduxQuestion", reduxSchema);

export default ReduxQuestionModel;
