import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center align-middle items-center back-pic-dark bg-fixed bg-cover'>
      {/* overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 z-[2] h-screen bg-black opacity-70'/>

      {/* Main */}
      <div className='z-10 flex flex-col justify-center align-middle items-center'>
        {/* Description */}
        <div className='flex flex-col justify-center align-middle items-center font-mont font-black'>
          <h1 className='text-lm m:text-xl md:text-xxl pb-12 text-secondary'>
            DIGIMATIC
          </h1>

          <h1 className='text-lm m:text-xl md:text-xxl pb-12 text-primary'>
            LAW MANAGEMENT
          </h1>

          <h1 className='text-lm m:text-xl md:text-xxl text-secondary pb-12'>
            APP
          </h1>
        </div>

        {/* Button */}
        <div className='bg-accent hover:bg-accent-content border-0 w-20 s:w-32 m:w-52 h-8 m:h-12 rounded-ss-3xl rounded-ee-3xl flex justify-center items-center align-middle cursor-pointer'>
          <Link
            href='/auth/login'
            className='font-tinos font-bold text-s m:text-l'
          >
            LOGIN
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page