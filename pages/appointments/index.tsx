import React from 'react'
import TopSection from './TopSection'
import RegistererPaginator from './RegistererPaginator'
import ViewRegModal from './ViewRegModal'
import EditBlogModal from './EditBlogModal'

export default function patients() {
  return (
    <div className=" blog min-h-screen p-16 pt-5">
        <ViewRegModal path={"appointments"} />
        <EditBlogModal />
        <TopSection path={"appointments"} title={"Appointments"} desc={"List of all Appointments"} />
        <RegistererPaginator path={"appointments"} />
    </div>
  )
}
