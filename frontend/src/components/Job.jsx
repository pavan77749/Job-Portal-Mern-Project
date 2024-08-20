import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Badge } from "./ui/badge";
import { Avatar, AvatarImage } from "./ui/avatar";
import {  useNavigate } from "react-router-dom";

const Job = ({job}) => {
  const navigate = useNavigate()
  // const jobId = "fdsfdsjlkjdfseijfds"
  
  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference/ (1000*24*60*60))
  }

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://imgs.search.brave.com/1qP-XVh6PQ2qbOrHtGRiuQT0O6PSjTBvdnTOwNvnJgg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDUvMDExMDQ3MjAv/M19iaWcxMi03Njh4/NTkxLnBuZw" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div> 
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">
          {job?.description}
        </p>
      </div>
      <div>
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          {" "}
          {job?.position} Position
        </Badge>
        <Badge className={"text-[#f83002] font-bold"} variant="ghost">
         {job?.jobType}
        </Badge>
        <Badge className={"text-[#2dae47] font-bold"} variant="ghost">
          {" "}
          {job?.salary} LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button variant="outline" onClick={()=> navigate(`/description/${job?._id}`)}>Details</Button>
        <Button className="bg-[#0167ff]">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
