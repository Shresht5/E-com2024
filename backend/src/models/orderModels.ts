import mongoose, { Schema } from "mongoose";

type OrderT = {
    Uname: string;
    Uemail: string;
    Unumber: string;
    order: [];
    Olocation: string;
    Driname: string;
    manufacture: string
}

const orderSchema: Schema = new mongoose.Schema({
    Uname: { type: String, required: true },
    Uemail: { type: String, required: true },
    Unumber: { type: String, required: true },
    order: { type: Array, required: true },
    Olocation: { type: String, required: true },
    Driname: { type: String },
    manufacture: { type: String, required: true }
}, { timestamps: true })

const orderModel = mongoose.model<OrderT>('products', orderSchema)
export default orderModel;