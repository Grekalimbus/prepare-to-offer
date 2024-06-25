import mongoose from "mongoose";

const connetctMongoDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://grechkindanil322:FOyLKwOFozdtyJYK@frontend-prepare-job-mo.810kzbe.mongodb.net/questions",
        );
        console.log("connect mongodb");
    } catch (error) {
        console.log("error", error);
    }
};

export default connetctMongoDB;
