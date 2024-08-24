import React from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/useGetAllCompany'

const Companies = () => {
  useGetAllCompanies()
  const navigate = useNavigate()
  return (
    <div >
      <Navbar />
    <div className="max-w-6xl mx-auto my-20 mt-24">
      <div className='flex items-center justify-between'>
      <Input 
      className="w-fit"
      placeholder="Filter by name" />
      <Button onClick={()=>navigate("/admin/companies/create")}>New Company</Button>
      </div>
      <CompaniesTable />
    </div>
    </div>
  )
}

export default Companies