import mongoose, { Document, Model, Schema } from "mongoose";

interface IUser extends Document {
    email: string;
    name?: string;
    image?: string;
    password?: string;
    roles: [
        {
            type: string;
            ref: "Role";
        },
    ];
    createdAt: Date;
}

const userSchema = new Schema<IUser>({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: false },
    image: { type: String, required: false },
    password: { type: String, required: false },
    roles: [{ type: String, ref: "Role", required: true }],
    createdAt: { type: Date, default: Date.now },
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
