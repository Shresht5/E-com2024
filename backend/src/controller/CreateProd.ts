import { Request, Response } from "express";
import productModel from "../models/prodModels";

export const CreateProd = async (req: Request, res: Response) => {
    const { name, manuf, catego, mrp, price, details, description, stock } = req.body;
    const slug = name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-');
    try {
        const prod1 = await productModel.findOne({ slug })
        if (prod1) {
            return res.json({ success: false, message: "slug already exist" })
        }
        const prod2 = new productModel({ name, slug, manuf, catego, mrp, price, details, description, stock });
        await prod2.save();
        return res.json({ success: true, message: "successfully product created", prod2 })

    } catch (err) {
        return res.json({ success: false, message: "ERROR", err })
    }
}