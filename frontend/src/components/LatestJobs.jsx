import React from 'react'
import LatestJobCards from './LatestJobCards'


const randomJobs = [1,2,3,4,5,6,7,8]
export const LatestJobs = () => {
  return (
    <div className='max-w-7xl mx-auto my-20'>
        <h1 className='text-4xl font-bold'>Latest & Top <span className='text-[#0167ff]'>Job Openings</span></h1>
        <div className="grid grid-cols-3 gap-4 my-5">
    {
        randomJobs.slice(0,6).map((item,index)=> <LatestJobCards/>)
    }
        </div>
    </div>
  )
}
