import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Badge } from "./ui/badge";
import { Avatar, AvatarImage } from "./ui/avatar";

const Job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
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
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div> 5:39
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sapiente
          omnis velit vero aperiam quibusdam, at dolorem ipsam repudiandae
          delectus!
        </p>
      </div>
      <div>
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          {" "}
          12 Position
        </Badge>
        <Badge className={"text-[#f83002] font-bold"} variant="ghost">
          Part Time
        </Badge>
        <Badge className={"text-[#2dae47] font-bold"} variant="ghost">
          {" "}
          12LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button variant="outline">Details</Button>
        <Button className="bg-[#0167ff]">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
