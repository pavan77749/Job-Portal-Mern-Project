import express from "express";
import { postJob ,getAllJob,getJobById,getAdminJobs} from "../controllers/job.controller.js";
import isAuthenticated from "../midddleware/isAuthenticate.js";

const router = express.Router()

router.post("/post",isAuthenticated,postJob)
router.get("/getjobs",isAuthenticated,getAllJob)
router.get("/getadminjobs",isAuthenticated,getAdminJobs)
router.get("/getjob/:id",isAuthenticated,getJobById)



export default router;