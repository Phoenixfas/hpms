import { useState } from 'react'
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'
import { useAppDispatch } from '../redux/hooks'
import { logout } from '../redux/auth/loginSlice'
import { useRouter } from 'next/navigation'

export default function Header() {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const onLogout = () => {
    dispatch(logout())
    router.push('/')
  }

  return (
    <div className='h-16 w-full relative'>
        <div className='h-full w-1/2 rounded-l-full bg-[#5AC5C8] shadow-lg float-right flex justify-end items-center px-10'>
            <div className='header_admin' >
                <FaUserCircle className='text-white text-[40px]' title='admin' />
                <div className='header_adminContent'>
                    {/* <h4 className='font-thin text-lg text-center'>admin</h4> */}
                    <button className='text-lg px-5 py-2 rounded-md outline-none border-none hover:bg-[#fff] hover:text-[#04353D] duration-300 bg-[#5AC5C8] text-white flex items-center gap-3' onClick={onLogout}>Logout <FaSignOutAlt size={25} /></button>
                </div>
            </div>
        </div>
    </div>
  )
}
