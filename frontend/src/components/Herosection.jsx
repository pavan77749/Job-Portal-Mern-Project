import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const Herosection = () => {
  return (
    <div className="text-center mt-24">
      <div className="flex flex-col gap-5 my-10 ">
        <span className="px-4 bg-gray-100 py-2 rounded-full font-medium mx-auto ">
          No. 1 Job <span className="text-[#0167ff]">Dekho</span> Website
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-[#0167ff]">Dream Jobs</span>
        </h1>
      </div>
      <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto ">
        <input
          type="text"
          placeholder="Find your dream jobs"
          className="outline-none border-none w-full"
        />
        <Button className="rounded-r-full bg-[#0167ff]">
            <Search className="h-5 w-5"/>
        </Button>
      </div>
    </div>
  );
};

export default Herosection;
