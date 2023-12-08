import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    email_verified_at: { type: Date },
    password: { type: String, required: true },
    remember_token: { type: String },
    // created_at: { type: Date, required: true },
    // updated_at: { type: Date, required: true },
    phone: { type: String },
    role: { type: String },
    social_id: { type: String },
    social_type: { type: String },
    avatar: { type: String, default: "images/avatardefault.png" },
    deleted_at: { type: Date },
  },{timestamps : true});

export const User = mongoose.model("users",UserSchema)