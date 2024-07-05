import mongoose from "mongoose";
const URL = process.env.MONGODB_AUTH_URL;
const connetctAuthMongoDB = async () => {
    if (mongoose.connections[0].readyState) {
        return;
    }

    try {
        await mongoose.connect(URL!);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("MongoDB connection error:", error);
    }
};

export default connetctAuthMongoDB;
