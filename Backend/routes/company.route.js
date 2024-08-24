import express from "express";
import { registerCompany ,getCompany,getCompanyById, updateCompany} from "../controllers/company.controller.js";
import isAuthenticated from "../midddleware/isAuthenticate.js";
import { singleUpload } from "../midddleware/multer.js";

const router = express.Router()

router.post("/registerCompany",isAuthenticated,registerCompany)
router.get("/get", isAuthenticated, getCompany)
router.get("/get/:id",isAuthenticated,getCompanyById)
router.put("/update/:id",isAuthenticated,singleUpload,updateCompany)

export default router;