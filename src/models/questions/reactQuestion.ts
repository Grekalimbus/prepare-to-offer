import mongoose, { Schema } from "mongoose";

const reactSchema = new Schema({
	question: String,
	answer: String,
});

const ReactQuestionModel =
	mongoose.models.ReactQuestion || mongoose.model("ReactQuestion", reactSchema);

export default ReactQuestionModel;
