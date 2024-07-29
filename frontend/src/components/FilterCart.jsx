import React from "react";
import { RadioGroup , RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
Label

const filterData = [
  { filterType: "Location", array: ["Delhi", "Mumbai", "Pune", "Bangolore"] },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "Senior Java Developer",
      "FullStack Developer",
    ],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "45-1lakh", "1lakh-5lakh"],
  },
];
const FilterCart = () => {
  return (
    <div className="w-full bg-white p-3 rounded-md">
        <h1 className="font-bold text-lg">Filter Jobs</h1>
        <hr className="mt-3"/>
        <RadioGroup>
            {
                filterData.map((data,index)=>(
                    <div>
                        <h1 className="font-bold text-lg">{data.filterType}</h1>
                        {
                            data.array.map((item,index)=> {
                                return (
                                    <div className="flex items-center space-x-2 my-2">
                                        <RadioGroupItem  value={item} />
                                        <Label>{item}</Label>

                                    </div>
                                )
                            })
                        }
                    </div>
                ))
            }
        </RadioGroup>
    </div>
  )
};

export default FilterCart;
