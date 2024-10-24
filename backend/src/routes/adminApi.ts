import express from "express"
import { CreateProd } from "../controller/CreateProd";
const router = express.Router()

router.post('/creatprod', CreateProd)

export default router;