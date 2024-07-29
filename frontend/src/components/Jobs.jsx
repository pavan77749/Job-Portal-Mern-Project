import React from "react";
import Navbar from "./shared/Navbar";
// import Footer from './shared/Footer'
import FilterCart from "./FilterCart";
import Job from "./Job";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  return (
    <div className="">
      <Navbar />
      <div className="mt-24 max-w-7xl mx-auto">
        <div className="flex gap-5">
          <div className="w-[20%] ">
            <FilterCart />
          </div>
          {jobsArray.length < 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
               { jobsArray.map((item, index) => (
                <div>
                  <Job />
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
