import mongoose, { Schema } from "mongoose";

type ProductT = {
    name: string;
    slug: string;
    manufacture: string;
    catego: string;
    mrp: number;
    price: number;
    details: {};
    description: string;
    stock: number;
}

const productSchema: Schema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    manufacture: { type: String, required: true },
    catego: { type: String, required: true },
    mrp: { type: Number, required: true },
    price: { type: Number, required: true },
    details: { type: Object },
    description: { type: String, required: true },
    stock: { type: Number, required: true, default: 0 },
}, { timestamps: true })

const productModel = mongoose.model<ProductT>('products', productSchema)
export default productModel;