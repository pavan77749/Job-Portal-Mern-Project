import React from "react";
import Navbar from "./shared/Navbar";
// import Footer from './shared/Footer'
import FilterCart from "./FilterCart";
import Job from "./Job";
import { useSelector } from "react-redux";


const Jobs = () => {
  const {allJobs} = useSelector(store=>store.job)
  return (
    <div className="">
      <Navbar />
      <div className="mt-24 max-w-7xl mx-auto">
        <div className="flex gap-5">
          <div className="w-[20%] ">
            <FilterCart />
          </div>
          {allJobs.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
               { allJobs.map((job) => (
                <div key={job?._id}>
                  <Job  job={job}/>
                </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
