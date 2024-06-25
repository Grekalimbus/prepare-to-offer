import mongoose, { Schema } from "mongoose";

const architectureSchema = new Schema({
	question: String,
	answer: String,
});

const ArchitectureQuestionModel =
	mongoose.models.ArchitectureQuestion ||
	mongoose.model("ArchitectureQuestion", architectureSchema);

export default ArchitectureQuestionModel;
