'use client'
import React from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { toggleRegModal } from '../../redux/slices/regModalToggleSlice'
import { GrClose } from 'react-icons/gr'
import { CgCloseO } from 'react-icons/cg'
import { FaTrash, FaRegCheckCircle } from 'react-icons/fa'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import deleteReq from '../../hooks/deleteReq'

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}


export default function ViewRegModal({path}: any) {
    const dispatch = useAppDispatch()
    const regModalToggle = useAppSelector(state => state.regModalToggle.value)
    const regData = useAppSelector(state => state.activeBlog)

    const token = useAppSelector((state) => state.login.admin)

  
    const approveReg = async (data: any) => {
        const res = await fetch(`https://dashboard.afriopia.com/api/exhibitors/${data._id}/approve`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                ...data,
                approved: true
            })
        })
        const dataRes = await res.json()
        dispatch(toggleRegModal())
        window.location.reload()
    }

    const deleteReg = async (id: any) => {
        const data = await deleteReq('appointments', id, token)
        console.log(data)
        dispatch(toggleRegModal())
        window.location.reload()
    }

    // console.log(regData)

  return (
    <>
      <AnimatePresence>
        {regModalToggle && (
            <motion.div variants={variants} initial={"closed"} animate={"open"} exit={"closed"} className={`fixed z-10 top-0 blog-modal left-0 w-full h-screen bg-[#00000077] flex py-16 justify-center overflow-y-auto`}>
              <motion.div initial={{y: "100%"}} animate={{y: 0}}  transition={{duration: .3}} className='relative max-w-[800px] h-fit flex flex-col bg-white rounded-2xl p-20'>
                <div className="p-3 rounded-full absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 bg-red-400 text-white text-xl cursor-pointer" onClick={() => dispatch(toggleRegModal())}>
                  <GrClose />
                </div>
                <div className=' w-full'>
                  <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    <div className='text-xl font-bold text-black'>Patient Name</div>
                    {/* @ts-ignore */}
                    <div className='text-xl font-light text-black '>{regData.patient?.name}</div>
                  </div>
                  <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    <div className='text-xl font-bold text-black'>Doctor Name</div>
                    {/* @ts-ignore */}
                    <div className='text-xl font-light text-black '>{regData.doctor?.username}</div>
                  </div>
                  <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    <div className='text-xl font-bold text-black'>Date</div>
                    <div className='text-xl font-light text-black '>{regData.date}</div>
                  </div>
                  <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    <div className='text-xl font-bold text-black'>Notes</div>
                    <div className='text-xl font-light text-black '>{regData.notes}</div>
                  </div>

                </div>
                {/* {!regData.approved && <button className="px-5 py-2 bg-green-500 text-lg font-light w-fit self-end mt-10 cursor-pointer text-white rounded-md flex items-center gap-3" onClick={() => {
                  approveReg(regData)
                }} ><FaRegCheckCircle /> APPROVE Vendor</button>} */}
                <button className="px-5 py-2 bg-red-500 text-lg font-light w-fit self-end mt-10 cursor-pointer text-white rounded-md flex items-center gap-3" onClick={() => {
                  deleteReg(regData._id)
                }} ><FaTrash />DELETE Appointment</button>
              </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
