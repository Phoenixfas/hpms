'use client'
import React, {useEffect} from 'react'
import { useAppSelector } from "../redux/hooks"


interface Props {
    children: React.ReactNode;
}

import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"
import LoginForm from "./LoginForm"

export default function Auth({children} : Props) {

  const loggedIn = useAppSelector((state) => state.login.value)

  return (
    <>
        {loggedIn ? <div className="flex overflow-hidden">
            <Sidebar />
            <div className="h-screen flex-1 overflow-y-scroll">
                <Header />
                {children}
                <Footer />
            </div>
        </div> : <LoginForm />}
    </>
  )
}
