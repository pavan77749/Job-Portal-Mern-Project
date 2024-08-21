import { Job } from "../model/job.model.js";

//admin
export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      position,
      experience,
      companyId,
    } = req.body;
    const userId = req.id;
    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !position ||
      !companyId ||
      !experience
    ) {
      return res.status(400).json({
        message: "Please fill all the fields",
        success: false,
      });
    }
    const job = await Job.create({
      title,
      description,
      requirements: requirements.split(","),
      salary: Number(salary),
      location,
      jobType,
      position,
      company:companyId,
      experienceLevel:experience,
      created_by:userId
    });
    return res.status(201).json({
        message:"new Job created successfully",
        success:true,
        job
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error in JobPost",
      success: false,
      error,
    });
  }
};
//student
export const getAllJob = async (req,res) => {
    try {
        const keyword = req.query.keyword || ""
        const query = {
            $or:[
                {title:{$regex:keyword, $options:"i"}},
                {description:{$regex:keyword, $options:"i"}}
            ]
        }
        const jobs = await Job.find(query).populate({path:"company"}).sort({createdAt:-1})
        if(!jobs){
            return res.status(404).json({
                message:"Jobs not found",
                success:false
            })
        }
        return res.status(200).json({
            message:"Jobs fetched Successfully",
            jobs,
            success:true
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in getting all jobs",
            error
        })
    }
}
//student
export const getJobById = async (req,res) => {
    try {
        const jobId = req.params.id
        const job = await Job.findById(jobId).populate({path:'application'})
        if(!job){
            return res.status(404).json({
                message:"Job not found",
                success:false
            })
        }
        return res.status(200).json({
            message:"Job fetched by Id Successfully",
            job,
            success:true
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Error in finding Job by Id",
            success:false,
            error
        })
        
    }
}

//admin kitne job create kiya hai abhi tak
export const getAdminJobs = async (req,res) => {
    try {
        const adminId = req.id 
        const jobs = await Job.find({created_by:adminId})
        if(!jobs){
            return res.status(404).json({
                message:'Jobs not found',
                success:false
            })
        }
        return res.status(200).json({
            jobs,
            success:false
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Error in Creating Job by Admin",
            success:false
        })
        
    }
}