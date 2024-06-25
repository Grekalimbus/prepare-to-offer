import mongoose, { Schema } from "mongoose";

const cssSchema = new Schema({
	question: String,
	answer: String,
});

const CssQuestionModel =
	mongoose.models.CssQuestion || mongoose.model("CssQuestion", cssSchema);

export default CssQuestionModel;
