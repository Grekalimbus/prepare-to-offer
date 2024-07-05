import mongoose from "mongoose";
const URL = process.env.MONGODB_COMPANIES_URL;
const connetctCompanyMongoDB = async () => {
    try {
        await mongoose.connect(URL!);
        console.log("connect mongodb");
    } catch (error) {
        console.log("error", error);
    }
};

export default connetctCompanyMongoDB;
