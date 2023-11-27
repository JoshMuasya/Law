import React from 'react'
import Link from 'next/link'
import ViewDropdown from '@/app/components/ViewDropdown'

const ViewCases = () => {
  return (
    <div className='w-full h-full m:h-screen flex flex-col justify-center align-middle items-center back-pic-dark bg-fixed bg-cover pt-16 pb-14'>
      {/* Overlay */}
      <div className='fixed m:h-screen h-full top-0 left-0 right-0 bottom-0 z-[2] bg-black opacity-70'/>
      {/* Main */}
      <div className='z-10 flex flex-col items-center align-middle justify-center my-24'>
        {/* Title */}
        <div>
          <h2 className="card-title font-black font-mont text-lg pb-3">
            VIEW CASES
          </h2>
        </div>

        {/* Content */}
        <div className='my-10'>
          <ViewDropdown />          
        </div>
      </div>
    </div>
  )
}

export default ViewCases