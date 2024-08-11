import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {  Pen } from "lucide-react";
import { Mail } from "lucide-react";
import { Contact } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";




const isResume = true;
function Profile() {
  const [open,setOpen] = useState(false)
  const {user} = useSelector(store=>store.auth)
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
              <h1 className="font-medium text-xl">{user?.fullname}</h1>
              <p>
               {user?.profile.bio}
              </p>
            </div>
          </div>
          <Button className="text-right " variant="outline" onClick={()=> setOpen(true)}>
            <Pen />
          </Button>
        </div>
      <div className="my-5">
        <div className="flex items-center gap-3 my-2">
        <Mail/> 
        <span>{user?.email}</span>
        </div>
        <div className="flex items-center gap-3 my-2">
        <Contact />
        <span>{user?.phoneNumber}</span>
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-md font-bold">Skills</h1>
        <div className="flex items-center gap-1">
        {
          user?.profile?.skills.length != 0 ? user?.profile?.skills.map((item,index)=> <Badge key={index}>{item}</Badge>) : <span>NA</span>
        }
        </div>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className="text-md font-bold">Resume</Label>
        {
          isResume ? <a target="blank" href={user?.profile?.resume} className="text-blue-500 w-full hover:underline cursor-pointer">{user?.profile?.resumeOriginalName}</a> : <span>NA</span>
        }
      </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1  className="font-bold text-lg my-5">Applied Jobs</h1>
        {/* Application Table  */}
        <AppliedJobTable/>
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>
  );
}

export default Profile;
