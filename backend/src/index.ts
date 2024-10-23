import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";

const app = express()

dotenv.config()
try {
    mongoose.connect(`${process.env.MONGO_URL}`).then(() => { console.log('mongo connects') });
} catch (err) {
    console.log(err)
}
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/data',)
app.use('/user',)
app.use('/admin',)
app.listen(process.env.PORT, () => { console.log('9099 server') })

