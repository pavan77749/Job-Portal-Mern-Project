import { Application } from "../model/application.model.js";
import {Job} from "../model/job.model.js"

export const applyJob = async (req,res) => {
    try {
        const userId = req.id 
       const jobId = req.params.id 
        if(!jobId){
            return res.status(400).json({
                message:"Job Id is required",
                success:false
            })
        }
        //check if the user has already applied for the job
        const existingApplication = await Application.findOne({job:jobId, applicant:userId})
        if(existingApplication){
            return res.status(400).json({
                message:"You have already applied for course",
                success:false
            })
        }
        //check if job exist
        const job = await Job.findById(jobId)
        if(!job){
            return res.status(404).json({
                message:"Job doesn't exist",
                success:false
            })
        }
        //create a new application
        const newApplication = await Application.create({
            job:jobId,
            applicant:userId
        })
        job.application.push(newApplication._id)
        await job.save()
        return res.status(201).json({
            message:"Job applied successfully",
            success:true
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Error in applying Job",
            success:false,
            error
        })
        
    }
}

export const getAppliedJobs = async (req,res) => {
    try {
        const userId = req.id 
        const application = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
            path:'job',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'company',
                options:{sort:{createdAt:-1}}
            }
            
        })
        if(!application){
            return res.status(404).json({
                message:"No Application",
                success:false
            })
        }
        return res.status(200).json({
            message:"Successfully fetched all applied jobs",
            success:true,
            application
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Error in getting applied jobs",
            success:false,
            error
        })
        
    }
}

export const getApplicants = async (req,res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:'application',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'applicant'
            }
        })
        if(!job){
            return res.status(404).json({
                message:'Job not found', 
                success:false
            })
        }
        return res.status(200).json({
            job,
            success:true
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Error in getting applicants",
            success:false,
            error
        })
        
    }
}

export const updateStatus = async (req,res) => {
    try {
        const {status} = req.body;
        const applicationId = req.params.id;
        if(!status){
            return  res.status(404).json({
                message:"Status is required",
                success:false
            })
        }
        // find the application by application id
        const application = await Application.findOne({_id:applicationId})
        if(!application){
            return res.status(404).json({
                message:"application Id is required",
                success:false
            })
        }

        // update the status
        application.status = status.toLowerCase()
        await application.save()

        return res.status(200).json({
            message:"Updated status successfully",
            success:true
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Error in updating Status",
            success:false,
            error
        })
        
    }
}