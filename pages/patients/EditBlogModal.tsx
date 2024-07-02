'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { toggleBlogAddModal } from '../../redux/slices/blogAddModalToggleSlice'
import { GrClose } from 'react-icons/gr'
import { FaPlus } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import postReq from '../../hooks/postReq'
// import { useMutation } from '@apollo/client'
// import { GET_ARTICLES } from '../../graphql/queries/articleQueries'
// import { ADD_ARTICLE } from '../../graphql/mutations/articleMutations'

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}


export default function EditBlogModal() {
    const dispatch = useAppDispatch()
    const blogAddModalToggle = useAppSelector(state => state.blogAddModalToggle.value)

    const [err, setErr] = useState<any>("")

    const [name, setName] = useState("")
    const [url, setUrl] = useState("")
    const [description, setDescription] = useState("")

    const token = useAppSelector(state => state.login.admin)
    const addArticle = async (body: any) => {
        await postReq('partners', body, token)
        window.location.reload()
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(name === "") {
            setErr("Please fill in all fields")
            return
        }

        // @ts-ignore
        const img: any = document.getElementById("image").files[0]
        const imgData = new FormData()
        imgData.append('file', img)
        imgData.append('upload_preset', 'amec24')

        const res = await fetch('https://api.cloudinary.com/v1_1/drp73bqti/image/upload', {
            method: 'POST',
            body: imgData
        })
        if(!res.ok) {
            setErr("Please upload an image")
            return
        }
        const json = await res.json()

        if(json.secure_url === "") {
            setErr("Please upload an image")
            return
        }
        if(json.secure_url !== "") {
            setErr("")
            const image = json.secure_url
            await addArticle({
                name,
                logo: image,
                url,
                description,
            })
            setName("")
            setUrl("")
            setDescription("")
            dispatch(toggleBlogAddModal())
        }
    }

    // if(loading) console.log("loading")
    // if(error) console.log(error)
    // if(data) console.log(data)

  return (
    <>
      <AnimatePresence>
            {blogAddModalToggle && (
                <motion.div variants={variants} initial={"closed"} animate={"open"} exit={"closed"} className={`fixed z-10 top-0 blog-modal left-0 w-full h-screen bg-[#00000077] flex py-32 justify-center overflow-y-auto`}>
                <motion.div initial={{y: "-100%"}} animate={{y: 0}}  transition={{duration: .3}} className='relative edit-modal w-[600px] h-fit flex flex-col bg-white rounded-2xl p-20'>
                    <div className="p-3 rounded-full absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 bg-red-400 text-white text-xl cursor-pointer" onClick={() => dispatch(toggleBlogAddModal())}>
                        <GrClose />
                    </div>
                    <div className=' w-full'>
                        <h1 className='text-3xl font-bold text-center mb-10'>Add New Media Partner</h1>
                        {err && <p className="text-red-500 text-center mb-5">{err}</p>}
                        <form onSubmit={onSubmit} className="flex flex-col">
                            <div className="w-full flex flex-col mb-5">
                                <label>Name</label>
                                <input placeholder="Enter Name" required type="text" className="p-3 pl-0 text-md border-b-2 border-gray-300 focus:border-[#489b42] duration-300 outline-none" id="name" value={name} onChange={(e)=> setName(e.target.value)} />
                            </div>
                            <div className="w-full flex flex-col mb-5">
                                <label>Logo</label>
                                <input placeholder="Upload Logo" required type="file" accept="image/*" className="p-3 pl-0 text-md border-b-2 border-gray-300 focus:border-[#489b42] duration-300 outline-none" id="image" />
                            </div>
                            <div className="w-full flex flex-col mb-5">
                                <label>Website Url</label>
                                <input placeholder="Enter Website Url" type="text" className="p-3 pl-0 text-md border-b-2 border-gray-300 focus:border-[#489b42] duration-300 outline-none" id="url" value={url} onChange={(e)=> setUrl(e.target.value)} />
                            </div>
                            <div className="w-full flex flex-col mb-5">
                                <label>Description</label>
                                <input placeholder="Enter Description" type="text" className="p-3 pl-0 text-md border-b-2 border-gray-300 focus:border-[#489b42] duration-300 outline-none" id="description" value={description} onChange={(e)=> setDescription(e.target.value)} />
                            </div>
                            <button type='submit' className="px-5 py-2 bg-green-500 text-lg font-light w-fit self-end mt-10 cursor-pointer text-white rounded-md flex items-center gap-3"><FaPlus /> ADD PARTNER</button>
                            <Link target="_blank" className="self-end text-green-500 mt-8" href="https://www.markdownguide.org/cheat-sheet/">Markdown Guide</Link>
                        </form>
                    </div>
                </motion.div>
                </motion.div>
            )}
      </AnimatePresence>
    </>
  )
}
