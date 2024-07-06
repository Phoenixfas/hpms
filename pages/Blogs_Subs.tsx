'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useAppSelector } from '../redux/hooks'

export default function Blogs_Subs() {
    const token = useAppSelector((state) => state.login.admin)
    const role = useAppSelector((state) => state.login.role)
    const [patients, setPatients] = useState(0)
    const [appointments, setAppointments] = useState(0)
    const [clinicalDocuments, setClinicalDocuments] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        const fetchData = async () => {
            try{
                const res = await Promise.all([
                    fetch('https://hpms.vercel.app/api/patients', config),
                    fetch('https://hpms.vercel.app/api/appointments', config),
                    fetch('https://hpms.vercel.app/api/clinical-documents', config),
                ])
                if(!res.every(r => r.ok)){
                    setError('Error fetching data')
                    setLoading(false)
                    return
                }
                const data: any = await Promise.all(res.map(r => r.json()))
                setPatients(data[0].length)
                setAppointments(data[1].length)
                setClinicalDocuments(data[2].length)
            }
            catch(err: any){
                setLoading(false)
                setError(err)
            }
        }

        fetchData()
        setLoading(false)
    }, [])

  return (
    <div className='w-full flex justify-center flex-wrap gap-8' >
        {role === "nurse" && <Link href='/patients' className='flex-1' title='blog'>
            <div className="min-w-72  h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                <div className="text-6xl text-[#04353D] font-bold">{patients}</div>
                <div className="text-2xl text-gray-600 text-center font-light">Patients</div>
            </div>
        </Link>}
        {role === "admin" && <Link href='/patients' className='flex-1' title='blog'>
            <div className="min-w-72  h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                <div className="text-6xl text-[#04353D] font-bold">{patients}</div>
                <div className="text-2xl text-gray-600 text-center font-light">Patients</div>
            </div>
        </Link>}
        {role === "admin" && <Link href='/appointments' className='flex-1' title='newsletter'>
            <div className="min-w-72  h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                <div className="text-6xl text-[#04353D] font-bold">{appointments}</div>
                <div className="text-2xl text-gray-600 text-center font-light">Appointments</div>
            </div>
        </Link>}
        {role === "doctor" && <Link href='/clinical-documents' className='flex-1' title='newsletter'>
            <div className="min-w-72  h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                <div className="text-6xl text-[#04353D] font-bold">{clinicalDocuments}</div>
                <div className="text-2xl text-gray-600 text-center font-light">Documents</div>
            </div>
        </Link>}
        {role === "admin" && <Link href='/clinical-documents' className='flex-1' title='newsletter'>
            <div className="min-w-72  h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                <div className="text-6xl text-[#04353D] font-bold">{clinicalDocuments}</div>
                <div className="text-2xl text-gray-600 text-center font-light">Documents</div>
            </div>
        </Link>}
    </div>
  )
}
