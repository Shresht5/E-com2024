
import mongoose, { Schema } from "mongoose";

type UserT = {
    Uname: string;
    Uemail: string;
    Upass: string;
    isverified: boolean;
    isAdmin: boolean;
    order: [];
}

const userSchema: Schema = new mongoose.Schema({
    Uname: { type: String, required: true },
    Uemail: { type: String, required: true, unique: true },
    Upass: { type: String, required: true },
    isverified: { type: Boolean, required: true, default: false },
    isAdmin: { type: Boolean, required: true, default: false },
    orders: { type: Array, required: true },
}, { timestamps: true })

const userModel = mongoose.model<UserT>('users', userSchema)
export default userModel;