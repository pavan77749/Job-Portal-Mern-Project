import React from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {  Pen } from "lucide-react";
import { Mail } from "lucide-react";
import { Contact } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";



const skills = ["html","css","javascript","reactjs"]
function Profile() {
  const isResume = true;
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 mt-24 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://imgs.search.brave.com/1qP-XVh6PQ2qbOrHtGRiuQT0O6PSjTBvdnTOwNvnJgg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDUvMDExMDQ3MjAv/M19iaWcxMi03Njh4/NTkxLnBuZw"
                alt="image not found"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat incidunt blanditiis adipisci?
              </p>
            </div>
          </div>
          <Button className="text-right " variant="outline">
            <Pen />
          </Button>
        </div>
      <div className="my-5">
        <div className="flex items-center gap-3 my-2">
        <Mail/> 
        <span>rohit@gmail.com</span>
        </div>
        <div className="flex items-center gap-3 my-2">
        <Contact />
        <span>9876589468</span>
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-md font-bold">Skills</h1>
        <div className="flex items-center gap-1">
        {
          skills.length != 0 ? skills.map((item,index)=> <Badge key={index}>{item}</Badge>) : <span>NA</span>
        }
        </div>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className="text-md font-bold">Resume</Label>
        {
          isResume ? <a target="blank" href="https://youtube.com" className="text-blue-500 w-full hover:underline cursor-pointer">Rohit Resume</a> : <span>NA</span>
        }
      </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1  className="font-bold text-lg my-5">Applied Jobs</h1>
        {/* Application Table  */}
        <AppliedJobTable/>
      </div>
    </div>
  );
}

export default Profile;
