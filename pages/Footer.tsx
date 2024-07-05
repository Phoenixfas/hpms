import React from 'react'

export default function Footer() {
  const test = () => {
    fetch('https://hpms.vercel.app/api/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2N2ZjNTAzOWE2M2E0NjY2OTI5M2Q0YSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyMDIxNzAxMiwiZXhwIjoxNzIwMzAzNDEyfQ.YYR9YWXx0x3EbhkY-SBSuNMfDrKgbBCwjx6MAlSuIpI'
        },
        // body: JSON.stringify({
        //     username: 'admin',
        //     password: 'password123'
        
        // })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch((err : any) => {
        console.log(err.message)
    })
  }
  return (
    <div className='w-full py-4 px-8 flex items-center justify-center'>
      <p className='text-sm text-[#000000dd]' onClick={() => test()}>Hospital Patient Management System</p>
    </div>
  )
}
// api/patients/667fc6959a63a46669293d56
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2N2ZjNTAzOWE2M2E0NjY2OTI5M2Q0YSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyMDIxNzAxMiwiZXhwIjoxNzIwMzAzNDEyfQ.YYR9YWXx0x3EbhkY-SBSuNMfDrKgbBCwjx6MAlSuIpI