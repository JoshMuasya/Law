import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='p-5 fixed top-0 left-0 z-10'>
        <Image 
            src='/logo.png'
            alt='Logo'
            width={65}
            height={56}
        />
    </div>
  )
}

export default Header