import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    roles: [
        {
            type: String,
            ref: "RoleModal",
        },
    ],
});

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);
export default UserModel;
