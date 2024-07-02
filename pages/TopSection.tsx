'use client'

export default function TopSection() {
    // const sortBlogsByNewest = useAppSelector(state => state.sortBlogs.value)
    
  return (
    <div className='w-full h-20 mb-10 flex items-center justify-between top-section'>
        <div>
            <h1 className='text-4xl text-[#04353D] font-black mb-3 heading'>DASHBOARD</h1>
            {/* <p className='text-sm text-gray-700'>List of all blogs written</p> */}
        </div>

        <div className='flex-1 flex items-center justify-end gap-10 top-section-r'>
            
        </div>
    </div>
  )
}
