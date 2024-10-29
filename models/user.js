import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },
    entity_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Entity' },
    authToken: { type: String },
    authTokenExpiry: { type: Date },
    resetToken: { type: String },
    resetTokenExpiry: { type: Date },
}, { timestamps: true });

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
