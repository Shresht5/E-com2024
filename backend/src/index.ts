import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import adminApi from './routes/adminApi'
import userApi from './routes/userApi'
import dataApi from './routes/dataApi'

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

app.use('/api/data', adminApi)
app.use('/api/user', userApi)
app.use('/api/admin', dataApi)
app.listen(process.env.PORT, () => { console.log('9099 server') })

