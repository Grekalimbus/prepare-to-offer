import mongoose from "mongoose";

const connetctMongoAuthDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://grechkindanil322:FOyLKwOFozdtyJYK@frontend-prepare-job-mo.810kzbe.mongodb.net/auth",
        );
        console.log("connect mongodb");
    } catch (error) {
        console.log("error", error);
    }
};

export default connetctMongoAuthDB;
