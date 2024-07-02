'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaWheelchair } from "react-icons/fa";
import { FaUserDoctor, FaRegPenToSquare } from "react-icons/fa6";
import { AiFillDashboard } from "react-icons/ai";
import { IoCaretForward } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Sidebar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [active, setActive] = useState('')

    useEffect(() => {
        switch (pathname) {
            case '/':
                setActive('dashboard')
                break
            case '/patients':
                setActive('patients')
                break
            case '/clinical-documents':
                setActive('clinical-documents')
                break
            case '/appointments':
                setActive('appointments')
                break
            default:
                break
        }
    }, [])
  return (
    <div className={`relative ${isOpen ? "w-72 sidebar" : "w-20"} h-screen m-0 duration-300 rounded-r-md bg-[#04353D] `}>
        <div className='bg-[#5AC5C8] rounded-full absolute right-0 top-20 translate-x-1/2 cursor-pointer w-6 h-6 flex items-center justify-center'>
            <IoCaretForward className={`${isOpen ? "rotate-180" : ""} duration-300`} color='#fff' size={20} onClick={() => setIsOpen(!isOpen)} />
        </div>

        <div className='h-28 w-full flex items-start justify-center pt-3'>
            <Image className='duration-300' src='/Logo.png' width={isOpen ? 100 : 50} height={isOpen ? 100 : 50} alt="Logo" priority/>
        </div>

        <div className='flex flex-col  gap-1 w-full p-4'>
            <Link href='/' onClick={() => setActive('dashboard')} title="dashboard">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-[#5AC5C8] ${active==='dashboard' ? 'bg-[#5AC5C8]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <AiFillDashboard className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Dashboard</p>}
                </div>
            </Link>
            <Link href='/patients' onClick={() => setActive('patients')} title="blog">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-[#5AC5C8] ${active==='patients' ? 'bg-[#5AC5C8]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <FaWheelchair className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Patients</p>}
                </div>
            </Link>
            <Link href='/clinical-documents' onClick={() => setActive('clinical-documents')} title="newsletter">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-[#5AC5C8] ${active==='doctors' ? 'bg-[#5AC5C8]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <IoDocumentTextOutline className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Clinical Documents</p>}
                </div>
            </Link>
            <Link href='/appointments' onClick={() => setActive('appointments')} title="newsletter">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-[#5AC5C8] ${active==='appointments' ? 'bg-[#5AC5C8]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <FaRegPenToSquare className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Appointments</p>}
                </div>
            </Link>


            
        </div>
    </div>
  )
}
