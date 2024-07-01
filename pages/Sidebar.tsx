'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoCaretForward, IoGameController, IoBulbSharp } from 'react-icons/io5'
import { AiFillDashboard } from 'react-icons/ai'
import { GiNewspaper, GiBarracksTent } from 'react-icons/gi'
import { MdArticle } from 'react-icons/md'
import { FaUsers, FaFlagCheckered, FaChalkboardTeacher } from 'react-icons/fa'
import { SiHackaday } from 'react-icons/si'

export default function Sidebar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [active, setActive] = useState('')

    useEffect(() => {
        switch (pathname) {
            case '/':
                setActive('dashboard')
                break
            case '/blog':
                setActive('blog')
                break
            case '/newsletter':
                setActive('newsletter')
                break
            case '/vendors':
                setActive('vendors')
                break
            case '/ctf':
                setActive('ctf')
                break
            case '/hackathon':
                setActive('hackathon')
                break
            case '/lanparty':
                setActive('lanparty')
                break
            case '/participants':
                setActive('participants')
                break
            case '/startups':
                setActive('startups')
                break
            case '/workshop':
                setActive('workshop')
                break
            default:
                break
        }
    }, [])
  return (
    <div className={`relative ${isOpen ? "w-72 sidebar" : "w-20"} h-screen m-0 duration-300 rounded-r-md bg-[#0b5b05] `}>
        <div className='bg-[#dddd19] rounded-full absolute right-0 top-20 translate-x-1/2 cursor-pointer w-6 h-6 flex items-center justify-center'>
            <IoCaretForward className={`${isOpen ? "rotate-180" : ""} duration-300`} color='#0b5b05' size={20} onClick={() => setIsOpen(!isOpen)} />
        </div>

        <div className='h-28 w-full flex items-start justify-center pt-3'>
            <Image className='duration-300' src='/Logo.svg' width={isOpen ? 100 : 50} height={isOpen ? 100 : 50} alt="Logo" priority/>
        </div>

        <div className='flex flex-col  gap-1 w-full p-4'>
            <Link href='/' onClick={() => setActive('dashboard')} title="dashboard">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-[#489b42] ${active==='dashboard' ? 'bg-[#489b42]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <AiFillDashboard className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Dashboard</p>}
                </div>
            </Link>
            <Link href='/blog' onClick={() => setActive('blog')} title="blog">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-[#489b42] ${active==='blog' ? 'bg-[#489b42]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <MdArticle className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Blog</p>}
                </div>
            </Link>
            <Link href='/newsletter' onClick={() => setActive('newsletter')} title="newsletter">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-[#489b42] ${active==='newsletter' ? 'bg-[#489b42]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <GiNewspaper className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Newsletter</p>}
                </div>
            </Link>


            <hr />


            <Link href='/vendors' onClick={() => setActive('vendors')} title="vendors">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-[#489b42] ${active==='vendors' ? 'bg-[#489b42]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <GiBarracksTent className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Vendors</p>}
                </div>
            </Link>
            <Link href='/startups' onClick={() => setActive('startups')} title="Business Corner">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-[#489b42] ${active==='startups' ? 'bg-[#489b42]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <IoBulbSharp className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Business Corner</p>}
                </div>
            </Link>
            <Link href='/participants' onClick={() => setActive('participants')} title="participants">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-[#489b42] ${active==='participants' ? 'bg-[#489b42]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <FaUsers className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Visitors</p>}
                </div>
            </Link>
            <Link href='/ctf' onClick={() => setActive('ctf')} title="ctf">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-[#489b42] ${active==='ctf' ? 'bg-[#489b42]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <FaFlagCheckered className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Catch The Flag</p>}
                </div>
            </Link>
            <Link href='/hackathon' onClick={() => setActive('hackathon')} title="hackathon">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-[#489b42] ${active==='hackathon' ? 'bg-[#489b42]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <SiHackaday className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Hackathon</p>}
                </div>
            </Link>
            <Link href='/lanparty' onClick={() => setActive('lanparty')} title="lanparty">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-[#489b42] ${active==='lanparty' ? 'bg-[#489b42]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <IoGameController className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>LAN Party</p>}
                </div>
            </Link>
            <Link href='/workshop' onClick={() => setActive('workshop')} title="workshop">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-[#489b42] ${active==='workshop' ? 'bg-[#489b42]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <FaChalkboardTeacher className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Workshop</p>}
                </div>
            </Link>
        </div>
    </div>
  )
}
