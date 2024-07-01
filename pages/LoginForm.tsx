'use client'
import { useState, useEffect } from 'react'
import { FaUserLock } from "react-icons/fa"
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { login, logout } from '../redux/auth/loginSlice'

export default function LoginForm() {
    const [error, setError] = useState<string>('')
    const [isLoading, setIsLoading] = useState(false)
    
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    
    
    const dispatch = useAppDispatch()
    const router = useRouter()


    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const adminData = {
            username,
            password
        }

        setIsLoading(true)
        fetch('https://hpms.vercel.app/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // if (data.success === false) {
            //     setIsLoading(false)
            //     setError(data.msg)
            // } else {
            //     setIsLoading(false)
            //     dispatch(login(data.token))
            // }
        })
        .catch((err : any) => {
            setIsLoading(false)
            setError(err.message)
        })
    }


    if (isLoading) {
        return (
            <div className='absolute w-full h-screen bg-gradient-to-tr from-[#dddd19] to-[#489b42] p-5 flex items-center justify-center'>
                <div className="w-10 h-10 rounded-full border-[5px] border-r-transparent border-white animate-spin"></div>
            </div>
        )
    }

  return (
    <div className='absolute w-full h-screen bg-gradient-to-tr from-[#dddd19] to-[#489b42] p-5 flex items-center justify-center'>
        <div className="w-[400px] bg-white rounded-2xl p-10 flex flex-col items-center">
            <div className="text-5xl mb-5 text-white p-3 rounded-full bg-[#489b42]">
                <FaUserLock />
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <form className="flex flex-col w-full text-black" onSubmit={onSubmit}>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" required name="username" id="username" placeholder='username' className="mb-5 p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#489b42]" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required name="password" id="password" placeholder='password' className="mb-5 p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#489b42]" />
                <button type="submit" className="bg-[#489b42] text-white p-2 rounded-lg">Login</button>
            </form>
        </div>
    </div>
  )
}
