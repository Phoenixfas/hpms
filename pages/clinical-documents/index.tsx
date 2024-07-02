import React from 'react'
import TopSection from './TopSection'
import RegistererPaginator from './RegistererPaginator'
import ViewRegModal from './ViewRegModal'
import EditBlogModal from './EditBlogModal'

export default function patients() {
  return (
    <div className=" blog min-h-screen p-16 pt-5">
        <ViewRegModal path={"clinical-documents"} />
        <EditBlogModal />
        <TopSection path={"clinical-documents"} title={"Clinical Documents"} desc={"List of all Documents"} />
        <RegistererPaginator path={"clinical-documents"} />
    </div>
  )
}
