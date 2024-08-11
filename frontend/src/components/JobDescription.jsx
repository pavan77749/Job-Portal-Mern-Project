import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import Navbar from './shared/Navbar'

const isApplied = true
const JobDescription = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto my-24">
        <div className="flex items-center justify-between">
            <div>
                <h1 className='font-bold text-xl'>Title</h1>
                <div className="flex items-center gap-2 mt-4">
                    <Badge className={"text-blue-700 font-bold" } variant="ghost-1">12 Position</Badge>
                    <Badge className={"text-[#f83002] font-bold"} variant="ghost-1">part time</Badge>
                    <Badge className={"text-[#2dae47]  font-bold"} variant="ghost-1">24 LPA</Badge>
                </div>
            </div>
            <Button disabled={isApplied} className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed': 'bg-[#0167ff] hover:bg-[#0167ff6e]'}`}>
                {isApplied ? 'Already Applied' : 'Apply Now'}
            </Button>
        </div>
        <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
    <div >
    <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>Frontend Developer</span></h1>
    <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>Mumbai</span></h1>
    <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>Lorem ipsum dolor sit amet consectetur.</span></h1>
    <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>2yrs</span></h1>
    <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>12LPA</span></h1>
    <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>4</span></h1>
    <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>17-07-2024</span></h1>
    </div>
    </div>
    </>
  )
}

export default JobDescription