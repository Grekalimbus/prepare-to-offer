import mongoose from "mongoose";
const URL = process.env.MONGODB_QUESTIONS_URL;
const connetctQuestionMongoDB = async () => {
    try {
        await mongoose.connect(URL!);
        console.log("connect mongodb");
    } catch (error) {
        console.log("error", error);
    }
};

export default connetctQuestionMongoDB;
