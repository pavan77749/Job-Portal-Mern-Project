import React from "react";
import { Link } from "react-router-dom";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";

const Navbar = () => {
    const user = false;
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-md fixed w-full z-50 top-0 ">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        <div>
          <h1 className="text-2xl font-bold">
            Job <span className="text-[#0167ff]">Dekho</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5 cursor-pointer text-black">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/browse">Browse</Link></li>
          </ul>
          {
            !user ? (
                <div className="flex items-center gap-2">
                    <Link to="/login"><Button variant="outline">Login</Button></Link>
                    <Link to="/register"><Button className="bg-[#0167ff] hover:bg-[#10356c]">Register</Button></Link>
                </div>
            ):(
                <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                    <div className="flex gap-2 space-y-2">
                <Avatar className="cursor-pointer">               
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                  <h4 className="font-medium">Pavan Gupta</h4>
                  <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                    </div>
                    <div className="flex flex-col my-2 text-gray-600">
                        <div className="flex w-fit items-center gap-2 cursor-pointer">
                            <User2/>
                            <Button variant="link">View Profile</Button>
                        </div>
                        <div className="flex w-fit items-center gap-2 cursor-pointer">
                            <LogOut/>
                            <Button variant="link">Logout</Button>
                        </div>    
                    </div>
                </PopoverContent>
              </Popover>
            )
          }
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
