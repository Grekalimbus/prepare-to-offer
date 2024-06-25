import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
    value: {
        type: String,
        default: "USER",
        unique: true,
    },
});

const RoleModal = mongoose.models.Role || mongoose.model("RoleModal", RoleSchema);

export default RoleModal;
