'use client'
import React from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { FaEye } from 'react-icons/fa'
import { toggleRegModal } from '../../redux/slices/regModalToggleSlice'
import { changeActiveBlog } from '../../redux/slices/activeBlogSlice'

interface RegisterersListProps {
  d: any
}


export default function RegisterersList({d}: RegisterersListProps) {
    const regs = d
    const dispatch = useAppDispatch()

  
  // console.log(regs)
  return (
    <div className='min-h-[60vh] gap-5 w-full flex flex-col flex-wrap items-start'>
        <div className='w-full p-3 gap-5 border-b border-gray-400 sub-card flex flex-wrap items-center justify-between'>
            <div className='text-sm text-black font-bold'>Patient Name</div>
            {/* <div className='text-sm text-black font-bold'>Email</div> */}
            {/* <div className='text-sm text-black font-bold'>Type</div> */}
            <div className='text-sm text-black font-bold'></div>
        </div>
        {regs.map((reg: any, index: any) => (
            <div key={index} className='w-full p-3 gap-5 shadow-lg bg-white hover:scale-[1.02] duration-300 rounded-xl sub-card flex flex-wrap items-center justify-between'>
                <div className='text-sm text-black font-bold flex-1'>{reg.patient?.name}</div>
                {/* <div className='text-sm text-black font-bold flex-1'>{reg.email}</div> */}
                {/* <div className={`text-sm text-black font-bold flex-1`}>{reg.type}</div> */}
                <button className="px-3 py-1 bg-blue-500 text-lg w-fit  cursor-pointer text-white rounded-md flex items-center gap-2" onClick={() => {
                    dispatch(toggleRegModal())
                    dispatch(changeActiveBlog(reg))
                }} ><FaEye /> Details</button>
            </div>
        ))}
        
    </div>
  )
}


