import React from 'react'

const a: number[] = [1, 2, 3, 4]
export default function RegisterersLoading() {
  return (
    <div className='min-h-[60vh] gap-5 w-full flex flex-col flex-wrap items-start'>
      <div className='w-full p-3 gap-5 border-b border-gray-400 sub-card flex flex-wrap items-center justify-between'>
            <div className='text-sm text-black font-bold'>Name</div>
            <div className='text-sm text-black font-bold'>Email</div>
            <div className='text-sm text-black font-bold'>Gender</div>
            <div className='text-sm text-black font-bold'></div>
        </div>
        
        {a.map((i) => (
            <div key={i} className='w-full p-3 py-6 gap-5 shadow-lg bg-white rounded-xl sub-card flex flex-wrap items-center justify-between'>
                <div className='text-sm text-black font-bold h-5 loading rounded-md w-1/3'></div>
            </div>
        ))}
        
    </div>
  )
}
