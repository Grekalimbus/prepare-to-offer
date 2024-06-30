import mongoose from "mongoose";
const URL = "mongodb+srv://grechkindanil322:FOyLKwOFozdtyJYK@frontend-prepare-job-mo.810kzbe.mongodb.net/auth";
const connetctMongoAuthDB = async () => {
    if (mongoose.connections[0].readyState) {
        return;
    }

    try {
        await mongoose.connect(URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("MongoDB connection error:", error);
    }
};

export default connetctMongoAuthDB;
