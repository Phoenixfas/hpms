'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleRegModal } from '../../redux/slices/regModalToggleSlice';
import { changeActiveSpeaker } from '../../redux/slices/activeSpeakerSlice';
import { IoSearchOutline } from 'react-icons/io5'
// import vendors from '../../data/vendors';

export default function RegSearch({path} : any) {
    const dispatch = useAppDispatch();

    const [data, setData] = useState<any>([])
    const [filteredData, setFilteredData] = useState([]);
    const [word, setWord] = useState("");
    
    const token = useAppSelector((state) => state.login.admin)

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        const fetchData = async () => {
            const res = await fetch(`https://dashboard.afriopia.com/api/${path}`, config)
            const data = await res.json()
            setData(data.data)
        }
        fetchData()
    }, [])

    const handleSearch = (e: any) => {
        const keyword = e.target.value;
        // const newFilter = data.articles.filter((article: any) => {
        //   return article.title.toLowerCase().includes(keyword.toLowerCase())
        // })
        if(keyword === "") {
          setFilteredData([])
          setWord("")
        }

        setFilteredData( data?.filter((reg: any) => reg.name.toLowerCase().includes(keyword.toLowerCase())))
        setWord(keyword)
        
      }
      const clearSearch = () => {
        setFilteredData([])
        setWord("")
      }
    

    const checkEmpty = (e: any) => {
        if(e.target.value === "") {
            setFilteredData([])
            setWord("")
        }
    }
    


  return (
    <div className='relative' >
        <div className='p-4 h-[40px] bg-[#ccc] flex items-center gap-3 rounded-full'>
            <input  id='blog-search' className='bg-transparent border-none outline-none text-sm placeholder:text-gray-500 w-[250px] top-section-search' type="text" placeholder='Search Name' value={word} onChange={(e) => {
                handleSearch(e)
                checkEmpty(e)
            }} onKeyDown={checkEmpty} />
            <IoSearchOutline  id='blog-search' className='text-2xl text-gray-500 ' />
        </div>
        {filteredData.length != 0 && (
            <div className="absolute bottom-0 w-full translate-y-[110%] bg-white shadow-xl rounded-xl p-3" >
                {data && filteredData.slice(0, 10).map((reg: any, index: any) => (
                    <div className='px-5 py-3 duration-300 hover:bg-gray-100 hover:shadow-md hover:rounded-xl cursor-pointer' key={index}>
                        <p id='blog-search' onClick={() => {
                            dispatch(toggleRegModal())
                            dispatch(changeActiveSpeaker(reg))
                            clearSearch()
                            }} 
                        >
                            {reg.name.charAt(0).toUpperCase() + reg.name.slice(1)}
                        </p>
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}
