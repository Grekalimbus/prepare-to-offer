import mongoose, { Schema } from "mongoose";

const typescriptSchema = new Schema({
	question: String,
	answer: String,
});

const TypescriptQuestionModel =
	mongoose.models.TypescriptQuestion ||
	mongoose.model("TypescriptQuestion", typescriptSchema);

export default TypescriptQuestionModel;
