import axios from 'axios'
import  { useEffect } from 'react'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { useDispatch } from 'react-redux'
import { setCompanies } from '@/redux/companySlice'

const useGetAllComp = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        const fetchAllCompany = async () => {

            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/get`, {withCredentials:true})
                if(res.data.success){
                    dispatch(setCompanies(res.data.companies))
                }
            } catch (error) {
                console.log(error)
                
            }
        }
        fetchAllCompany();
    },[])
}

export default useGetAllComp