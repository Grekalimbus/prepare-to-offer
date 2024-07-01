import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
    value: {
        type: String,
        default: "USER",
        unique: true,
    },
});

const Role = mongoose.models.Role || mongoose.model("Role", RoleSchema);

export default Role;
